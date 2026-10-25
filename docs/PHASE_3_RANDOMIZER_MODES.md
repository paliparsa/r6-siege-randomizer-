# Phase 3 — Randomizer mode redesign

## Scope
- Give Standard Randomizer, Cursed Loadout, Squad, Tactical Challenges, Duo Synergy, and Duel Arena distinct visual identities using the existing Tactical Noir system.
- Keep visual state scoped to mode attributes; support mobile layouts and reduced motion.
- Extract Duel Arena pairing into the pure `pickDuelPair` helper so the attacker-versus-defender rule is directly testable.

## Behavior invariants
- Standard/Cursed continue using the existing operator pool, faction filter, banned-operator exclusions, reveal animation, and confirmation flow.
- Squad retains its current faction rule, ban list, five-operator minimum, role assignment, intelligence report, and poster flow.
- Duo Synergy continues selecting from `duoFilteredPool()`, using existing combo data and analysis, with share/XP actions retained.
- Duel Arena always returns `p1.side === 'atk'` and `p2.side === 'def'`. If either eligible pool is empty, no pair is returned and the existing toast explains the requirement.
- No operator dataset, storage key, hub, Alpha Pack, XP, Level, Inventory, History, Theme, maps, posters, PWA, or game mode was intentionally removed.

## Tests
Run from the repository root with Node.js 18 or newer:

```sh
node --test tests/phase-three-modes.test.cjs
```

The suite independently checks each mode contract and repeatedly verifies Duel Arena pairing, bans, and empty-side behavior. It is not a substitute for real browser visual and interaction testing.

## Rollback
Revert the Phase 3 pull request/commit. No storage migration is introduced.
