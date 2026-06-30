/**
 * Cloudflare Worker Sync — PeopleStore synchronization layer.
 */

import { getProfiles, saveProfile, deleteProfile } from 'natalengine';
import { getAiAccess, setAiAccess } from './people.js';

const WORKER_URL = import.meta.env.VITE_OHD_WORKER_URL;
const AUTH_TOKEN_KEY = 'ohd-auth-token';
const CURSOR_KEY = 'ohd-sync-cursor';
const DIRTY_KEY = 'ohd-sync-dirty';
const DELETES_KEY = 'ohd-sync-deletes';

export const syncAvailable = !!WORKER_URL;

// --- Auth helpers ----------------------------------------------------------
function getToken() {
  try { return localStorage.getItem(AUTH_TOKEN_KEY); } catch { return null; }
}

function setToken(token) {
  try {
    if (token) localStorage.setItem(AUTH_TOKEN_KEY, token);
    else localStorage.removeItem(AUTH_TOKEN_KEY);
  } catch {}
}

async function workerFetch(path, options = {}) {
  if (!WORKER_URL) throw new Error('Worker URL not configured');
  
  const token = getToken();
  const headers = {
    'content-type': 'application/json',
    ...(token && { 'authorization': `Bearer ${token}` }),
    ...options.headers
  };

  const res = await fetch(`${WORKER_URL}${path}`, {
    ...options,
    headers
  });

  if (res.status === 401) {
    setToken(null);
    throw new Error('AUTH_REQUIRED');
  }
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return res.json();
}

// --- Public auth API -------------------------------------------------------
export async function getSessionUser() {
  if (!syncAvailable) return null;
  try {
    const data = await workerFetch('/auth/verify');
    return data?.user || null;
  } catch (e) {
    if (e.message === 'AUTH_REQUIRED') return null;
    console.warn('Session check failed:', e.message);
    return null;
  }
}

export async function requestMagicLink(email, callbackUrl = '/') {
  return workerFetch('/auth/magic-link', {
    method: 'POST',
    body: JSON.stringify({ email, callbackUrl })
  });
}

export async function completeSignIn(token) {
  const data = await workerFetch('/auth/complete', {
    method: 'POST',
    body: JSON.stringify({ token })
  });
  if (data?.authToken) {
    setToken(data.authToken);
    return data.user;
  }
  throw new Error('Invalid sign-in token');
}

export async function signOut() {
  setToken(null);
  try { await workerFetch('/auth/revoke', { method: 'POST' }); } catch {}
}

// --- Sync engine -----------------------------------------------------------
function profileToWire(p) {
  return {
    id: p.id,
    name: p.name,
    birthDate: p.birthDate,
    birthTime: p.birthTime,
    timeUnknown: !!p.timeUnknown,
    location: p.location || null,
    aiAccess: getAiAccess(p.id),
    updatedAt: p.updatedAt,
    createdAt: p.createdAt
  };
}

export async function syncNow({ firstMerge = false } = {}) {
  if (!syncAvailable || !getToken()) return false;
  
  try {
    const profiles = getProfiles();
    const dirty = firstMerge ? new Set(profiles.map(p => p.id)) : readSet(DIRTY_KEY);
    const deletes = readSet(DELETES_KEY);

    const changes = [
      ...profiles.filter(p => dirty.has(p.id)).map(profileToWire),
      ...[...deletes].map(id => ({ 
        id, 
        deletedAt: new Date().toISOString(), 
        updatedAt: new Date().toISOString() 
      }))
    ];
    
    const since = firstMerge ? '' : (localStorage.getItem(CURSOR_KEY) || '');

    const data = await workerFetch('/sync', {
      method: 'POST',
      body: JSON.stringify({ since, changes })
    });

    writeSet(DIRTY_KEY, new Set());
    writeSet(DELETES_KEY, new Set());

    const stillDirty = readSet(DIRTY_KEY);
    let applied = 0;
    
    for (const c of data.changes || []) {
      if (stillDirty.has(c.id)) continue;
      if (c.deletedAt) {
        deleteProfile(c.id);
        applied++;
        continue;
      }
      saveProfile({
        id: c.id,
        name: c.name,
        birthDate: c.birthDate,
        birthTime: c.birthTime,
        timeUnknown: c.timeUnknown,
        location: c.location
      });
      setAiAccess(c.id, !!c.aiAccess);
      applied++;
    }

    try { localStorage.setItem(CURSOR_KEY, data.now); } catch {}
    if (applied && onChange) onChange();
    return true;
    
  } catch (e) {
    console.warn('sync failed:', e.message);
    return false;
  } finally {
    syncing = false;
  }
}

// --- Utility functions -----------------------------------------------------
function readSet(key) {
  try { return new Set(JSON.parse(localStorage.getItem(key) || '[]')); } 
  catch { return new Set(); }
}

function writeSet(key, set) {
  try { localStorage.setItem(key, JSON.stringify([...set])); } catch {}
}

export function markDirty(id) {
  if (!syncAvailable || !id || !getToken()) return;
  const dirty = readSet(DIRTY_KEY);
  dirty.add(id);
  writeSet(DIRTY_KEY, dirty);
  scheduleSync();
}

export function markDeleted(id) {
  if (!syncAvailable || !id || !getToken()) return;
  const deletes = readSet(DELETES_KEY);
  deletes.add(id);
  writeSet(DELETES_KEY, deletes);
  const dirty = readSet(DIRTY_KEY);
  dirty.delete(id);
  writeSet(DIRTY_KEY, dirty);
  scheduleSync();
}

// --- Background sync -------------------------------------------------------
let timer = null;
let onChange = null;
let syncing = false;

export function scheduleSync(delay = 2000) {
  if (!syncAvailable || !getToken()) return;
  clearTimeout(timer);
  timer = setTimeout(() => syncNow(), delay);
}

export function startSync({ onRemoteChange } = {}) {
  if (!syncAvailable) return;
  
  onChange = onRemoteChange || null;
  const hasCursor = localStorage.getItem(CURSOR_KEY) !== null;
  syncNow({ firstMerge: !hasCursor });
  
  window.addEventListener('focus', () => scheduleSync(200));
  window.addEventListener('online', () => scheduleSync(500));
}
