# Changelog

## 1.12.0 — 2026-10-25

### Added
- Added reference data for all 78 operators with 71 available full-body figure assets, six newer-operator artwork fallbacks, and an official operator badge fallback for Noor.
- Added primary/secondary weapon choices, 2nd-gadget options and images, and unique-ability names, descriptions and available artwork.
- Added 118 weapon reference entries, including base damage, fire rate, magazine capacity, reserve ammo, mobility, reload data where available, and weapon artwork.
- Added weapon cards with selected-weapon stats and secondary-gadget cards with imagery/descriptions; added XK23 to the current loadout options for Dokkaebi, Rauora and Sens.
- Added both data files to the Service Worker app shell and refreshed the cache.

### Data sources and accuracy notes
- Operator loadout reference: https://github.com/Bmat9000/r6-loadout-db
- Weapon reference data and full-body figure/gadget assets: https://github.com/danielwerg/r6data (MIT-licensed data project).
- Supplemental recent weapon records and artwork: https://wiki.r6dle.net/weapons and community weapon data tables.
- Noor's loadout and 2-speed/2-armor profile checked against Ubisoft's operator page and Y11S3 release notes: https://www.ubisoft.com/en-us/game/rainbow-six/siege/game-info/operators/noor
- Weapon stats are a community-maintained reference snapshot, not a live Ubisoft feed; values can change after balance patches. Unknown weapon stats are not invented and are displayed as unavailable.
- The available full-body figure set does not cover all current operators. For six newer operators, the menu uses available operator artwork instead; Noor uses Ubisoft's official operator badge. These are clearly differentiated in the data.

### Maintenance
- Bumped app version to 1.12.0 and Service Worker cache to `r6-cache-v26`.

### Validation
- Source-level checks cover the 78-entry operator roster, 118 weapon reference entries, 271 weapon choices, gadget/ability UI wiring, and offline app-shell paths. Real-browser/device visual testing remains outstanding.


### Added
- Added reference data for all 78 operators with available full-body figure art, artwork/icon fallbacks, primary/secondary weapon choices, secondary gadget choices, and unique-ability descriptions/art where present.
- Added weapon reference data for 102 weapons including base damage, fire rate, magazine capacity, reserve ammo, mobility, reload times, and official weapon images where supplied by the upstream dataset.
- Rebuilt the loadout panel to display weapon images and available stats, unique-ability artwork/descriptions, and secondary-gadget cards with imagery and descriptions.
- Added data files to the service-worker app shell and refreshed the cache.

### Data sources and accuracy notes
- Operator loadout reference: https://github.com/Bmat9000/r6-loadout-db
- Weapon reference data and full-body figure/gadget assets: https://github.com/danielwerg/r6data (MIT-licensed project).
- Noor's loadout and 2-speed/2-armor profile checked against Ubisoft's operator page and Y11S3 release notes: https://www.ubisoft.com/en-us/game/rainbow-six/siege/game-info/operators/noor
- Weapon stats are a community-maintained reference snapshot, not a live Ubisoft feed; values can change after balance patches. Missing stats are shown as unavailable instead of invented.
- The upstream full-body figure set covers 71 of the 78 current project entries; six newer operators use available operator artwork, and Noor uses Ubisoft's official operator badge because the upstream figure set lacks a full-body image for every current operator.

### Maintenance
- Bumped app version to 1.12.0 and Service Worker cache to `r6-cache-v26`.

### Validation
- Source-level checks cover the 78-entry operator roster, 102 weapon stat records, weapon/gadget UI wiring, and offline app-shell paths. Real-browser/device visual testing remains outstanding.

## 1.11.0 — 2026-10-25

### Added
- Added a tactical operator-selection screen with separate attacker/defender rosters, operator search, selection state, and a large operator identity panel.
- Added selectable primary/secondary weapon options parsed from the existing operator data, plus current speed, armor, organization, and unique-ability labels.
- Added random selection and an explicit confirm action that synchronizes the selected operator with the existing HQ randomizer without awarding XP or changing the roster.
- Added responsive desktop/mobile layouts, keyboard Escape-to-close, visible focus support, and reduced-motion handling.

### Data integrity
- Reused the project's existing operator icon URLs and roster; did not invent operator descriptions, secondary-gadget assignments, weapon stats, or missing cinematic portraits. Missing details are explicitly identified in the UI.
- Weapon choice in the new panel is informational only; it does not claim to change in-game attachments or game state.

