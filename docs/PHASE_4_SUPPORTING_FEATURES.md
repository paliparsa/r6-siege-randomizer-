# Phase 4 — Supporting feature polish

## Scope
Visual-only polish for Alpha Pack, profile progression, theme selection, map/site controls, and poster preview. Changes are scoped to existing IDs/classes and responsive/reduced-motion rules.

## Preservation contract
- Alpha Pack reward selection, empty-stock/reward guards, stock decrement, reveal sequence, profile save, history and collection rendering are unchanged.
- XP/Level formulas, daily XP claims and existing profile/banned-operator/Alpha Pack storage keys are unchanged.
- Existing theme names and theme persistence remain unchanged.
- Map database, selected map/site handlers and tactical tip rendering remain unchanged.
- Poster export functions, canvas, preview modal and export button remain unchanged.
- PWA registration, app-shell resources, cache-first offline fallback, and install UI remain unchanged. Only the cache version is bumped to refresh presentation assets.

## Tests
Run with Node.js 18+:

```sh
node --test tests/phase-four-supporting-features.test.cjs
```

These are source-contract tests. Complete browser interaction, mobile viewport, persisted-profile upgrade, and offline smoke tests before treating the release as fully QA-approved.

## Rollback
Revert the Phase 4 pull request/merge commit. No storage migration or key rename is introduced.
