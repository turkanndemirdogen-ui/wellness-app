# 14 — CLAUDE CODE MASTER INSTRUCTION

**Revizyon 2026-07-21:** Source-of-truth sırasına `15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` en üste eklendi. Superseded by 15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md where conflicting.

## Role

You are implementing the canonical visual system for a React Native + Expo + TypeScript wellness application.

## Source of truth order

1. `15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md`
2. `00_VISUAL_SYSTEM_CANONICAL.md`
3. `01_VISUAL_DIRECTION.md`
4. `02_COLOR_AND_GRADIENT_TOKENS.md`
5. `03_TYPOGRAPHY_SYSTEM.md`
6. `04_SURFACE_GLASS_GLOW_SYSTEM.md`
7. `05_ICON_ZODIAC_PLANET_GLYPH_SYSTEM.md`
8. `06_BOTANICAL_AND_CELESTIAL_ART_DIRECTION.md`
9. `07_COMPONENT_LIBRARY_CONTRACT.md`
10. `08_SCREEN_COMPOSITION_CONTRACTS.md`
11. `09_MOTION_HAPTICS_LIVING_WORLD.md`
12. `10_ASSET_PIPELINE_AND_NAMING.md`
13. `11_ACCESSIBILITY_AND_PERFORMANCE_BUDGET.md`
14. `12_VISUAL_QA_ACCEPTANCE_CHECKLIST.md`
15. `13_IMPLEMENTATION_PHASE_PLAN.md`
16. `14_CLAUDE_CODE_MASTER_INSTRUCTION.md`

If documents conflict, earlier documents have precedence. `15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` overrides any conflicting decision in `00–14`.

## Non-negotiable product identity

The application must not look like:

- a generic pastel wellness dashboard,
- a children’s fairy notebook,
- a dark witchcraft app,
- a collection of uniformly lilac cards,
- a flat utility dashboard,
- a neon astrology product.

It must feel like:

- a living botanical and celestial editorial system,
- scientifically grounded,
- visually varied,
- softly luminous,
- mature,
- atmospheric,
- adaptive to time,
- accessible,
- performant.

## Mandatory implementation rules

1. Do not redesign business logic unless required.
2. Preserve existing validated Home B1–B6 behavior.
3. Create tokens and primitives before screen refactors.
4. Do not hard-code colors, typography, radii, shadows or glyphs in screens.
5. ~~Use Fraunces + Inter only.~~ Superseded by 15 §5: use the locked font roles — Fraunces (display), Lora (long-form reading), Caveat (short quotes only, max 32 words / 2 lines), Playfair Display (rare ceremonial), System sans (UI controls, metadata, forms, navigation). Inter may remain for code compatibility but is not the canonical body font.
6. Use custom SVG astrology glyphs.
7. Plant cards show common and scientific names.
8. Botanical visuals must not be recolored into a universal brand palette.
9. Limit real blur to two surfaces per screen.
10. Support `adaptive` and `fixedDay` atmosphere modes. Per 15 §3: the atmosphere system must never darken the main chrome; darkness is visual-panel-only.
11. Support Reduce Motion and Reduce Transparency. Per 15 §9: with Reduce Motion on, ALL ambient animations stop entirely.
12. Build loading, empty, error and offline states.
13. Do not use random internet assets.
14. Do not add new dependencies without explaining need and cost.
15. Run typecheck, lint and relevant tests after each phase.
16. Keep exactly four main tabs (`home | explore | garden | chat`). Never create tabs for Mood, Cycle, Skin Care, Journal, Astrology, Rituals, Plants, Profile, Settings, Saved or Pro — these are sub-screens (15 §2).
17. Ensure Turkish character support (Ç ç Ğ ğ İ ı Ö ö Ş ş Ü ü) and use `tr-TR` locale for case transforms (15 §5).
18. Exclude toxic plants (Datura, Atropa belladonna, Aconitum, Digitalis, Ricinus communis, Nerium oleander, Conium maculatum and similar) from product inventory, recommendations, rituals, Garden collectibles, CTAs and affiliate links; symbolic display requires the "Tarihsel / sembolik referans — Kullanım önerisi değildir" label (15 §11).
19. Never produce medical-claim/dose language or deterministic astrology language (15 §12–13).
20. Apply Free/Pro teaser rules: first meaningful result is free; max one teaser per viewport; no fake blur; `ProTeaser` contract per 15 §14.

## Execution protocol

For each phase:

1. Audit current files.
2. State which files will change.
3. Implement minimal coherent slice.
4. Run validation.
5. Report:
   - changed files,
   - decisions applied,
   - tests,
   - remaining risks.
6. Commit only after user approval when approval is required by workflow.

## Visual acceptance

Before marking a screen complete, run `12_VISUAL_QA_ACCEPTANCE_CHECKLIST.md`.

## Prohibited shortcuts

- One giant reskin
- Replacing all cards with glass
- Using generated mockup text as production copy
- Using Unicode zodiac symbols as final visual assets
- Hiding scientific names
- Using placeholder botanical art as verified production art
- Skipping Android fallback
- Ignoring accessibility because design is “visual”
- Adding sparkle decorations to compensate for weak hierarchy

## First task

Start with Phase 0 audit from `13_IMPLEMENTATION_PHASE_PLAN.md`.

Produce:

- current token inventory,
- current component inventory,
- duplicated styles,
- Home B1–B6 preservation map,
- asset gaps,
- proposed file migration plan,
- risks.

Do not begin broad visual refactoring before the audit is complete.