### Maintenance
- Bumped app version to 1.11.0 and Service Worker cache to `r6-cache-v25`.

### Validation
- Source inspection confirms the new menu is connected to the existing 78-entry roster and the confirm action calls the existing operator-card renderer. Real-browser, mobile, keyboard and remote-image testing remains to be performed.

## 1.10.0 — 2026-10-25

### Added
- Rebuilt the Alpha Pack simulator as a cinematic, responsive reward-opening experience with a custom illustrated container, scan effects, staged reveal, rarity-driven reward presentation, and a manual zipper control.
- Expanded the simulated loot catalogue across weapon skins, headgear, uniforms, charms, player cards, attachment cosmetics, and profile titles; existing profile theme unlocks remain supported.
- Added rarity-weighted selection, pack-consumption safeguards, opening history, a local collection, drop statistics, reward-name copy, and open-next flow.
- Added reduced-motion support, mobile layouts, local-storage guards, and explicit copy clarifying that drops are simulated and are not official Ubisoft rewards.

### Improved
- Preserved the existing app navigation, profile progression, XP/pack earning flow, profile titles, and theme unlocks.
- Bumped app version to 1.10.0 and Service Worker cache to r6-cache-v24.

### Validation
- Source-level checks confirm Alpha Pack modal and handlers, reward/history/collection targets, app version, and preservation markers for existing profile and Duel Arena code. Real-browser animation, sound, storage, and mobile testing remains required.



## 1.9.2 — 2026-10-24

### Fixed
- Updated Duel Arena sharing and poster output to use the new attacker/defender, gadget, weapon, and scenario fields.
- Removed obsolete references to the deleted per-player weapon/movement rules from the share and poster flows.
- Cleaned Markdown markers from duel rules so they render as plain, readable text.
- Bumped app version to 1.9.2 and Service Worker cache to r6-cache-v23.

### Validation
- Source checks confirm the share and poster contexts use the current duel rule model; inline JavaScript syntax checks pass.

## 1.9.1 — 2026-10-24

### Fixed
- Duel matchups now always pair one attacker against one defender; two attackers or two defenders can no longer be drawn against each other.
- Rebuilt the duel cards around each operator's real gadget and listed weapons instead of arbitrary player-specific weapon/movement restrictions.
- Removed speed/armor stat comparisons and all speed-based verdict logic from the duel UI.
- Added concise explanations for each duel mode, clear win conditions, and a random challenge drawn from the same tactical-challenge database.
- Removed the challenge count from the Tactical Challenges tab title.
- Bumped app version to 1.9.1 and Service Worker cache to r6-cache-v22.

### Validation
- Source checks cover attack-vs-defense selection, shared mode descriptions, challenge-database reuse, and removal of speed controls/comparisons.

## 1.9.0 — 2026-10-24

### Added
- Doubled tactical challenges from 55 to 110 with 55 new community-inspired ideas: sidearm/shotgun rounds, hip-fire, no-drone rules, VIP escort, ping-focused callouts, trap setups, layered defense, buddy systems, and more.
- Updated the all-team count and challenge counter to reflect the full pool.
- Bumped app version to 1.9.0 and Service Worker cache to r6-cache-v21.

### Validation
- Source checks verify 110 sequential challenge IDs, supported side filters, and JavaScript syntax. These are optional custom/casual house rules, not recommended for Ranked.

## 1.8.3 — 2026-10-24

### Fixed
- Added dedicated, in-panel poster buttons to the **ترکیب دو اپراتور** and **رقابت دونفره (1v1)** views, instead of relying only on the floating global action.
- Each button invokes the contextual poster exporter so the generated poster uses the active Duo or Duel state.
- Bumped app version to 1.8.3 and Service Worker cache to r6-cache-v20.

### Validation
- Source checks confirm both buttons are located inside their respective view panels and call the contextual poster handler. Browser/device visual confirmation remains outstanding.

## 1.8.2 — 2026-10-24

### Fixed
- Made the global contextual poster action explicitly visible and interactive above the mobile navigation, while keeping it below modal overlays; adjusted small-screen placement.
- Renamed the former Maps & Timer tab to **نقشه و سایت** in the desktop section label and mobile navigation to reflect the timer removal.
- Bumped app version to 1.8.2 and Service Worker cache to r6-cache-v19.

