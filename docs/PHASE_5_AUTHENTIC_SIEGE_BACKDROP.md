# Phase 5 — Authentic Siege Menu Backdrop

## Goal
Replace the generic neon-grid backdrop with a restrained, industrial Siege-inspired atmosphere: smoked charcoal, muted olive/concrete light, tactical yellow accents, layered angular geometry, fine surface texture, and a deliberate vignette.

## Scope
- Global page background and ambient overlay.
- Header and mobile navigation surfaces.
- Existing tactical panels and operator portrait stages.
- Theme/focus accent alignment and responsive/reduced-motion fallbacks.

## Compatibility guardrails
- CSS and app metadata only in `index.html`; no operator data, randomizer functions, rewards, inventory, XP, maps, exports, storage keys, or navigation handlers are changed.
- Existing selectable skins remain available; their custom theme variables continue to override the base palette.
- Service Worker cache is bumped to `r6-cache-v32`.

## Validation status
Source-level change only. Compare against an actual in-game Siege menu screenshot and test desktop, mobile, theme switching, and offline launch before calling the visual match complete.
