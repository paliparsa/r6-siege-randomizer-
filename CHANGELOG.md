# Changelog

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
