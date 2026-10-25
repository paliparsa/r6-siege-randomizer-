# Phase 9 — Operator Tab, Mobile Layout, Poster Export

## Changes
- Promoted the operator roster/loadout browser into a dedicated hub named “مشاهده همه اپراتورها”.
- Added desktop and mobile navigation entries and kept the existing operator search, attacker/defender filters, weapon selection, ability data, and confirm/random actions.
- Redesigned the roster layout for narrow screens: four-column operator tiles, scrollable roster area, compact profile card, readable weapon choices, and touch-sized controls.
- Tightened mobile navigation, Duel/Duo card wrapping, and poster modal sizing.
- Added compact poster actions to the four major tabs, including a selected-operator poster from the new operator browser.
- Poster generation now marks the canvas ready only after drawing completes; the modal is revealed after rendering rather than during an unfinished export.
- PNG download uses canvas Blob + object URL with a data URL fallback.
- Sharing attempts native file sharing first, then share-link fallback and PNG download/clipboard fallback when native image sharing is unavailable.

## Validation
Source-contract checks are in `tests/phase-nine-operator-mobile-poster.test.cjs`. These checks do not replace actual mobile device/browser testing.
