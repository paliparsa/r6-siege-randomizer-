# Phase 5 — Motion, performance, and mobile experience

## Changes
- Added per-action guards for HQ, Duo, Duel, challenge, and map randomizers. A second activation is ignored while the action is running; the HQ lock covers the reveal interval.
- Added a reduced-motion path for the HQ operator roll that immediately renders the result without relying on CSS animation.
- Added brief result reveal feedback for Duo and tactical challenge results.
- Added async image decoding and loading-priority hints for dynamic images, with eager priority for the primary operator and duel portraits.
- Added mobile-width safeguards for Duel and Squad cards and a 42–44px touch target minimum for primary controls on narrow screens.
- Expanded `prefers-reduced-motion` handling to suppress animation, transitions, and smooth scrolling.
- Bumped app version to 1.21.0 and Service Worker cache to `r6-cache-v35`.

## Acceptance mapping
- **Fast, controlled tab transitions:** existing hub transitions remain short; reduced-motion users receive no transition animation.
- **Operator/result reveal:** existing HQ/Duel reveal is retained; Duo and challenge results get a short reveal.
- **Micro-interactions:** result feedback and pending-state styling are added.
- **Rapid click protection:** keyed locks prevent duplicate HQ/Duo/Duel/challenge/map rolls.
- **Image stability/performance:** dynamic images use asynchronous decoding and suitable loading priority.
- **Small-screen Duel/Squad:** min-width and compact-width rules reduce overflow and preserve touch targets.
- **Keyboard/focus/reduced motion:** existing focus-visible rules remain; global reduced-motion support is strengthened.
- **Service Worker:** cache version increments, preserving old-cache cleanup on activation.

## Validation limits
Source contracts are checked against the changed source. Real browser/device profiling, keyboard-only testing, visual screenshots, and an offline update cycle have not been executed here. 
