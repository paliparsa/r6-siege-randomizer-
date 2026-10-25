# Phase 1 — Siege Design System Foundation

**Branch:** `design/phase-one-siege-system`  
**Target baseline:** `1.13.0`  
**New app version:** `1.14.0`  
**Scope:** shared CSS tokens, opt-in component primitives, accessible focus state, reduced-motion accommodation.

## Design direction

The app already uses a Tactical Noir palette. Phase 1 formalizes that direction instead of replacing it with a generic UI kit:

- **Canvas:** Obsidian `#0B0D0F`
- **Panels:** Graphite `#191D21` and deeper industrial surfaces
- **Text:** Bone `#E8E9E5`, with muted/subtle tiers
- **Signal accent:** Tactical yellow `#D6F04A`
- **Alert:** Restrained red `#D94A45`
- **Geometry:** compact industrial corners, thin borders, limited glow and restrained elevation
- **Typography:** existing Chakra Petch / Vazirmatn / monospace usage remains intact

Existing faction and cosmetic skin variables are preserved. The shared accent aliases reference the existing theme tokens rather than replacing skin behavior.

## Token groups

- Semantic surfaces: `--siege-bg-canvas`, `--siege-bg-panel`, `--siege-bg-elevated`, `--siege-bg-selected`
- Text and status: `--siege-text-primary`, `--siege-text-muted`, `--siege-text-subtle`, `--siege-accent`, `--siege-danger`
- Borders and focus: `--siege-border`, `--siege-border-strong`, `--siege-border-focus`
- Geometry and spacing: `--siege-radius-*`, `--siege-space-*`
- Elevation and motion: `--siege-shadow-*`, `--siege-motion-*`

## Opt-in primitives

| Class | Purpose |
|---|---|
| `.ds-panel` | Industrial panel surface with a thin border |
| `.ds-panel--flat` | Panel without elevation |
| `.ds-panel--selected` | Clearly selected panel state |
| `.ds-kicker` | Compact tactical section label |
| `.ds-muted` | Secondary informational text |
| `.ds-divider` | Shared hairline separator |
| `.ds-control` | Reusable base for new/reworked controls |
| `.ds-control--primary` | High-contrast primary action |
| `.ds-control--danger` | Destructive/alert action treatment |

The primitives are deliberately opt-in. This phase does not apply blanket styling to all legacy buttons, cards, or modals; that could unintentionally change specialized interactions and is deferred to controlled per-component adoption.

## Interaction states

- **Default:** graphite surface and neutral border.
- **Hover:** border becomes more legible without a large glow.
- **Selected:** tactical signal border plus subtle signal-tinted surface; supported via `aria-pressed`, `aria-selected`, or `.is-selected`.
- **Disabled:** reduced opacity and non-interactive cursor.
- **Keyboard focus:** visible signal outline with offset.
- **Reduced motion:** animation and transition durations are reduced when `prefers-reduced-motion: reduce` is active.

## Preservation / safety

- No JavaScript behavior, data files, operator records, navigation markup, persistence keys, or feature logic were changed.
- No feature or control was intentionally removed.
- Service Worker cache advanced from `r6-cache-v27` to `r6-cache-v28` so the new stylesheet is not stuck behind an old cached shell.
- Version and changelog were updated to `1.14.0`.

## Phase 1 acceptance status

- [x] Define semantic color, surface, border, spacing, radius, elevation, and motion tokens.
- [x] Provide reusable primitives for future consistent page/component styling.
- [x] Distinguish selected, disabled, primary, and danger states in the shared primitive.
- [x] Add visible keyboard focus treatment.
- [x] Respect reduced-motion preference.
- [x] Keep current feature logic and existing specialized components untouched.
- [ ] Verify in real desktop and mobile browsers, including modal and operator selector flows.
- [ ] Adopt primitives component-by-component in subsequent visual phases; this is intentionally not a global markup rewrite.

## Validation note

This pull request is source-reviewed, not browser-certified. Before merging, run the app on desktop and a narrow mobile viewport, check console errors, keyboard focus, reduced-motion behavior, skin changes, modal layouts, and offline/PWA loading. Any defect found should be fixed in a focused follow-up without removing existing behavior.