### Validation
- Source checks verify poster action markup and contextual handler, map-tab labels, timer removal, and JavaScript syntax. Browser/device visual confirmation remains outstanding.

## 1.8.1 — 2026-10-24

### Fixed
- Updated map-hub card and mobile layout selectors to match the new single-card structure, preserving the Tactical Noir surface, grid texture, and responsive spacing after the timer panel was removed.
- Bumped app version to 1.8.1 and Service Worker cache to r6-cache-v18.

### Validation
- Source checks confirm the new selectors match the rendered map hub, inline JavaScript remains syntactically valid, and map/timer behavior from 1.8.0 is preserved.

## 1.8.0 — 2026-10-24

### Map intelligence and poster coverage
- Expanded the map roulette from a small legacy subset to the 15-map Ranked pool for Y11S3.2, with bomb-site pairs, floor labels, and tactical notes.
- Added direct map and site selectors, safer site changes, consistent floor/site rendering, and a dataset status count so the displayed site and poster stay synchronized.
- Extended contextual poster details across challenge filters, Duo Synergy faction/style/search filters, Duel Arena modes and tournament status, and the selected map/site.
- Removed the round/defuser timer panel and its countdown logic; the map hub now focuses entirely on map and bomb-site selection.
- Bumped app version to 1.8.0 and Service Worker cache to r6-cache-v17.

### Validation
- Source assertions cover 15 ranked maps, map/site selector wiring, poster contexts, timer UI/logic removal, version/cache alignment, and changelog placement. Real-browser visual and gameplay-data verification remain recommended.

## 1.7.1 — 2026-10-24

### Fix clipped Duel Arena and Squad Intelligence content
- Prevented the Operations hub and its subviews from shrinking into a fixed-height layout that clipped lower controls and tournament content.
- Removed overflow clipping from the Duel Arena feature panel so the shared rule, stat comparison, verdict, and match randomizer remain reachable.
- Prevented the five-operator squad report and squad cards from flex-shrinking or being clipped; the main content area now owns vertical scrolling.
- Added mobile-specific spacing and wrapping safeguards for duel details and squad report text.
- Bumped app version to 1.7.1 and Service Worker cache to r6-cache-v16.

### Validation
- Source checks confirm the affected panels, controls, report, version, cache, and changelog are present. Browser/device visual testing is still required to confirm exact rendering.


## 1.7.0 — 2026-10-24

### Motion system and Duel Arena access
- Added a restrained shared motion language for initial entry, hub/subview transitions, operator dossier and duel portrait reveals, and explicitly generated posters.
- Kept effects tied to meaningful interactions instead of routine rendering.
- Preserved `prefers-reduced-motion` support for every new animation.
- Added a prominent direct-entry button for Duel Arena; it opens Operations, selects 1v1, scrolls the arena to the top, and focuses the match-start control.
- Hardened Operations mode switching with validation, missing-element guards, and accessible pressed states.
- Bumped app version to 1.7.0 and Service Worker cache to r6-cache-v15.

### Validation
- Source-level checks cover motion hooks, reduced-motion overrides, direct Duel Arena routing, and version/cache/changelog updates. Browser/device interaction and visual regression testing remain outstanding.


## 1.6.0 — 2026-10-24

### Visual redesign
- Refined HQ into a cinematic operator dossier with a larger framed identity mark, restrained watermark treatment, cleaner command strips, and squad-card polish.
- Unified Operations subviews with mission-file surfaces, calmer hierarchy, coordinated operator portrait hover motion, and smoother duel stat transitions.
- Reworked Maps & Timer panels with coordinate-grid texture, stronger map/site hierarchy, and a more precise tabular timer display.
- Added restrained warning-state styling hooks for the timer and kept motion responsive to reduced-motion preferences while preserving existing interactions and functionality.
- Bumped app version to 1.6.0 and Service Worker cache to r6-cache-v14.

### Validation
- Source-level checks cover the version/cache bump, key HQ/Operations/Tools selectors, timer styling hooks, and reduced-motion handling. Browser/device visual regression testing remains outstanding.


## 1.5.0 — 2026-10-24

