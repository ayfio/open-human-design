/**
 * Connection view — how two designs interact. Person A is the current
 * chart; Person B comes from saved people or a quick manual entry.
 */

import { compareHumanDesign } from 'natalengine';
import { renderBodygraph } from '../bodygraph.js';
import { computeChart } from '../lib/chartdata.js';
import { listPeople, birthFromPerson, getSharedGuest } from '../lib/people.js';
import { createPlaceSearch } from '../lib/placesearch.js';
import { esc } from '../lib/format.js';
import { getCurrentChart } from './chart.js';

let placeB = null;

export function setupConnectionView() {
  document.getElementById('conn-calculate').addEventListener('click', runComparison);
  placeB = createPlaceSearch(document.getElementById('conn-place'), {
    placeholder: 'Birth place (resolves the timezone)',
    getDateTime: () => ({
      date: document.getElementById('conn-date').value,
      time: document.getElementById('conn-time').value
    })
  });
}

/** Refresh the saved-people picker each time the view opens. */
export function renderConnectionView() {
  const select = document.getElementById('conn-person');
  const people = listPeople();
  const current = getCurrentChart();
  const options = people
    .filter(p => p.id !== current?.birth?.id)
    .map(p => `<option value="${esc(p.id)}">${esc(p.name)}</option>`)
    .join('');
  // A chart they arrived at via a share link stays comparable (P1-11).
  const guest = getSharedGuest();
  const guestOpt = guest?.name && guest?.birthDate && guest.id !== current?.birth?.id
    ? `<option value="__guest">${esc(guest.name)} (shared chart)</option>` : '';
  select.innerHTML = `<option value="">— enter birth data below —</option>${guestOpt}${options}`;
  select.onchange = () => {
    document.getElementById('conn-manual').classList.toggle('hidden', !!select.value);
  };
}

/** Dyad loop: select the shared/invited person and run the comparison. */
export function compareWithGuest() {
  renderConnectionView();
  const select = document.getElementById('conn-person');
  if (!select || ![...select.options].some(o => o.value === '__guest')) return;
  select.value = '__guest';
  document.getElementById('conn-manual')?.classList.add('hidden');
  runComparison();
}

function runComparison() {
  const current = getCurrentChart();
  if (!current) return;

  const select = document.getElementById('conn-person');
  let birthB = null;

  if (select.value === '__guest') {
    birthB = getSharedGuest();
  } else if (select.value) {
    const person = listPeople().find(p => p.id === select.value);
    if (person) birthB = birthFromPerson(person);
  } else {
    const date = document.getElementById('conn-date').value;
    if (!date) return;
    const time = document.getElementById('conn-time').value || '12:00';
    const loc = placeB?.getBirthLocation(date, time);
    if (!loc) { placeB?.flagMissing(); return; } // no silent UTC=0
    birthB = {
      name: document.getElementById('conn-name').value.trim() || 'Person B',
      birthDate: date,
      birthTime: time,
      timezone: loc.timezone,
      location: loc.lat != null ? loc : null
    };
  }
  if (!birthB) return;

  const b = computeChart(birthB);
  const comparison = compareHumanDesign(current.chart, b.chart);
  renderConnectionContent(comparison, current, b);
}

// The four ways two charts share channels — explained, with the circuit each
// connection runs through (individual / tribal / collective / integration).
const CONN_TYPES = [
  ['electromagnetic', 'Electromagnetic', 'var(--electromagnetic)',
    'Each of you carries one half of a channel — together you complete it, generating energy neither has alone. This is the spark of attraction, and the friction that rides along with it.'],
  ['companionship', 'Companionship', 'var(--integration)',
    'You both already have the whole channel — shared, stable common ground where you simply “get” each other with no effort.'],
  ['compromise', 'Compromise', 'var(--collective)',
    'One of you has the full channel, the other only half of it. The full-channel person sets the tone here; the other gets drawn into their frequency — workable, but it asks for give and take.'],
  ['dominance', 'Dominance', 'var(--text-tertiary)',
    'One of you has the full channel and the other has nothing in it. That energy flows one way, consistently conditioning the open person — powerful, and worth being conscious of.']
];

