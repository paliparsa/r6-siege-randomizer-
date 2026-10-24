# Changelog

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