### Design
- Reworked the visual identity into a Tactical Noir system using Obsidian (#0B0D0F), Graphite (#191D21), Bone (#E8E9E5), Signal (#D6F04A), and Alert (#D94A45).
- Refined the background with a restrained tactical grid and topographic contour texture.
- Unified the default interface accent across headers, navigation, operator cards, operations panels, selection controls, install surfaces, and the floating poster action.
- Added consistent hover, pressed, keyboard-focus, panel-entry, scanline, and modal-backdrop treatments.
- Improved scrollbar styling and added a global reduced-motion accommodation.
- Preserved existing app features, navigation, game-specific faction/duel cues, poster generation, and core behavior.
- Bumped the app version to 1.5.0 and Service Worker cache to r6-cache-v13.

### Validation
- Source-level checks verify version/cache alignment, design tokens, reduced-motion rules, and preservation of existing functional entry points. Browser/device visual regression testing remains to be completed.


## 1.4.2 — 2026-10-24

### Added
- Made the poster generator available from a persistent floating action on every main hub, including Operators, Operations, and Maps/Timer.
- Added context-aware poster rendering for Duo Synergy, Duel Arena, tactical challenges, map/site briefing, and timer status, including operator portraits where relevant.
- Kept the existing detailed solo, cursed-loadout, and five-operator squad posters in the Operators hub.
- Updated poster filenames to use the current view's context and bumped the app version to 1.4.2 / Service Worker cache to `r6-cache-v12`.

### Validation
- Source-level checks cover all hub routes and poster export/download/share suffix handling. Live browser, image CDN, and share-sheet testing remains to be confirmed.


## 1.4.1 — 2026-10-24

### Fixed
- Fixed Duo Synergy crashing when filtering or generating a combination by initializing the search query state before the filter is first evaluated.
- Bumped app version to 1.4.1 and Service Worker cache to `r6-cache-v11` so installed clients refresh the fix.

### Validation
- Source-level checks confirm the Duo search state is declared once and before use, and the roll/filter handlers still reference the expected controls.
- Browser/device runtime testing remains to be confirmed.


## 1.4.0 — 2026-10-24

### Added
- Expanded Duo Synergy from 8 entries to a 120+ curated-pair target across Attack and Defense, using operators in the app roster and gadget-aware tactical guidance.
- Added Duo search across operator names, gadget roles, combo titles, and execution plans, plus live matching-count feedback.
- Added procedural tactical UI sound effects across buttons and interactive controls, with the existing global sound mute respected.
- Improved operator portrait clarity in Duo Synergy and Duel Arena with full-opacity, higher-contrast rendering and subtle contrast lighting.

### Improved
- Kept sound generation procedural in-browser; no copyrighted Rainbow Six audio files are bundled or represented as official game recordings.
- Bumped app version to 1.4.0 and Service Worker cache to `r6-cache-v10`.

### Validation
- Source-level validation is performed before merge; live browser/device audio, portrait CDN availability, and deployment health must still be verified in a real browser.

## 1.3.0 — 2026-10-24

### Added
- Rebuilt Duo Synergy with cinematic operator cards, attack/defense filtering, synergy categories, execution plan, analysis tags, and native-share/copy fallback.
- Added Duel Arena modes for pure 1v1, gadget advantage, objective control, and random scenarios, with operator portraits, speed/armor comparison, transparent verdicts, and sharing.
- Added playable 8/16-operator single-elimination tournament where users advance winners manually and share the champion.
- Added responsive tactical styling and reduced-motion support.

### Improved
- Kept existing daily XP claiming behavior and banned-operator exclusion for duels/tournament entrants.
- Avoided claiming a definitive duel winner from speed/armor alone; analysis explicitly accounts for player skill and scenario.
- Bumped app version to 1.3.0 and Service Worker cache to `r6-cache-v9`.

### Validation
- Source checks verify UI targets, handlers, XP flows, version/cache, and tournament progression logic.
- Browser/device visual testing and live deployment health have not been verified.


## 1.2.0 — 2026-10-24

### Added
- Added mission briefing presets (balanced, aggressive, intel/control, objective defense) that influence squad selection while respecting faction and ban constraints.
- Rebuilt the five-operator lineup as a cinematic deployment with role slots, operator icons, gadgets, primary weapons, speed, and armor.
- Added squad intelligence reporting for estimated role coverage/gaps, average speed/armor, gadget diversity, and a clearly non-official readiness score.
- Added responsive squad cards and reduced-motion support.

### Improved
- Kept the existing squad poster export/share flow accessible from the squad view.
- Clearly labeled inferred role coverage and readiness as estimates rather than official in-game ratings.
- Bumped app version to 1.2.0 and Service Worker cache to `r6-cache-v8`.

### Validation
- Source-level checks cover mission presets, rendering, report metrics, version/cache markers, and reduced-motion behavior.
- Physical-device visual testing and live deployment health have not been verified.

## 1.1.5 — 2026-10-24

### Improved
- Reworked command-header spacing and visual hierarchy to reduce crowding, especially on mobile.
- Added safe-area top padding so the header stays below the iPhone notch/Dynamic Island in standalone web-app mode.
- Updated onboarding to reappear for this release and added a web-app install action on its final slide.
- Added a persistent, dismissible install notification card with native install prompting where supported and browser/Safari instructions as fallback.

### Maintenance
- Bumped app version metadata to 1.1.5.
- Bumped the Service Worker cache to `r6-cache-v7`.

### Validation
- Checked onboarding/install hooks, safe-area styles, and version/cache markers in source.


## 1.1.4 — 2026-10-24

### Added
- Added the missing Nøkk and Blackbeard attacker entries.
- Added Year 11 operators Solid Snake (attacker) and Noor (defender), including gadget, weapon, organization, speed, armor, and icon-slug metadata.
- Updated the operator roster from 74 to 78 entries: 39 attackers and 39 defenders, excluding Recruit as a separate legacy entry.

### Maintenance
- Bumped app version metadata to 1.1.4.
- Bumped the Service Worker cache to `r6-cache-v6` so installed clients refresh the updated roster.

### Validation
- Verified unique operator IDs and roster counts (39 attackers, 39 defenders).
- Solid Snake and Noor use the existing icon fallback if their upstream SVGs are unavailable.


## 1.1.3 — 2026-10-24

### Fixed
- Corrected operator icon URLs to match the actual folder/file structure in the upstream icon repository.
- Corrected Rauora and Denari icon slugs so each uses its own icon instead of Sens or Azami.

### Maintenance
- Bumped app version metadata to 1.1.3.
- Bumped the Service Worker cache to `r6-cache-v5` so installed clients can refresh the app shell.

## 1.1.2 — 2026-10-24

### Improved
- Replaced text-only operator ban tiles with each operator's icon, keeping the name visible as a compact caption.
- Added consistent icon framing, mobile-friendly square tiles, accessible checkbox labels, and a letter fallback if an icon fails to load.

### Maintenance
- Bumped app version metadata to 1.1.2.
- Bumped the Service Worker cache to `r6-cache-v4` so installed clients can receive the updated operator tiles.

## 1.1.1 — 2026-10-24

### Fixed
- Restored natural document scrolling on mobile instead of trapping touch scroll in a fixed-height viewport.
- Removed mobile-only fixed-height constraints from the active hub sections so long content can extend and scroll normally.
- Kept the mobile bottom navigation visible with safe-area-aware sticky positioning.
- Made tall dialogs scrollable on small screens, including devices with short viewports and browser safe areas.

### Maintenance
- Bumped app version metadata to 1.1.1.

## 1.1.0 — 2026-10-24

### Improved
- Simplified Persian navigation, mode names, buttons, profile labels, and reward messages for casual players.
- Clarified operator roles, attack/defense labels, speed/armor indicators, map/site selection, defuser timer states, and app progression terms.
- Replaced ambiguous English challenge tags and timer status labels with clearer Persian wording where practical.
- Added tooltips for less obvious gameplay abbreviations and concepts.
- Added `docs/PLAYER_TERMINOLOGY.md` as the source of truth for consistent player-facing terminology.

### Maintenance
- Added app version metadata (`1.1.0`).
- Bumped the Service Worker cache to `r6-cache-v3` so clients refresh updated UI assets.
- Includes the previously prepared XP claim limits, timestamp-based timer accuracy, safer local storage handling, sharing fallback, and PWA improvements.

### Validation
- Inline JavaScript and Service Worker syntax compilation passed.
- Key UI and dynamic-label markers were checked against the branch.
- Browser/device visual testing has not yet been performed.
