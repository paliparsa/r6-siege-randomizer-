# Changelog

## 1.5.0 — 2026-10-24

### Design
- Reworked the visual identity into a Tactical Noir system using Obsidian (#0B0D0F), Graphite (#191D21), Bone (#E8E9E5), Signal (#D6F04A), and Alert (#D94A45).
- Refined the background with a restrained tactical grid and topographic contour texture.
- Unified the default interface accent across headers, navigation, operator cards, operations panels, selection controls, install surfaces, and the floating poster action.
- Added consistent hover, pressed, keyboard-focus, panel-entry, scanline, and modal-backdrop treatments.
- Improved scrollbar styling and added a global reduced-motion accommodation.
- Preserved existing app features, navigation, game-specific faction/duel cues, poster generation, and core behavior.
- Bumped the app version to 1.5.0 and Service Worker cache to r6-cache-v13.

### Validation
- Source-level checks verify version/cache alignment, design tokens, reduced-motion rules, and preservation of existing functional entry points. Browser/device visual regression testing remains to be completed.

# Changelog

## 1.4.2 — 2026-10-24

### Added
- Made the poster generator available from a persistent floating action on every main hub, including Operators, Operations, and Maps/Timer.
- Added context-aware poster rendering for Duo Synergy, Duel Arena, tactical challenges, map/site briefing, and timer status, including operator portraits where relevant.
- Kept the existing detailed solo, cursed-loadout, and five-operator squad posters in the Operators hub.
- Updated poster filenames to use the current view's context and bumped the app version to 1.4.2 / Service Worker cache to `r6-cache-v12`.

### Validation
- Source-level checks cover all hub routes and poster export/download/share suffix handling. Live browser, image CDN, and share-sheet testing remains to be confirmed.


## 1.4.1 — 2026-10-24

### Fixed
- Fixed Duo Synergy crashing when filtering or generating a combination by initializing the search query state before the filter is first evaluated.
- Bumped app version to 1.4.1 and Service Worker cache to `r6-cache-v11` so installed clients refresh the fix.

### Validation
- Source-level checks confirm the Duo search state is declared once and before use, and the roll/filter handlers still reference the expected controls.
- Browser/device runtime testing remains to be confirmed.


## 1.4.0 — 2026-10-24

### Added
- Expanded Duo Synergy from 8 entries to a 120+ curated-pair target across Attack and Defense, using operators in the app roster and gadget-aware tactical guidance.
- Added Duo search across operator names, gadget roles, combo titles, and execution plans, plus live matching-count feedback.
- Added procedural tactical UI sound effects across buttons and interactive controls, with the existing global sound mute respected.
- Improved operator portrait clarity in Duo Synergy and Duel Arena with full-opacity, higher-contrast rendering and subtle contrast lighting.

### Improved
- Kept sound generation procedural in-browser; no copyrighted Rainbow Six audio files are bundled or represented as official game recordings.
- Bumped app version to 1.4.0 and Service Worker cache to `r6-cache-v10`.

### Validation
- Source-level validation is performed before merge; live browser/device audio, portrait CDN availability, and deployment health must still be verified in a real browser.

## 1.3.0 — 2026-10-24

### Added
- Rebuilt Duo Synergy with cinematic operator cards, attack/defense filtering, synergy categories, execution plan, analysis tags, and native-share/copy fallback.
- Added Duel Arena modes for pure 1v1, gadget advantage, objective control, and random scenarios, with operator portraits, speed/armor comparison, transparent verdicts, and sharing.
- Added playable 8/16-operator single-elimination tournament where users advance winners manually and share the champion.
- Added responsive tactical styling and reduced-motion support.

### Improved
- Kept existing daily XP claiming behavior and banned-operator exclusion for duels/tournament entrants.
- Avoided claiming a definitive duel winner from speed/armor alone; analysis explicitly accounts for player skill and scenario.
- Bumped app version to 1.3.0 and Service Worker cache to `r6-cache-v9`.

### Validation
- Source checks verify UI targets, handlers, XP flows, version/cache, and tournament progression logic.
- Browser/device visual testing and live deployment health have not been verified.

# Changelog

## 1.2.0 — 2026-10-24

### Added
- Added mission briefing presets (balanced, aggressive, intel/control, objective defense) that influence squad selection while respecting faction and ban constraints.
- Rebuilt the five-operator lineup as a cinematic deployment with role slots, operator icons, gadgets, primary weapons, speed, and armor.
- Added squad intelligence reporting for estimated role coverage/gaps, average speed/armor, gadget diversity, and a clearly non-official readiness score.
- Added responsive squad cards and reduced-motion support.

### Improved
- Kept the existing squad poster export/share flow accessible from the squad view.
- Clearly labeled inferred role coverage and readiness as estimates rather than official in-game ratings.
- Bumped app version to 1.2.0 and Service Worker cache to `r6-cache-v8`.

### Validation
- Source-level checks cover mission presets, rendering, report metrics, version/cache markers, and reduced-motion behavior.
- Physical-device visual testing and live deployment health have not been verified.

## 1.1.5 — 2026-10-24

### Improved
- Reworked command-header spacing and visual hierarchy to reduce crowding, especially on mobile.
- Added safe-area top padding so the header stays below the iPhone notch/Dynamic Island in standalone web-app mode.
- Updated onboarding to reappear for this release and added a web-app install action on its final slide.
- Added a persistent, dismissible install notification card with native install prompting where supported and browser/Safari instructions as fallback.

### Maintenance
- Bumped app version metadata to 1.1.5.
- Bumped the Service Worker cache to `r6-cache-v7`.

### Validation
- Checked onboarding/install hooks, safe-area styles, and version/cache markers in source.


## 1.1.4 — 2026-10-24

### Added
- Added the missing Nøkk and Blackbeard attacker entries.
- Added Year 11 operators Solid Snake (attacker) and Noor (defender), including gadget, weapon, organization, speed, armor, and icon-slug metadata.
- Updated the operator roster from 74 to 78 entries: 39 attackers and 39 defenders, excluding Recruit as a separate legacy entry.

### Maintenance
- Bumped app version metadata to 1.1.4.
- Bumped the Service Worker cache to `r6-cache-v6` so installed clients refresh the updated roster.

### Validation
- Verified unique operator IDs and roster counts (39 attackers, 39 defenders).
- Solid Snake and Noor use the existing icon fallback if their upstream SVGs are unavailable.


## 1.1.3 — 2026-10-24

### Fixed
- Corrected operator icon URLs to match the actual folder/file structure in the upstream icon repository.
- Corrected Rauora and Denari icon slugs so each uses its own icon instead of Sens or Azami.

### Maintenance
- Bumped app version metadata to 1.1.3.
- Bumped the Service Worker cache to `r6-cache-v5` so installed clients can refresh the app shell.

## 1.1.2 — 2026-10-24

### Improved
- Replaced text-only operator ban tiles with each operator's icon, keeping the name visible as a compact caption.
- Added consistent icon framing, mobile-friendly square tiles, accessible checkbox labels, and a letter fallback if an icon fails to load.

### Maintenance
- Bumped app version metadata to 1.1.2.
- Bumped the Service Worker cache to `r6-cache-v4` so installed clients can receive the updated operator tiles.

## 1.1.1 — 2026-10-24

### Fixed
- Restored natural document scrolling on mobile instead of trapping touch scroll in a fixed-height viewport.
- Removed mobile-only fixed-height constraints from the active hub sections so long content can extend and scroll normally.
- Kept the mobile bottom navigation visible with safe-area-aware sticky positioning.
- Made tall dialogs scrollable on small screens, including devices with short viewports and browser safe areas.

### Maintenance
- Bumped app version metadata to 1.1.1.

## 1.1.0 — 2026-10-24

### Improved
- Simplified Persian navigation, mode names, buttons, profile labels, and reward messages for casual players.
- Clarified operator roles, attack/defense labels, speed/armor indicators, map/site selection, defuser timer states, and app progression terms.
- Replaced ambiguous English challenge tags and timer status labels with clearer Persian wording where practical.
- Added tooltips for less obvious gameplay abbreviations and concepts.
- Added `docs/PLAYER_TERMINOLOGY.md` as the source of truth for consistent player-facing terminology.

### Maintenance
- Added app version metadata (`1.1.0`).
- Bumped the Service Worker cache to `r6-cache-v3` so clients refresh updated UI assets.
- Includes the previously prepared XP claim limits, timestamp-based timer accuracy, safer local storage handling, sharing fallback, and PWA improvements.

### Validation
- Inline JavaScript and Service Worker syntax compilation passed.
- Key UI and dynamic-label markers were checked against the branch.
- Browser/device visual testing has not yet been performed.
