# Open Human Design — Growth Plan

> A prioritized, actionable plan to grow Open HD (openhumandesign.com) on a $0 budget,
> solo-founder hours, and an authenticity-first ethos. Synthesized from market,
> launch, SEO, community, and viral-loop research (June 2026).
>
> **The throughline:** Open HD's wedge is *all the depth, none of the paywall* — free
> Variable/PHS, connection, transits, penta; no account needed for charts; local-first
> privacy; open-source engine (`natalengine` on npm); and a category-first MCP connector
> so a user's own AI can pull saved people's charts by name. Every growth move below must
> *embody* that wedge — give value away, never gate or trick — so distribution and brand
> reinforce each other.

---

## 1. Positioning

### The white space

The market has three taken anchors and one wide-open territory:

| Position | Owner | Hook |
|---|---|---|
| **The Original / Official** | Jovian Archive, MyBodyGraph | Lineage (Ra Uru Hu) + paid depth ($49–$1,199/yr) |
| **Simple / Daily** | Jenna Zoe / My Human Design (Align) | Digestible audio, ~€6.49/mo, mostly paywalled |
| **Free-depth, no account** | HD&Me, freehumandesignchart.org | "Best free chart" — *contested, but shallow* |
| **OPEN + FREE + PRIVATE + YOURS** | **nobody owns this** | ← Open HD's territory |

Do **not** try to out-official the official site (that's Jovian's lane and invites
trademark friction). Position **against the paywall** as the people's tool. The
contested "free-depth" claimants (HD&Me) lack connection/penta/transits, open-source
credibility, and the AI connector — out-execute on depth, trust, and design.

### The one-liner

> **Open Human Design — free, open-source, and yours.**
> All the depth they paywall. None of the account. Your data stays on your device.

