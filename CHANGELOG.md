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
