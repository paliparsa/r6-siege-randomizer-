# Phase 0 — Baseline Audit & Feature Preservation

**Repository:** `paliparsa/r6-siege-randomizer-`  
**Audit date:** 2026-10-25  
**Baseline branch:** `main`  
**Observed baseline:** app version `1.13.0`; Service Worker cache `r6-cache-v27`  
**Scope of this document:** source-level inventory and a verification plan. This is not a claim that browser/device tests have passed.

## Safety rules for the redesign

- Treat this audit as the preservation contract for later visual work.
- Do not remove, rename, or silently change existing features, controls, events, persistence keys, data schemas, routes/tabs, or install/offline behavior.
- Keep UI redesign and behavior changes separate. Any behavior change needs an explicit reason, targeted tests, and a changelog entry.
- Do not reset or overwrite user data to make a UI change work. If a storage migration is truly required, make it additive, versioned, and backward-compatible.
- Before any implementation phase, compare the changed files against this inventory and rerun the relevant baseline checks.
- No production application source was changed in this Phase 0 documentation commit.

## 1. Confirmed source structure and app shell

| Area | Baseline observation | Preservation requirement |
|---|---|---|
| Main UI | `index.html` is the primary application document and contains extensive markup, styles, and JavaScript. | Avoid broad rewrites or replacing the page wholesale. |
| App version | HTML metadata reports `1.13.0`. | Bump deliberately for a release; keep visible/app metadata consistent. |
| Operator reference data | `data/r6-operator-data.js`, exposed as `window.R6_OPERATOR_DATA`. Changelog describes 78 operator entries. | Preserve IDs, roster coverage, side assignments, loadouts, portraits, ability/gadget data and fallback behavior. |
| Weapon reference data | `data/r6-weapon-data.js`, exposed as `window.R6_WEAPON_DATA`. Changelog describes 118 reference entries. | Preserve lookup/normalization behavior and missing-stat handling; data is a community-maintained snapshot, not a live feed. |
| PWA manifest | `manifest.json` is referenced by the main page and included in the app shell. | Preserve install metadata and manifest linkage. |
| Service worker | `sw.js`; current cache is `r6-cache-v27`. App shell includes `./`, `./index.html`, `./manifest.json`, and both reference-data files. | Keep cache name synchronized with release changes; preserve offline navigation, runtime caching and old-cache cleanup. |
| Fonts/icons | Google Fonts (Chakra Petch, Vazirmatn) and Font Awesome CDN are referenced. | Do not accidentally remove required typography/icon dependencies during CSS cleanup. |

## 2. Feature inventory (confirmed from current source/changelog)

The following capabilities are part of the preservation baseline. This is a functional inventory, not a claim that every edge case has already passed a browser test.

- [ ] Main randomizer / HQ operator card, attacker/defender faction context, manual operator selection and confirmation.
- [ ] Operator roster selector: side filters, search, roster count, portraits/fallbacks, profile details, ability description/art, primary/secondary weapon selection, available weapon stats, secondary gadgets, random selection, confirm and close/Escape behavior.
- [ ] Five-operator Squad generation and squad cards/briefing.
- [ ] Duo Synergy / operator-pair combinations, styles/modes and contextual poster output.
- [ ] Duel Arena / 1v1: attacker-vs-defender pairing, duel modes, gadget/weapon/scenario information, win conditions, challenge selection, share/poster flow.
- [ ] Tactical challenges / custom rules pool (changelog reports 110 challenges in v1.9.0).
- [ ] Cursed Loadout / randomized challenge equipment and rule fields.
- [ ] Map/site display and map/site state.
- [ ] Player profile/progression: XP, rank/title, pack count, unlockable profile titles and skin themes. Initialization explicitly avoids granting XP or auto-rolling merely on load/tab changes.
- [ ] Alpha Pack simulator: rarity-weighted simulated rewards, open/reveal flow, pack consumption safeguards, opening history, local collection, drop statistics, copy reward name and open-next flow. UI must continue to make clear these are simulated—not official Ubisoft rewards.
- [ ] Operator reference/loadout data and weapon reference data, including graceful handling of missing stats/assets.
- [ ] Poster/dossier generation, download and native-share fallback; global poster action and contextual actions for relevant views.
- [ ] Onboarding slides and persisted onboarding completion state.
- [ ] Web-app installation prompt/instructions, install dismissal/completion handling, standalone-mode behavior.
- [ ] Responsive mobile layouts, safe-area handling, modals, reduced-motion accommodations and keyboard support.
- [ ] Dynamic faction/skin styling and app navigation.
- [ ] Toasts/feedback, copy/share/download actions and other existing controls discovered during the remaining exhaustive DOM/event pass.

