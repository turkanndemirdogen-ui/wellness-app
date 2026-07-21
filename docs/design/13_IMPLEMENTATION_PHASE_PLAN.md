# 13 — IMPLEMENTATION PHASE PLAN

**Durum:** EXECUTION PLAN  
**Sürüm:** 1.0

## Phase 0 — Audit

- Mevcut component ve token envanteri
- Inline styles
- Duplicate components
- Existing Home B1–B6 preservation map
- Asset inventory
- Performance baseline

Deliverable: `VISUAL_AUDIT_REPORT.md`

## Phase 1 — Foundations

- Color tokens
- Typography
- Spacing/radius
- Surface
- Icon wrapper
- Theme/atmosphere provider
- AppText

Acceptance: story/demo screen.

## Phase 2 — Glyph system

- Planet SVGs
- Zodiac SVGs
- Moon phases
- Accessibility
- Snapshot tests

## Phase 3 — Core components

- Buttons
- Chips
- Cards
- Inputs
- Headers
- Bottom tabs
- Skeletons
- States

## Phase 4 — Home retrofit

Preserve business logic; refactor visual layer.

- Hero
- Daily plant
- Mood
- Quote/insight
- Slot ladder
- Save/share
- Skeleton heights
- Haptics
- Device acceptance

## Phase 5 — Main tabs

Order:

1. Garden
2. Plants
3. Mood
4. Journal

Each tab complete with loading/error/empty before next.

## Phase 6 — Secondary modules

1. Astrology
2. Rituals
3. Cycle
4. Skin Care

## Phase 7 — Living World

- Breathing leaf
- Garden ambience
- Orbit on tap
- Dusk transition
- Ritual reveal
- Reduced motion

## Phase 8 — Asset pipeline

- Metadata schema
- Botanical verification
- CDN/storage
- Placeholders
- Compression

## Phase 9 — Accessibility/performance

- Contrast
- Dynamic Type
- Reduce settings
- Low-end mode
- Profiling

## Phase 10 — QA and release

- Visual QA checklist
- Cross-platform acceptance
- Regression tests
- Final screenshots
- Commit/tag

## Branch strategy

One branch per phase/screen. No giant visual rewrite commit.

## Stop conditions

- Architecture break
- Performance regression
- Botanical accuracy failure
- Accessibility gate failure
- Existing Home behavior regression

## Kilitlenen karar

Uygulama tek seferde “reskin” edilmez; foundation → component → screen → motion sırasıyla ilerler.
