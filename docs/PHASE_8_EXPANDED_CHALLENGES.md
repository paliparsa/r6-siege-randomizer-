# Phase 8 — Expanded Challenge Databases & Duel Cleanup

## Changes
- Expanded the cursed equipment pool with additional scope, muzzle, grip, and tactical challenge variants.
- Expanded Duo Synergy with operator-aware pairings from the current operator dataset; existing combinations are retained and duplicate/reversed pairs are skipped.
- Added multiple execution-plan templates for breach, intel, and control pairings.
- Added a dedicated Duel Arena scenario database for gunskill, gadget, and objective drills. Recently used scenarios are deprioritized until the pool cycles.
- Added an opt-in Duel Arena special-restriction toggle. Enabled duels receive randomized attachment settings and one challenge rule from the same pools used by Equipment with Restrictions.
- Removed every UI button that invokes poster creation, including the global floating action.
- Removed Duel Arena win-condition copy; the UI displays attacker and defender objectives independently.

## Validation
Source-contract tests are added in `tests/phase-eight-expanded-databases.test.cjs`. These checks do not replace browser testing. Verify all randomizer modes, optional restrictions, Duo filters, and mobile layout in a real browser.
