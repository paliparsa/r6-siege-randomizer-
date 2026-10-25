# Phase 6 — Siege Menu Color System

## Objective
Bring the interface surfaces, controls, tabs, dialogs, borders, and active states closer to the actual Rainbow Six Siege menu language, not just recolor the page background.

## Color roles
- Canvas: deep charcoal graphite (#111315).
- Panels: layered graphite (#191c1e / #232729).
- Main text: soft bone white (#f0f1ed), with muted grey for secondary labels.
- Selection/action: signal yellow (#d6e04b), used sparingly for active/selected/focus states.
- Danger: red remains reserved for destructive or warning states.
- Success colors remain semantic and distinct.

## Compatibility
No application logic or data model was changed. Existing randomizer modes, operator/weapon datasets, Alpha Pack, XP, inventory/history, maps/sites, poster exports, localStorage keys, and theme selection are preserved. Version 1.19.0; Service Worker cache r6-cache-v33.

## Validation
Source-contract tests were added. Compare against the supplied reference in a real browser and verify mobile layouts, modals, theme switching, and PWA/offline behavior before considering the match pixel-accurate.