function renderConnectionContent(comparison, a, b) {
  const container = document.getElementById('connection-content');
  const cc = comparison.connectionChart;
  const nameA = a.birth.name || 'You';
  const nameB = b.birth.name || 'Person B';
  const ti = comparison.typeInteraction;
  const ad = comparison.authorityDynamic;
  const ph = comparison.profileHarmony;
  const br = comparison.bridging;
  const stats = comparison.stats || {};

  const circuitBadge = (c) => c ? `<span class="circuit-badge ${esc(c)}">${esc(c)}</span>` : '';

  const connSection = ([key, label, color, blurb]) => {
    const items = cc.connections[key] || [];
    return `
      <div class="conn-section">
        <div class="conn-section-head"><span class="panel-title">${label}</span><span class="conn-count">${items.length}</span></div>
        <p class="panel-intro">${blurb}</p>
        ${items.length ? items.map(c => `
          <div class="connection-type" style="border-left:3px solid ${color}">
            <div class="conn-channel">${esc(c.channel)} <span class="conn-gates">(${c.gates.join('–')})</span> ${circuitBadge(c.circuit)}</div>
            <div class="conn-desc">${esc(c.description)}</div>
          </div>`).join('')
        : `<div class="conn-empty">No ${label.toLowerCase()} channels between you.</div>`}
      </div>`;
  };

  // Center conditioning map — who steadily influences whom.
  const cd = comparison.centerDynamics || [];
  const conditioning = cd.filter(c => /Conditions/.test(c.dynamic)).map(c => {
    const from = c.dynamic.startsWith('A') ? nameA : nameB;
    const to = c.dynamic.startsWith('A') ? nameB : nameA;
    return `<div class="conn-center"><strong>${esc(c.centerName)}</strong> — ${esc(from)} conditions ${esc(to)} <span class="conn-center-theme">${esc(c.theme)}</span></div>`;
  });
  const bothDefined = cd.filter(c => c.dynamic === 'Both Defined').map(c => c.centerName);
  const bothOpen = cd.filter(c => c.dynamic === 'Both Open').map(c => c.centerName);

  container.innerHTML = `
    <div class="connection-graphs">
      <div class="connection-graph">
        <div class="connection-graph-name">${esc(nameA)}</div>
        <div class="connection-graph-type">${esc(a.chart.type.name)} ${esc(a.chart.profile.numbers)}</div>
        <div id="conn-graph-a"></div>
      </div>
      <div class="connection-graph">
        <div class="connection-graph-name">${esc(nameB)}</div>
        <div class="connection-graph-type">${esc(b.chart.type.name)} ${esc(b.chart.profile.numbers)}</div>
        <div id="conn-graph-b"></div>
      </div>
    </div>

    <div class="conn-dynamic">
      <div class="panel-title">${esc(ti.dynamic)}</div>
      <div class="conn-dynamic-sub">${esc(ti.typeA)} + ${esc(ti.typeB)}</div>
      <p><strong>Gifts</strong> · ${esc(ti.gifts)}</p>
      <p><strong>Challenge</strong> · ${esc(ti.challenges)}</p>
      <p><strong>Make it work</strong> · ${esc(ti.tips)}</p>
    </div>

    <div class="foundation-grid" style="margin-bottom:8px">
      <div class="foundation-item"><div class="label">Together you are</div><div class="value">${esc(cc.compositeType)}</div><div class="detail">${cc.compositeChannelCount} channels combined</div></div>
      <div class="foundation-item"><div class="label">Attraction</div><div class="value">${stats.electromagneticCount ?? cc.connections.electromagnetic.length}</div><div class="detail">electromagnetic links</div></div>
      <div class="foundation-item"><div class="label">Conditioning</div><div class="value">${stats.conditioningCenters ?? conditioning.length}</div><div class="detail">centers one shapes in the other</div></div>
    </div>

    <div class="panel-title" style="margin-top:22px">How you decide together</div>
    <p class="panel-intro">${esc(ad.authorityA)} + ${esc(ad.authorityB)} — ${esc(ad.description)} ${ad.timing ? `<em>Timing: ${esc(ad.timing)}.</em>` : ''}</p>

    <div class="panel-title">Profiles</div>
    <p class="panel-intro">${esc(ph.nameA)} (${esc(ph.profileA)}) + ${esc(ph.nameB)} (${esc(ph.profileB)}) — ${esc(ph.description)}</p>

    <div class="panel-title" style="margin-top:22px">The four ways your channels connect</div>
    ${CONN_TYPES.map(connSection).join('')}

    <div class="panel-title" style="margin-top:22px">Your centers together</div>
    <p class="panel-intro">Where one of you is defined and the other open, the defined person steadily conditions the open one — a consistent, often unspoken influence.</p>
    ${conditioning.length ? conditioning.join('') : '<div class="conn-empty">Neither of you conditions the other’s centers — an unusually independent pairing.</div>'}
    ${bothDefined.length ? `<p class="conn-note"><strong>Both defined:</strong> ${bothDefined.map(esc).join(', ')} — consistent, fixed common ground.</p>` : ''}
    ${bothOpen.length ? `<p class="conn-note"><strong>Both open:</strong> ${bothOpen.map(esc).join(', ')} — you amplify each other (and the room) here; watch for shared not-self patterns.</p>` : ''}

    ${br?.bridgedChannels?.length ? `
      <div class="panel-title" style="margin-top:22px">What you create together</div>
      <p class="panel-intro">${esc(br.description)}</p>
      <div class="pills">${br.bridgedChannels.map(c => `<span class="pill">${esc(c.channel)} · ${esc(c.theme)}</span>`).join('')}</div>` : ''}

    <div class="panel-title" style="margin-top:22px">In a nutshell</div>
    <p>${esc(comparison.summary)}</p>
  `;

  renderBodygraph(document.getElementById('conn-graph-a'), a.chart, { compact: true });
  renderBodygraph(document.getElementById('conn-graph-b'), b.chart, { compact: true });
}