## 3. Persistence inventory — source-level key extraction

A regex/source pass of the current `index.html` found the following persistent keys. Data schemas below reflect the current read/write call sites, not a guarantee that every historical stored value has been sampled.

| Key | Current representation / observed use | Preservation requirement |
|---|---|---|
| `r6_profile_v2` | JSON object normalized against `DEFAULT_PROFILE`: `callsign`, `title`, `xp`, `rolls`, `wins`, `packs`, `favs` (operator ID array), `skin`. | Preserve fields, normalization, default values and old profile contents. |
| `r6_banned_ops_v1` | JSON array of operator IDs; invalid/unknown IDs are filtered on load. | Preserve valid ban selections and current filtering behavior. |
| `r6_xp_claims_v1` | JSON object used by `claimDailyXp`; the code reads/writes a date-keyed claim record. | Preserve anti-repeat/claim semantics; inspect the complete function before changing the schema. |
| `r6_alpha_history_v1` | JSON array of reward/history objects; write path retains up to 100 records. | Preserve history and ordering; no reset during visual changes. |
| `r6_alpha_collection_v1` | JSON array of collection/reward objects; write path retains up to 100 records. | Preserve collected items and compatibility with existing reward objects. |
| `r6_intro_seen_v7` | Direct string flag: `'1'` means onboarding was seen. | Keep the exact key/value convention and guarded storage access. |

Storage implementation uses guarded `localStorage` access: generic JSON helpers catch read/write failures; onboarding has its own try/catch. The source pass found no `sessionStorage`, IndexedDB or cookie usage in `index.html`. No `clear()` or `removeItem()` calls were found in the current page.

- [ ] Still sample existing browser profiles and verify the exact shape of persisted XP-claim entries and Alpha Pack objects.
- [ ] Test malformed JSON, storage denial/quota failures, old-version profile objects and reload persistence in a browser.
- [ ] Do not introduce a migration unless a real schema change is approved; if required, make it additive, versioned and backward-compatible.

## 4. Navigation, controls, events and modals — source inventory

- Main navigation has three hubs: `hq`, `ops`, and `tools`, with matching desktop and mobile navigation controls.
- Main randomizer modes: `standard`, `cursed`, `squad`; faction filters: `all`, `atk`, `def`.
- Operations modes: `strats`, `duo`, `duel`; Duo filters include side and style; Duel includes selectable mode and tournament controls.
- Tools include map/site selection and related roll actions.
- Header controls include profile, Alpha Packs, operator bans, shake-to-roll, audio, help/onboarding, and install UI.
- The page has 205 distinct HTML `id` attributes in the inspected source snapshot, with no duplicate IDs found by a simple source scan.
- Seven modal/dialog surfaces were identified: `alphaModal`, `profileModal`, `operatorSelectModal`, `banModal`, `shareModal`, `introModal`, plus the separately rendered `webAppInstallCard` install surface. The install card is not a modal.
- The source includes inline handlers and global functions; a source inventory alone does not prove each event path works at runtime.

Remaining behavior-level checks:
- [ ] Verify every visible control and all open/close, backdrop, Escape, focus and scroll-lock paths in a browser.
- [ ] Check dynamically generated buttons (especially duel tournament and ban list) as well as static inline handlers.
- [ ] Confirm tab changes do not trigger an unintended reroll, award XP, consume packs or overwrite user selections.
- [ ] Check poster/share/download entry points preserve the active HQ/Duo/Duel context.
- [ ] Run automated duplicate-ID and JavaScript syntax checks in CI or a local test environment.

## 4. Navigation, controls, events and modals — remaining exhaustive pass

