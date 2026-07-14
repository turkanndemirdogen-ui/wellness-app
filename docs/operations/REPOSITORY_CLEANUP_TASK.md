# REPOSITORY CLEANUP TASK

## Rol

Repository Maintainer olarak çalış. Amaç repository’yi kanonik belgelere göre sadeleştirmektir; kod davranışını, tasarımı veya kullanıcı içeriğini değiştirmek değildir.

## Ön koşullar

Önce oku:

1. kök `CLAUDE.md`
2. `docs/governance/GOVERNANCE_MASTER.md`
3. mevcut `PROJECT-INVENTORY.md`
4. mevcut `CLEANUP-PLAN.md`
5. yalnızca yol ve otorite kontrolü için dört kanonik master spec

## Kanonik hedef yollar

- `docs/governance/GOVERNANCE_MASTER.md`
- `docs/architecture/ARCHITECTURE_DECISIONS.md`
- `docs/design/PRODUCT_DESIGN_SYSTEM_MASTER.md`
- `docs/editorial/EDITORIAL_MASTER_SPEC.md`
- `docs/safety/SAFETY_MASTER_SPEC.md`

## Uygulama kuralları

1. Nested Git repository olan `mobile/` sınırını bozma.
2. Kök repo ve mobile repo işlemlerini ayrı yürüt.
3. Önce `.gitignore` ve `.env` güvenliğini doğrula.
4. Kalıcı olarak yalnızca açıkça yeniden üretilebilir artefaktları kaldır:
   - `node_modules`
   - cache
   - `.expo`
   - build/dist çıktıları
   - zip açma artefaktları
5. Diğer kanonik olmayan dosyaları silme; `docs/archive/` altında anlamlı klasörlere taşı.
6. Eski editoryal promptları `docs/archive/old-editorial-prompts/` altına taşı.
7. Aynı JSON’un çoklu sürümlerinde runtime kaynağını, final editoryal sürümü ve seed/migration rolünü doğrulamadan seçim veya silme yapma.
8. Supabase’e veri yazma ve migration üretme; bu cleanup kapsamında değildir.
9. Kullanıcı metnini yeniden yazma.
10. Tasarım, mimari, puanlama, eşleşme ve runtime davranışını değiştirme.

## Zorunlu raporlar

Oluştur veya güncelle:

- `MOVED_FILES.md`
- `docs/archive/ARCHIVE_INDEX.md`
- `PROJECT_STRUCTURE.md`
- `PROJECT_HEALTH_REPORT.md`
- `DECISION_REQUIRED.md` — yalnızca çözülemeyen belirsizlik varsa

Her taşıma için eski yol, yeni yol, neden, repo ve doğrulama sonucunu yaz.

## Doğrulama

Temizlik sonunda:

- iki Git reposunda ayrı `git status`
- `.env` takip edilmiyor mu?
- JSON parse kontrolü
- mevcut script’lere göre mobile lint/typecheck/test/build
- Supabase migration dosyaları yerinde mi?
- kök CLAUDE kanonik yolları doğru mu?
- aktif dosyalarda kırık referans var mı?

## Git

- `git add -A` komutunu körlemesine kullanma.
- Kök ve mobile repo commit’lerini ayır.
- Her aşama geri alınabilir ve küçük commit olmalı.
- Commit atmadan önce diff özetini kullanıcıya göster.
