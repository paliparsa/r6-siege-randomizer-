# Phase 7 — Consolidated Siege-inspired UI

## Why
The previous two visual phases appended competing global overrides, so the default skin could still feel like a generic neon dashboard instead of a coherent game menu.

## What changed
- Consolidated the v1.18/v1.19 CSS into one default-skin layer instead of stacking more overrides.
- Reduced the olive-tinted synthetic background and the opacity of geometric overlay details.
- Used restrained charcoal surfaces, off-white type, low-contrast borders, muted tactical-yellow selection, and minimal glow.
- Normalized dialog, panel, button, hover, selected, and keyboard-focus states.
- Scoped the pass to `body[data-skin="default"]` so the existing selectable skins remain intact.

## Scope and compatibility
Visual CSS only. No DOM structure, game logic, data, storage keys, operator or weapon records, randomizer behavior, or modal flows were intentionally changed. Version 1.20.0; Service Worker cache `r6-cache-v34`.

## Validation
Source-contract tests check the consolidated layer, version/cache alignment, and preserved feature markers. Actual browser screenshots and responsive/theme/offline testing still need to be run; this phase is not claimed to be pixel-perfect against Ubisoft's live menu.