- [ ] Extract every navigation/tab destination and its active/hidden state rules.
- [ ] Build a DOM inventory of buttons, links, inputs, selects, toggles and their event handlers.
- [ ] Inventory every modal/dialog: open trigger, close trigger, Escape behavior, backdrop behavior, focus handling and scroll locking.
- [ ] Identify inline handlers, global functions, document/window listeners and initialization order.
- [ ] Check duplicate IDs, missing element references, stale handlers and controls that appear interactive but do not act.
- [ ] Confirm all poster/share/download entry points preserve their current context.
- [ ] Verify navigation does not trigger an unintended reroll, award XP, consume packs or overwrite user selections.

## 5. Baseline test plan

Run against the unmodified `main` baseline first, record results, then rerun after each phase. Mark tests as **PASS**, **FAIL**, or **NOT RUN**; do not report source inspection as browser validation.

| ID | Test | Status at audit creation |
|---|---|---|
| B-01 | App loads with no uncaught JavaScript errors | NOT RUN — real browser required |
| B-02 | All navigation destinations open and return correctly | NOT RUN |
| B-03 | Randomizer respects attacker/defender filters and banned operators | NOT RUN |
| B-04 | Manual operator search, selection, profile rendering and confirm work | NOT RUN |
| B-05 | Squad produces five valid operators and renders cards | NOT RUN |
| B-06 | Duo Synergy generates valid pairs and contextual poster uses current pair | NOT RUN |
| B-07 | Duel Arena always pairs one attacker against one defender | NOT RUN |
| B-08 | Duel explanations, win conditions and challenge selection match the selected mode | NOT RUN |
| B-09 | Cursed Loadout fields generate and display consistently | NOT RUN |
| B-10 | Map/site display and selection work | NOT RUN |
| B-11 | XP/rank/profile changes persist and loading/tabs do not award XP or reroll | NOT RUN |
| B-12 | Alpha Pack open/next flow does not consume unavailable packs; history/collection/statistics persist | NOT RUN |
| B-13 | Operator/weapon/gadget assets load or fail gracefully; missing stats are not fabricated | NOT RUN |
| B-14 | Poster canvas export, download and native-share fallback work | NOT RUN |
| B-15 | Onboarding completion survives reload using existing key | NOT RUN |
| B-16 | PWA install UI and standalone/install-completed states behave correctly | NOT RUN |
| B-17 | Offline app shell opens; current data files are available from cache | NOT RUN |
| B-18 | Mobile viewport, scrolling, safe areas and tall modals remain usable | NOT RUN |
| B-19 | Keyboard Escape/focus behavior and reduced-motion preferences work | NOT RUN |
| B-20 | Existing storage survives reload and no unrelated key is deleted/reset | NOT RUN |

## 6. Current known risks / attention points

1. The app is concentrated in a large `index.html`, increasing the risk of accidental cross-feature regressions from broad edits.
2. The Service Worker cache is versioned separately in `sw.js`; every deploy that changes cached assets must review cache invalidation deliberately.
3. Operator and weapon data depend on external image/data sources; network failures and unavailable assets need graceful fallbacks.
4. Changelog notes from recent releases explicitly say real-browser/device visual testing remained outstanding. That validation must not be assumed complete.
5. This audit has not yet verified every storage key, every DOM control/event, or every modal. Those are explicit outstanding tasks, not silently considered complete.

## 7. Phase 0 completion gate

Do not start a broad visual redesign until all of the following are true:

- [ ] Full source/file tree inventory completed, including assets, data files, scripts, manifest and service worker.
- [ ] Every page/view/tab, control, modal, event and navigation action documented.
- [ ] All localStorage/sessionStorage keys and data schemas recorded.
- [ ] Baseline tests executed and actual results recorded on desktop and a mobile viewport.
- [ ] Known pre-existing defects separated from regressions.
- [ ] Preservation checklist approved; next phases can be visual-only unless a separately documented behavior fix is approved.

## Source references reviewed

- `index.html` — current app shell, styles, initialization, operator selector and related UI/handlers.
- `sw.js` — cache `r6-cache-v27`, app-shell assets, runtime caching and offline fallback.
- `data/r6-operator-data.js` — operator/loadout reference data.
- `data/r6-weapon-data.js` — weapon reference data.
- `CHANGELOG.md` — recent feature history and prior validation notes.
