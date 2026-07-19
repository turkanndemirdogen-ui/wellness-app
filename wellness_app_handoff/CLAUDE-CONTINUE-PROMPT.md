# Claude Code continuation prompt

Continue from the current Wellness App repository state.

Repository facts:
- Root repo: `wellness-app/`
- Mobile repo: `wellness-app/mobile/`
- Active branch: `feature/home-premium-ui`
- Base master commit: `5268064a30139520afff931c53897943229497ec`
- Phase 1 and Günlük Pusula B1–B6 are already merged.
- Do not recreate old PRs, rebase old branches, or redesign the product.
- Wellness visual identity is Soft Witchery / Scientific / Timeless / Natural.
- Do not introduce Fable, Pinterest × Vogue, cinematic-gallery, or visual-identity-app aesthetics.

Current Sprint 2.2A implementation is already present in the working tree:
- B3 herb hero architecture and embedded fallback
- ambient background
- haptics
- skeletons / fixed heights
- moon glyph
- quote save/share
- Living World A5 slice
- component contract docs

Your next task is NOT more implementation by default.

1. Inspect `git status`, `git diff --stat`, and `docs/HOME-DAILY-COMPASS-NOTES.md`.
2. Confirm that only Sprint 2.2A intended files are modified/untracked.
3. Prepare the physical-device acceptance checklist for the user.
4. Do not commit before device acceptance and explicit approval.
5. After device acceptance, fix only confirmed regressions.
6. Run:
   - `npx tsc --noEmit`
   - `npm run lint`
   - `npm run tokens`
   - from root repo: `npm run db:check`
7. Show validation results, `git diff --stat`, and a proposed commit message.
8. Stop before commit and wait for approval.

Open dependency:
- Supabase `public.quotes` table is still missing.
- Root `content/soz-havuzu.json` must later be integrated into the seed pipeline.
- Do not fake quote activation in the mobile UI.