Always pair the name with a clarifying line. ("Open" collides with the HD term of art
*open centers* — benign, but disambiguate immediately so it never reads as "HD about open
centers.") Use **Open HD** as the friendly short form; let the domain carry recognition.
Never imply it's the "official open source of HD."

### Hero copy — 3 grounded options

**Option A — Anti-paywall (the rallying angle, strongest):**
> *Your chart isn't a free sample.* The deep stuff — Variable, PHS, your connections, the
> transits — shouldn't cost $349 a year. Here it's all free, forever. No account. Open source,
> so you can check the math yourself.

**Option B — Yours-forever / privacy-led:**
> Your birth data is your most intimate identifier — exact time and place. Open HD computes
> your full chart *in your browser* and saves it to *your device*. No tracking, no account, no
> selling your stars. Don't trust us — read the code.

**Option C — Depth-led:**
> The complete Human Design chart — Type, Authority, Profile, the four Variables, your
> connections, today's transits, your whole team — calculated to arcminute precision, in an
> interface designed to feel calm instead of overwhelming. Free. Open. No paywall waiting where
> it gets interesting.

**Recommendation:** Lead the homepage with **A** (it rallies the verified anti-paywall
sentiment), make **B** the second pillar (privacy is high-salience and underexploited), and
fold **C**'s depth into the feature grid. The AI connector is the "and one more thing" — never
the hero for the mainstream audience (most won't know what MCP is).

### Messages that land, and for whom

- **Anti-paywall** → the HD mainstream (women 25–45, IG/TikTok). Echo *real* verified
  complaints ("every other step requires payment," "wanting $19 is just greedy," Align's
  "nothing works in the free version"). **Attack the apps that wall off self-knowledge,
  never practitioners** (a $300 live reading is reasonable; a $349/yr app to see your own
  Variable is the target).
- **Yours-forever / privacy** → everyone, but disproportionately resonant given astrology-app
  data leaks (Moonly's 6M-user leak of birth dates + GPS + emails; half of astrology apps
  track users). Make claims *checkable*: local-first, no account, open-source. "Don't trust
  us — read the code."
- **Open-source** → **translate it, don't lead with jargon.** For the mainstream, "open" means
  *free forever, no ads, your data is yours, anyone can verify how it works* — state
  "open-source" as a **trust seal** beneath, like "organic." For the developer/student tail and
  the npm package, **open-source IS the lead.**
- **AI-native ("your AI can read your chart")** → the developer/AI-power-user tail and press.
  A defensible first that closed competitors *structurally cannot copy* (opening their data to
  your AI cannibalizes their own AI upsell). Keep the claim hedged ("likely the first," see §3).

---

## 2. Launch sequence — the next 30 days

A solo founder cannot do every channel on day one. **Front-load the set-once-harvest-forever
MCP directories** (they compound while you sleep), then spend scarce launch-day energy on the
two channels that demand real-time presence (HN + PH), then transition to the slow-burn
audience channels you can sustain.

### Phase 0 — Foundation (Days 1–7, ~1–2 hrs/day)

| Do | Where | Framing / detail | Outcome |
|---|---|---|---|
| Answer-engine-optimize the `natalengine` + app README | GitHub/npm | Clear structure, screenshot/GIF, feature table, one-command `npx` install, MIT license visible. Agents read the README to decide whether to call the tool. | Higher star-conversion; AI-citability |
| Create/age a Product Hunt maker account; do light community activity | Product Hunt | New accounts get throttled — needs **30+ days** age and prior activity. **Start the clock NOW.** | Eligible to rank on launch day |
| Begin *genuine* participation | r/humandesign, r/mcp | Answer chart questions; no links yet. Build the 90/10 ratio before you ever mention the tool. | Standing to recommend later |
| Build the OG-image loop (see §6, Loop 1) | `worker/index.js` | Highest-ROI build; retrofits virality onto every existing share URL. | Every pasted link becomes a card |

### Phase 1 — MCP groundwork (Days 7–18, the compounding moat)

These need lead time and accrue value regardless of launch day. Do them first. Full URLs and
process in **§3**.

1. Publish to the **Official MCP Registry** (cascades into PulseMCP auto-ingest).
2. List + **claim** on **Glama** (needs Docker build + release — *gates* awesome-mcp-servers).
3. Submit to **Smithery** (`smithery.yaml`; can host the stdio server remotely), **mcp.so**,
   **mcp.directory**, **Cline marketplace**.
4. **Then** open the **awesome-mcp-servers PR** (needs the Glama link first, or it's closed in
   7 days).
5. Submit to the **Anthropic Connectors Directory** (longest/most-uncertain queue — start
   early). Open HD's `/mcp` is already OAuth-protected and remote, which fits the Remote-MCP
   form; the engine's stdio MCP fits the Desktop-Extension/MCPB form.
6. Write the deep-dive: *"How I computed Human Design from raw ephemeris"* (Dev.to / blog) to
   seed the launch 1–2 days early.

### Phase 2 — The coordinated burst (one Tue/Wed/Thu in Days 18–25)

GitHub Trending ranks by **star velocity**, so concentrate every channel into one 24–48h window.

- **12:01 AM PT** — self-launch on **Product Hunt** (self-launch ≈ as effective as a hunter in
  2026). Post the **maker-story first comment immediately** (60–80% of voters read it): the
  open-source-because-of-paywalls origin + the AI-connector novelty.
- **Same morning, US business hours** — post **Show HN** with the **engineering framing**
  (HN is hostile to woo, receptive to artifacts):
  > *Show HN: Open-source Human Design engine — arcminute-grade astronomy, local-first, with an
  > MCP server so your AI can read anyone's chart.*
  Lead with: ephemeris correctness (deterministic, verifiable), local-first/no-account privacy,
  MIT engine on npm, the novel MCP first. **Explicitly do not claim HD is scientifically true** —
  "a system people find meaningful; here's the rigorous calculation layer that makes it honest."
  Within 5 min, post a founder comment (motivation, stack, current limitations, the specific
  feedback you want). Pre-empt the known objections (market-size doubt, LLM-life-advice
  liability, "pseudoscientific nonsense") by foregrounding the math/AI separation.
- **Drop the Dev.to deep-dive 1–2 days prior** to pre-warm.
- **Seed** (value-first, sidebar-permitting): r/mcp, the Glama Discord, PulseMCP newsletter
  (pitch Tadas & Mike), and r/humandesign only if rules allow.
- **Block the entire day.** Answer **every** comment on HN and PH within ~2 hours. This single
  behavior is the most repeatable success pattern across every comparable launch (Sidekick: 100+
  answered → 2,000 signups/48h; Destiny's engineering-framed Show HN hit 41 pts vs naked
  astrology's typical 1–5).

**Expected outcome (calibrated, not hyped):** a front-page Show HN can bring 5k–30k uniques /24h
and 500–2,000 GitHub stars; PH self-launch in this spiritual-AI niche performs respectably (cf.
Aistro 492 upvotes) but the spike drops 90%+ within 48h. The **durable** gains are the MCP
directory listings and backlinks, not the spike.

### Phase 3 — Sustained, audience-native (Days 25–30+)

Shift to where the *real* users live (they are **not** on HN/PH). Begin the community entry of
**§4** and the SEO build of **§5**; add a portfolio of niche launch sites (BetaList, Firsto,
`awesome-selfhosted` PR — Open HD's local-first/self-hostable nature qualifies) for durable
backlinks.

---

## 3. The AI-connector wedge — MCP directories & novelty PR

This is Open HD's **most defensible, least-crowded** launch surface. 2026 framing: MCP
directories are "the most frictionless distribution surface ever built"; early movers own the
directory real estate. **Be in every one.**

> **Honesty caveat (important):** soften "the FIRST HD app with AI integration."
> **gethumandesign.com** (Tim Vink) is a *live, near-identical* hosted HD MCP (save people,
> retrieve by name, Claude/Cursor/ChatGPT, free/Pro tiers) and **humandesign.ai** is an older
> hosted chatbot. Reframe to the *defensible* truths: Open HD's engine is **open-source** (vs
> gethumandesign's proprietary one), the **full depth is free** (gethumandesign gates advanced
> details + saved-people behind Pro), calm design, local-first. Use **"the open-source,
> free-depth Human Design MCP"** — and study gethumandesign closely as the nearest competitor.

### Submission checklist (in dependency order)

| # | Registry | URL | Process | Notes |
|---|---|---|---|---|
| 1 | **Official MCP Registry** | registry.modelcontextprotocol.io | Add `server.json` at repo root (reverse-domain name `io.github.<org>/<repo>`), install `mcp-publisher` CLI, `mcp-publisher login github` (GitHub OIDC — **org membership must be public**), `mcp-publisher publish`. | Metadata-only (package stays on npm — perfect). **Cascades** into PulseMCP auto-ingest. Automate via GitHub Actions (`id-token:write`) to re-publish on each git tag. |
| 2 | **Glama** | glama.ai/mcp/servers | Auto-indexes from GitHub; then **claim** with GitHub. Needs a building **Docker image + a release** to pass checks. | **Hard dependency** for #6 — do early. |
| 3 | **Smithery** | smithery.ai | Push a `smithery.yaml` at repo root; for local set `target: "local"`. Can **host** the stdio server and expose Streamable HTTP/SSE. | Gets you a remote endpoint without your own infra. "Claim your server" via GitHub. |
| 4 | **mcp.so** | mcp.so | Submit button (GitHub login) or their GitHub issues. | Largest aggregator. |
| 5 | **mcp.directory** | mcp.directory | Auto-pulls metadata from GitHub within 24h; claim for verified badge. | Low effort. |
| 6 | **awesome-mcp-servers** (punkpeye, 88k★) | github.com/punkpeye/awesome-mcp-servers | Fork → branch → add a README line: `[owner/repo](url)` + Glama **score badge** + a legend emoji (📇 TS, scope 🏠 local) + ` - <description>`. **Alphabetical** within category. Category: *Art & Culture* (precedent: `cantian-ai/bazi-mcp`) or propose *Astrology & Divination*. | **Glama listing + claim required first**, else PR closed in 7 days. (Bot PRs: append `🤖🤖🤖` to the title for fast-track.) |
| 7 | **PulseMCP** | pulsemcp.com/submit | Auto-ingests from #1 weekly; manual submit still available. | Runs the "Weekly Pulse" newsletter — pitch a feature (earned media). |
| 8 | **Cline MCP Marketplace** | github.com/cline/mcp-marketplace | Open a GitHub issue with repo URL + a **400×400 PNG logo**; ~2-day review. | Reaches Cline's dev base. |
| 9 | **Anthropic Connectors Directory** | clau.de/mcp-directory-submission (Remote/Apps); clau.de/desktop-extention-submission (MCPB) | Strict: OAuth 2.0 (Open HD already has it), HTTPS + Origin validation, every tool needs a `title` + `readOnlyHint`/`destructiveHint` annotation, public docs (blog counts), **privacy policy in README + manifest**, a test account, logo/favicon, accept Directory Terms. | Prestige listing (native in Claude.ai/Desktop/Mobile/Code). Longest queue — start early. |

### README / AEO hardening (Greg Isenberg's 3-step)

1. Be in every directory (above).
2. **Answer-engine-optimize the README** — clear, structured, citation-ready prose; agents read
   it to decide whether to call your tools (`compute_chart`, `compare_charts`, `get_transits`,
   `analyze_team`, `list_people`, `save_person`, `get_descriptions`, `delete_person`).
3. **Programmatic SEO** — a docs page per tool targeting "[tool name] for AI agents."

### Novelty-PR framing

The spiritual + AI intersection is an under-served content niche and algorithmically/narratively
interesting. Demo-able clip: *"I asked Claude how my partner and I get along and it pulled both
our real charts."* That's the screenshot/clip bait that worked for The Pattern (Channing Tatum)
and Co-Star. Lean on **"the open-source Human Design MCP — your AI can read your saved people's
charts by name."**

---

## 4. Community entry

The HD community's center of gravity is **Facebook Groups** (tens of thousands per group),
then **Reddit** (r/humandesign ~42k, fast-growing), then **TikTok** (~14.1M posts) /
**Instagram**, a mature **paid-podcast** ecosystem, small **Discords**, and **Circle/Mighty**
paid communities. Practitioners are the **highest-leverage** node (each sends dozens-to-hundreds
of clients to a tool — currently all paid ones).

> **Universal rule:** be useful first. The free + open-source + no-account combination is the
> organically shareable hook — let *real users* recommend it. Always disclose you're the maker.
> Surface the tool only when it genuinely answers a stated question.

### Practitioners (do first — highest leverage)

- **Who:** the *independent / modern / coaching* segment — Quantum HD specialists, Instagram
  readers, small course-sellers. **Avoid leading with** official IHDS/Jovian-aligned analysts
  (wary of "unlicensed" tools / trademark purity).
- **Entry:** recruit 10–30 to send clients to Open HD because it's *free* and unlocks the
  Variable/PHS/connection/transit depth clients otherwise pay $99+ for — making the practitioner
  look generous. Demo the AI/MCP connector as a "wow." Offer the **free embeddable widget**
  (§6, Loop 3) to peel them off BodyGraphChart's $41.66/mo paid embed.
- **Don't:** attack practitioners or live readings. Don't pitch official-school analysts cold.

### Facebook Groups

- **Where:** the independent, beginner-friendly, *non-Jovian* groups — "Human Design for
  Beginners," "Human Design Community (HD)," "Human Design System," "The Human Design Community,"
  "Human Design Tribe."
- **Entry:** join 5–10 of the largest; become a known helpful member; answer the relentless
  "which calculator / how do I get my chart" questions. **Highest-leverage move:** befriend
  admins (often practitioners) to get Open HD into a **pinned/featured-resources** post.
- **Don't:** overt promo (most groups ban it). Don't enter Jovian-official-aligned groups that
  police "imitators."

### Reddit

- **Where:** r/humandesign (core) + adjacent r/astrology, r/Gene_Keys (sister system, high
  crossover), r/spirituality, r/MBTI/r/typology. Plus **r/mcp + r/ClaudeAI** for the AI tail.
- **Rules:** the **90/10** rule (≥90% genuine participation), read each sidebar (many ban promo
  or restrict to a weekly thread), always disclose maker status.
- **Entry:** be the organic answer to the recurring *"why is everything paywalled"* threads. An
  honest AMA-style post — *"I built a free open-source HD app because I was tired of paywalls —
  the engine's on npm"* — fits Reddit culture as gift-to-community.
- **Don't:** **never astroturf with sockpuppets** — HD Reddit is small and tight; getting caught
  is reputationally fatal given the authenticity ethos.

### TikTok / Instagram

- **The gap:** top creators (Jenna Zoe ~322k, DayLuna, Emma Dunwoody) funnel to *their own* paid
  app or to BodyGraphChart (affiliate). There's **no neutral, free, beautiful tool** mid creators
  can link.
- **Entry:** target the **long tail of micro-creators (1k–50k)** who lack their own app. Give
  them a genuinely better free tool to link in bio — "the free one that doesn't make you pay $99
  for your Variable." The **AI-connector** is the share-earning talking point (novel = good for
  the algorithm). The downloadable 9:16 chart card (§6) makes organic mentions frictionless. Make
  your own explainer content at the spiritual+AI intersection.

### Podcasts

- **Signal:** the two biggest shows (DayLuna 2M+ downloads, Emma Dunwoody) *both* run
  BodyGraphChart as paid sponsor — the whole ecosystem points listeners at paid tools.
- **$0 entry:** be a **guest**, not an advertiser. The founder story —
  *open-source, gave away the depth everyone paywalls, built the first open-source HD AI
  connector* — is a fresh segment these hosts need. **Pitch small/mid shows first** (the big two
  are locked to their sponsor): No BS Human Design, Magnetic by Design, Astrology & Human Design,
  Nicole Laino's entrepreneur show. Each booking also yields a show-notes backlink.

### Discord / Circle / Mighty

- **Discord** ("Mainly Human Design" ~3.3k, "EevolveE" ~2.9k): small/casual enough that a helpful
  free tool is welcome — and the **MCP feature is catnip** for the Claude/Cursor early-adopter
  slice who *are* the MCP early adopters. Seed there + in MCP/AI-tooling directories.
- **Circle / Mighty** (paid creator communities, e.g. Jenna Zoe's Quantum HD): don't enter
  uninvited — **partner with the community owner** so they recommend Open HD as the free utility.

---

## 5. SEO roadmap

The "free human design chart" head term is the prize (the category leaders pull ~90k–185k
visits/mo; BodyGraphChart reports 620k+ charts generated/mo). Open HD will **not** outrank
jovianarchive/mybodygraph for the bare head term quickly. The winnable game is the **long-tail
programmatic taxonomy** + **celebrity charts** — exactly where humdes.com and geneticmatrix
already harvest most of their traffic.

### THE BLOCKER — prerendering (do this first or nothing else ranks)

Open HD is a Vite JS SPA on a Cloudflare Worker. **Client-rendered content is not reliably
indexed.** Every programmatic + celebrity page **must** be served as fully-formed static HTML in
the initial response.

- **Approach:** static pre-render (SSG) all content routes at build time — one static HTML file
  per gate/channel/profile/type/cross/celebrity (deterministic, derivable from `natalengine`,
  rarely change). The **Worker is an asset**: route `/gate/*`, `/channel/*`, `/profile/*`,
  `/cross/*`, `/celebrity/*` to cached static HTML (edge-cached, served to *all* visitors not
  just bots — Google now prefers identical HTML over UA-sniffing) while keeping the interactive
  SPA for the chart tool. Vike pre-rendering or a custom Vite SSG step fits a vanilla-JS app.
- **Each page needs:** server-rendered H1/title/meta/canonical, interpretation text in initial
  HTML, an **SSR'd bodygraph SVG** (Open HD already renders SVG — render it server-side so the
  visual is in the HTML), JSON-LD (Article for guides; **Person + birth data** for celebrities;
  BreadcrumbList; FAQPage where apt), an XML sitemap of all programmatic URLs, **path-based
  routes (no hash routing)**. Transits regenerate daily (ISR-style).

### Content structure & priority

**Priority 1 — Type & profile pages (highest demand, builds the hub):**
- 4 **types** (`/type/manifesting-generator` — MG is the single biggest type term, ~70% of
  population is Gen/MG), 12 **profiles** (`/profile/3-5`), and the under-served **4×12
  type+profile matrix** (`/type/generator/profile/2-4`). Low competition on combos.

**Priority 2 — Gates & channels (proven programmatic engine):**
- 64 **gates** (`/gate/34`), 36 **channels** (`/channel/34-20`), 9 **centers** (`/center/sacral`),
  4 **authorities**. Copy the humdes.com template: breadcrumb → H1 ("Gate 34 — Power of the
  Great") → 6 lines → planetary associations → channels it joins. **Dense internal linking is the
  engine** — a persistent "all 64 gates / all 36 channels" index hub + contextual cross-links.
  **Quality bar:** each page needs 400–800+ words of *genuinely authored* interpretation (not just
  data fields) or Google treats it as a thin doorway page.

**Priority 3 — Celebrity charts (highest-leverage traffic engine, currently under-defended):**
- URL `/celebrity/[slug]` (mirror totalhumandesign's 56k-page `/design/[slug]` pattern; paginated
  index + filters by Type/Profile/Authority/Cross/Profession — each filter is a long-tail landing
  surface). Queries like "taylor swift human design" are high-volume and currently won by *small
  one-off coaching blogs* Open HD can outrank at scale with a consistent template:
  **rendered bodygraph + verified birth data (cite Astro-Databank / Rodden rating — the trust
  signal that separates rankers from spam) + Type/Profile/Authority/Cross summary + Person schema
  + a "compare your chart" CTA** (drives connection-chart usage). Start with a few hundred
  high-search names (musicians, actors, athletes, founders, politicians); expand programmatically.

**Priority 4 — Differentiator depth pages (own what competitors paywall):**
- These map 1:1 to Open HD's existing four app views, so each view gets a matching landing page:
  - **Variable / PHS** (the 4 arrows; "human design variables explained," "left/right arrow") —
    MyBodyGraph paywalls this at $99; rising search, low competition.
  - **Connection / compatibility** ("human design compatibility," "connection chart free,"
    electromagnetic/dominance/compromise/companionship).
  - **Transits** ("human design transit today," "transits 2026," "what gates are active today") —
    recurring/seasonal demand; programmatic **daily** transit page (regenerate daily).
  - **Penta / team** ("human design penta," "business team chart") — low competition, B2B-leaning.

**Calculator landing page:** target modifier long-tails where intent matches the free depth —
"free human design chart no sign up," "human design chart with variables," "human design
connection chart free" — weaving *no-account / local-first / full-depth* into title tags + H1s.

### Links & answer-engine optimization

- **Podcast guesting** → show-notes backlinks (most natural source for a solo founder).
- **The open-source/MCP angle is the unique link magnet** no competitor can earn (GitHub, HN, PH,
  npm ecosystem, dev newsletters, awesome-mcp lists).
- **Free-tool citations** in "best free HD chart" roundups (HD&Me already maintains one).
- **AEO:** structure content for LLM citation (definitional H2s, concise factual answers, JSON-LD,
  tables of all 64 gates / 12 profiles) so Open HD becomes the source ChatGPT/Claude/AI Overviews
  cite for HD facts — compounds with the MCP story.
- **Avoid** paid guest-post link farms (off-ethos, low quality here).

---

## 6. Product loops to build (ranked by spread-per-effort)

Open HD has the two hardest assets (a free depth-rich engine + a shipped AI connector with a
saved-people loop) but lacks the **spread surface**: sharing today is **URL-only**
(`src/lib/share.js` encodes birth data in query params; a "Copy chart link" button in
`src/views/chart.js`), `index.html` has **no OG/Twitter meta**, and `worker/index.js` serves the
SPA via `env.ASSETS.fetch` with **no per-chart preview route** — a clean insertion point sits
right before that fallback. Every comparable that went viral won on **shareable, screenshot-sized
result artifacts + a compare-with-friends dyad loop** (16personalities ~half of South Korea;
Co-Star 20M+ / a quarter of US women 18–25; The Pattern 3.5M; Spotify Wrapped). Build that.

### Loop 1 — Dynamic OG images + downloadable chart card *(FIRST: highest ROI, lowest effort)*

Retrofits virality onto **every share URL that already exists** — no new user behavior required.
- **(A) Per-chart OG image:** add a `/og?d=…&t=…` handler in `worker/index.js` *before* the
  `env.ASSETS` fallback, rendering a 1200×630 PNG (mini-bodygraph + Type/Strategy/Authority/Profile
  + name); inject `og:image`/`og:title`/`twitter:card=summary_large_image` into chart-URL HTML.
  Browser-less + edge-fast on Workers via **Satori + @resvg/resvg-wasm (`workers-og`)** — no
  Puppeteer. Caveats: flexbox/basic colors/standard fonts only; pre-fetch images as data URLs
  (Satori's fetch doesn't run in the Workers runtime). The bodygraph is already SVG
  (`src/bodygraph.js`) — rasterize it directly. *Effect: every pasted link in
  iMessage/Discord/WhatsApp/Twitter/Reddit becomes a beautiful card — passive, compounding.*
- **(B) Downloadable 9:16 chart card** (the Spotify Wrapped move): a "Save my chart card" button
  rendering a 1080×1920 image sized for IG Stories/TikTok. Frame as **identity-narrative, not
  jargon** ("I'm a 4/6 Emotional Generator" + one plain-language line). Make it gorgeous (warm
  amber > Co-Star's stark black). **Watermark `openhumandesign.com`** so every screenshot is an ad.

### Loop 2 — Connection chart as the viral dyad unit *(SECOND: K-factor>1 potential)*

The dyad is the highest-virality unit in the category — built-in invite loop (you *need* a second
person), double-sided value, screenshot bait. Open HD **already computes** this
(`compareHumanDesign` in `src/views/connection.js`: electromagnetic/companionship/compromise/
dominance) but exposes no shareable artifact.
- Build a **shareable Connection result card** (OG + downloadable) with a warm headline
  ("Electromagnetic — you complete each other's channels"), naming connection types in
  plain-language **tiers** the way The Pattern names Bond tiers (tiered labels are inherently
  screenshot-worthy and identity-affirming).
- Build a **frictionless "add the other person" flow**: a share link that lets person B enter
  *only their own* birth data and instantly see the shared result — pulling B into the product
  *and* giving B a reason to share onward (the K-factor multiplier; double-sided beats forced).
- **Authenticity line:** keep it relational/curious ("here's the dynamic between you two"), never
  a manipulative score that shames.

### Loop 3 — Free embeddable bodygraph widget *(THIRD: practitioner flywheel)*

The most under-exploited structural wedge: **bodygraphchart.com charges $41.66/mo** for embeddable
charts. Ship a **free** one (`<script>`/`<iframe>` snippet, optional accent-color theming) — every
coach who embeds it becomes a distribution node carrying **"Powered by Open Human Design →
openhumandesign.com"** attribution (backlinks → SEO compounding + warm referral traffic from
exactly the buyer persona). Near-zero marginal cost (MIT engine, self-contained SVG bodygraph).
Positioning: **"the free chart your competitors charge $40/mo to embed."** Pair with a "free chart
calculator for your site" landing page.

### Loop 4 — Productize the AI connector as content *(FOURTH: loop is shipped, mostly packaging)*

The remote MCP + saved-people loop is **already live** in `worker/mcp.js`. Growth = turn novelty
into content + reduce friction: (1) demo clips ("I asked Claude how my partner and I get along and
it pulled both our charts"); (2) make **"Connect your AI"** a guided one-click step with
copy-pasteable prompts for non-technical spiritual users — once they save family/friends, the AI
gets stickier (retention) *and* they narrate it socially (acquisition); (3) be the open-source/MCP
reference implementation in dev + AI-power-user communities (high-credibility, different audience).

### Loop 5 — Weekly transit email *(FIFTH: the retention substrate that makes 1–4 compound)*

Acquisition loops bring people in; this keeps them. Astrology apps' famously high retention comes
from **daily-utility recurring personalized content**. The on-brand (calmer) version: an **opt-in
weekly** transit email personalized to the saved chart — "This week's transit hits your Gate X /
completes your Channel Y — here's what to watch." It (a) justifies capturing an email + the free
account/sync, (b) recurs the brand into the inbox, (c) links back into the app + carries a share
card. Keep it **opt-in, genuinely useful, no streaks/FOMO**.

---

## 7. What we deliberately won't do

The brand's whole wedge is *give value away, don't extract or trick*. These tactics show up in the
category and are explicitly **off-limits**:

- **Sockpuppets / astroturfing** on Reddit or FB groups. HD Reddit is small and tight; getting
  caught is reputationally fatal. Always disclose maker status.
- **Overt link-dropping** that violates 90/10 / group promo rules. Be useful first; recommend only
  when it answers a real question.
- **Shame / FOMO / "compatibility score" dark patterns.** Co-Star's intentionally cruel
  notifications ("Stop defending yourself to people who don't matter") are *off-brand*. Connection
  framing stays relational and curious, never a score that shames.
- **Manipulative streaks, fake scarcity, forced-invite walls.** Double-sided, opt-in value
  converts *better* than forced mechanics *and* is more authentic.
- **Paid guest-post link farms / low-quality backlink buying.** Off-ethos and low quality in this
  niche.
- **Overclaiming "the FIRST AI-integrated HD app."** gethumandesign.com exists. Use the defensible
  "open-source, free-depth" framing; hedge firsts ("likely").
- **Attacking practitioners or live readings.** The target is *apps that paywall self-knowledge*,
  not the people doing $300 readings.
- **Out-officialing Jovian Archive** or implying authority/lineage. "Open" means access +
  transparency, never "the official source" — that invites trademark friction.
- **Harvesting / monetizing birth data.** It contradicts the privacy pillar that *is* the pitch.
  Local-first, no-account-for-charts stays non-negotiable.

---

# Executive Summary

Open Human Design competes in a large, monetized, spiritual-leaning market (women 25–45, heavy on
Instagram/TikTok/podcasts) where **every incumbent paywalls the deep layers users actually want** —
MyBodyGraph charges $99 just to see your Variable, $349–$1,199/yr for the rest. That paywall is Open
HD's validated wedge: it gives away *all* the depth (Variable/PHS, connection, transits, penta) for
free, needs no account, keeps birth data on-device, ships an open-source engine (`natalengine` on
npm), and offers a category-first MCP connector so a user's own AI can pull saved people's charts by
name. The unowned positioning is **"open + free + private + yours"** — populist and anti-gatekeeping
— and the homepage should lead with the **anti-paywall** message ("your chart isn't a free sample"),
make **privacy** the second pillar ("don't trust us — read the code"), and treat the **AI connector**
as the standout "one more thing," not the hero.

The 30-day launch front-loads the **MCP directories** (Official Registry → Glama → Smithery/mcp.so/
mcp.directory/Cline → the awesome-mcp-servers PR → Anthropic Connectors Directory) because they
compound while you sleep and are the least-crowded, most-defensible surface; then spends one
coordinated Tue–Thu burst on **Show HN** (engineering-framed: arcminute ephemeris, local-first, MIT,
the MCP first — never claiming HD is "true") and a **Product Hunt** self-launch, with the founder
answering *every* comment within two hours — the single most repeatable success behavior across
comparable launches. Two honesty caveats: soften "first AI-integrated HD app" (gethumandesign.com is
live; the moat is *open-source + free-depth*, not "first"), and the spikes are transient — the
durable gains are directory listings and backlinks.

Real users live in **audience-native** channels, entered authenticity-first: **practitioners** (the
highest-leverage node — recruit independent/coaching readers with a free tool + a free embeddable
widget that undercuts BodyGraphChart's $41.66/mo), **Facebook beginner groups** (helpful answers →
admin-pinned resources), **Reddit r/humandesign** (be the answer to "why is everything paywalled"),
**micro-creators** who lack their own app, and **podcast guesting** (the open-source/AI story is a
fresh segment). SEO is structurally winnable on the long tail — programmatic gate/channel/profile/
type/cross pages plus an under-defended **celebrity-chart** engine — but is gated by one technical
must: **pre-render content routes to static HTML** (the Worker can serve cached SSG pages while the
SPA stays interactive). Finally, the highest-leverage *product* work is the **spread surface** that
doesn't yet exist: dynamic **OG images + a downloadable 9:16 chart card** (retrofits virality onto
every existing share URL), then the **Connection dyad** as the K>1 viral unit, then the **free
practitioner widget**, the **AI-connector-as-content**, and an **opt-in weekly transit email** for
retention. Every move gives value away rather than gating it — so growth and brand reinforce each
other.
