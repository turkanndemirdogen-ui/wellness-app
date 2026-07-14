# PROJECT_HEALTH_REPORT.md — Cleanup Sonrası Sağlık Raporu

Tarih: 2026-07-14 · Dal: `cleanup-project` · Commit: henüz atılmadı (onay bekleniyor)

## 1. Doğrulama sonuçları

| Kontrol | Sonuç |
|---|---|
| Kök repo `git status` | 26 dosyada küçük, tamamı metin-düzeyi diff (+151/−140 satır): 19 M (17 editoryal içerik + CLAUDE.md + .gitignore) + 7 R (arşiv taşımaları, %100 rename) + untracked yeni docs/raporlar. **132 silinme sıfırlandı** — aktif dosyalar orijinal yollarına hash-doğrulamalı döndü. |
| Mobile repo `git status` | **Tamamen temiz** — mobile deposuna hiçbir değişiklik yapılmadı. |
| `.env` güvenliği | Kök `.env`: izlenmiyor, hiç commit edilmemiş (`git log --all -- .env` = 0), `.gitignore` kapsıyor. `mobile/.env`: izlenmiyor, mobile'ın kendi ignore'u kapsıyor. |
| `.gitignore` | `git restore` ile geri yüklendi; `mobile/` (nested repo sınırı) ve `.expo/` eklendi. `git check-ignore` üçlü doğrulaması geçti. |
| JSON parse | **41/41 aktif JSON temiz** (content, modules, sources, supabase, docs, kök). |
| Editoryal yapı koruması | 17/17 çiftte üst-düzey anahtar yapısı eşit; quiz soru sayıları korunmuş (CLAUDE JSON kuralı: yalnız metin değişti). |
| Script sözdizimi | 16 `.mjs` dosyasının tamamı `node --check` temiz. |
| Seed pipeline bütünlüğü | `content-io.mjs`'in beklediği 8 motor/kart dosyası + `sources/manifest.json` yerinde. |
| Supabase migration | 6/6 migration `supabase/migrations/` altında. |
| **Canlı DB doğrulaması** | `npm run db:check` **GEÇTİ**: herbs 37/37, quizzes 12/12, agent_only sızıntısı 0, kaynak 39/39, chunk görünürlük duvarı sağlam. |
| Mobile lint | `npm run lint` (expo lint) hatasız. |
| Mobile typecheck | `npx tsc --noEmit` temiz. |
| Mobile build | package.json'da build/test scripti tanımlı değil (yalnız start/lint); native build EAS ile kullanıcı tarafından çalıştırılır — kapsam dışı bırakıldı. |
| Asset kontrolü | `app.json` asset referansları eksiksiz; mobile kaynak ağacına dokunulmadı. |
| Kırık referans | Kök CLAUDE.md'nin tüm kanonik yolları mevcut. Architecture'daki `specs/…` ve `content/…` referanslarının tamamı çözülüyor. |

## 2. CLAUDE dosyaları — çakışma raporu

- **Kök `CLAUDE.md`** (canonical PROJECT ENTRY POINT): Governance'a yönlendirir, mobile sınırını tanımlar. ✔
- **`mobile/CLAUDE.md`** (`@AGENTS.md` → "Expo v57 dokümanını oku"): Kök otoritelerle **doğrudan çelişki yok**; yalnızca teknik çalışma kuralı içeriyor, Governance'ın öngördüğü çerçeveye uygun.
- Öneri (mobile deposunda ayrı, isteğe bağlı commit): `mobile/AGENTS.md`'ye kullanıcı metni yazılırken `../docs/editorial/EDITORIAL_MASTER_SPEC.md` + `../docs/safety/SAFETY_MASTER_SPEC.md`'ye bakılacağını belirten 2 satır eklemek. Bu cleanup kapsamında **yapılmadı** (mobile'a dokunmama kararı).
- Eski iki kök CLAUDE sürümü `docs/archive/old-claude-instructions/` altında, aktif talimat sanılmayacak adlarla saklandı.

## 3. Riskler ve bilinen sınırlar

1. **DB içeriği ile repo içeriği farklı:** Editoryal finaller repoya girdi ama Supabase'e **yazılmadı** (görev kuralı 8). Canlı DB'deki quiz/kart metinleri hâlâ eski sürüm. Seed'in yeniden üretilip yüklenmesi kullanıcı-onaylı ayrı görev → `DECISION_REQUIRED.md` #2.
2. **`bitki-kartlari-master.json` entegre değil:** Seed pipeline kart metnini `bitki-kartlari-{pilot,parti1..3}.json`'dan okuyor. Editoryal master aktif ağaçta duruyor ama motoru beslemiyor → `DECISION_REQUIRED.md` #1. Bu geçici olarak "aynı içeriğin iki sürümü" durumudur; bilinçli ve raporlanmış bir ara hâldir.
3. **Architecture'daki `arsiv/herbaryum-spec.md` işaretçisi:** Dosya `docs/archive/arsiv/`e taşındı; canonical belge yeniden yazılamadığı için bu tarihsel işaretçi artık eski yolu gösteriyor (belge zaten "tarihsel arşiv" diyor). ARCHIVE_INDEX eşlemesi mevcut.
4. **OneDrive davranışı:** Silinen `Archive/node_modules` bir kez senkron gecikmesiyle geri geldi; ikinci silme kalıcı oldu (5 sn sonra doğrulandı). OneDrive altındaki repolarda bu tür "diriltme" tekrar görülürse aynı silme yinelenebilir — veri riski yok (yalnız üretilebilir dosyalardı).
5. **CRLF uyarıları:** Git, LF'li dosyalar için "LF→CRLF" uyarısı veriyor (Windows `core.autocrlf` ayarı). Davranışsal etkisi yok; istenirse `.gitattributes` ayrı görev olarak eklenebilir.
6. **Gizli anahtarların konumu:** `.env` (service_role + OpenAI anahtarları) hiç commit edilmemiş ve ignore altında; ancak OneDrive-senkronlu klasörde düz metin duruyor. Öneri: anahtarları parola kasasında tutmak / periyodik rotasyon (karar kullanıcıda; cleanup kapsamı dışı).
7. **Görünürlük duvarı sağlam:** `db:check` agent_only sızıntısının 0 olduğunu doğruladı — cleanup güvenlik motoruna dokunmadı.

## 4. Tek doğru kaynak durumu

- Aynı adlı dosyanın aktif ağaçta ikinci kopyası kalmadı (tek istisna: içerik-düzeyi master/parti çakışması — madde 3.2, karar bekliyor).
- `-old/-copy/-final/-v2/-backup` desenli dosya taranıp bulunmadı; tek sürümlü ada sahip eski taslakların hepsi git geçmişinde.
- Belge otoritesi tek ağaçta: `docs/` (aktif) + `docs/archive/` (tarihsel).
