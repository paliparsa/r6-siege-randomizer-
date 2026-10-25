# Phase 2 — Operator HQ redesign

## Scope
- Siege-inspired attacker/defender roster with explicit selected, hover, focus, and disabled states.
- More readable operator hero and loadout information hierarchy.
- Responsive roster density and reduced-motion support.
- Portrait failure fallback: roster initial badge and hero initial badge after the available portrait and operator icon fail.

## Behavior invariants
- Browsing an operator only updates the selector's transient `operatorSelectId` and local weapon preview state.
- The randomizer result changes only through the existing explicit `confirmOperatorSelect()` action; no auto-roll or auto-history behavior was introduced.
- No operator or weapon dataset, local-storage key, page, game mode, or feature was removed.
- Duel Arena's attacker-versus-defender logic is untouched.

## Validation
- Source replacements verified against the expected original code patterns before writing.
- Browser/device tests were not run; acceptance requires manual testing of all operators, search, faction tabs, portrait fallbacks, randomizer isolation, and the existing confirm action.
- Rollback: revert this branch/PR; it is based on `design/phase-one-siege-system` so the phase-one design tokens remain available in the stacked change.
