# Required Paths and Files

No redesign package is needed. The uploaded project already contains the required canonical, content, engineering, and mobile files.

## A. Root repository — product and data source of truth

### Project governance and structure
- `wellness-app/CLAUDE.md`
- `wellness-app/PROJECT_STRUCTURE.md`
- `wellness-app/PROJECT-INVENTORY.md`
- `wellness-app/PROJECT_HEALTH_REPORT.md`
- `wellness-app/DECISION_REQUIRED.md`
- `wellness-app/CLEANUP-PLAN.md`

### Locked product specifications
- `wellness-app/specs/ana-sayfa-spec.md`
- `wellness-app/specs/akis-spec.md`
- `wellness-app/specs/kesif-spec.md`
- `wellness-app/specs/bahce-spec.md`
- `wellness-app/specs/sohbet-spec.md`
- `wellness-app/specs/gunun-sozu-spec.md`
- `wellness-app/specs/mood-journal-spec.md`
- `wellness-app/specs/illustrasyon-uretim-spec.md`
- `wellness-app/specs/kozmos-motor-spec.md`
- `wellness-app/specs/karar-gunlugu-2026-07-05.md`

### Astro and astrocartography package
- `wellness-app/added-specialties and new module astrocartography/acg-spec.md`
- `wellness-app/added-specialties and new module astrocartography/astro-engine-spec.md`
- `wellness-app/added-specialties and new module astrocartography/guncelleme-bloklari.md`

### Runtime content needed by Home and future modules
- `wellness-app/content/bitki-kartlari-master.json`
- `wellness-app/content/soz-havuzu.json`
- `wellness-app/content/engine-config.json`
- `wellness-app/content/engine-rules-katman1a.json`
- `wellness-app/content/engine-rules-katman1b.json`
- `wellness-app/content/engine-rules-katman2.json`
- `wellness-app/content/motor-tablo-parti1.json`
- `wellness-app/content/motor-tablo-parti2.json`
- `wellness-app/content/motor-tablo-parti3.json`
- `wellness-app/modules/mood.json`
- `wellness-app/modules/journal.json`

### Database / ingestion pipeline
- `wellness-app/package.json`
- `wellness-app/scripts/generate-seed.mjs`
- `wellness-app/scripts/apply-seed.mjs`
- `wellness-app/scripts/check-db.mjs`
- `wellness-app/scripts/generate-engine-seed.mjs`
- `wellness-app/supabase/`

## B. Mobile repository — active implementation

### Project instructions
- `wellness-app/mobile/CLAUDE.md`
- `wellness-app/mobile/AGENTS.md`
- `wellness-app/mobile/package.json`
- `wellness-app/mobile/app.json`
- `wellness-app/mobile/eas.json`

### Current Home implementation
- `wellness-app/mobile/src/app/(tabs)/index.tsx`
- `wellness-app/mobile/src/content/home-copy.ts`
- `wellness-app/mobile/src/content/shell-copy.ts`
- `wellness-app/mobile/src/lib/home.ts`
- `wellness-app/mobile/src/lib/content.ts`
- `wellness-app/mobile/src/lib/checkin.ts`
- `wellness-app/mobile/src/lib/favorites.ts`
- `wellness-app/mobile/src/lib/haptics.ts`

### Design system and domain UI
- `wellness-app/mobile/src/design-system/components/ambient-background.tsx`
- `wellness-app/mobile/src/design-system/components/card.tsx`
- `wellness-app/mobile/src/design-system/components/chip.tsx`
- `wellness-app/mobile/src/design-system/components/reveal.tsx`
- `wellness-app/mobile/src/design-system/components/skeleton.tsx`
- `wellness-app/mobile/src/design-system/theme/semantic.ts`
- `wellness-app/mobile/src/design-system/theme/motion.ts`
- `wellness-app/mobile/src/design-system/theme/theme-provider.tsx`
- `wellness-app/mobile/src/design-system/tokens/tokens.json`
- `wellness-app/mobile/src/domain-ui/herb-illustration.tsx`
- `wellness-app/mobile/src/domain-ui/herb-illustration-assets.ts`
- `wellness-app/mobile/src/domain-ui/moon-phase-glyph.tsx`

### Current decision and acceptance records
- `wellness-app/mobile/docs/HOME-DAILY-COMPASS-NOTES.md`
- `wellness-app/mobile/docs/PHASE-1-ACCEPTANCE.md`
- `wellness-app/mobile/docs/components/`

## C. Files that must never be copied into prompts or shared
- `wellness-app/.env`
- `wellness-app/mobile/.env`
- Any access token, Supabase secret, GitHub token, signing credential, or keystore

## D. Files not required for every UI sprint
The large `sources/` corpus is required for evidence, engine, editorial and retrieval work, but does not need to be loaded into context for each UI task. Load only relevant canonical specs and current implementation files.
