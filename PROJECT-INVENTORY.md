# PROJECT-INVENTORY.md — Proje Envanteri

Tarih: 2026-07-14 · Dal: `cleanup-project` · Kapsam: salt-okunur inceleme (hiçbir dosya değiştirilmedi, taşınmadı, silinmedi)

## Genel durum özeti

Depo yakın zamanda yeniden düzenlenmiş: eski kök yerleşimindeki 132 dosya git'te "silinmiş" görünüyor ve içerikleri `Archive/` altına taşınmış. Yeni üst düzey yapı: `mobile/` (uygulama), `docs/` (editoryal spec), `Editorial/` (editoryal çıktı/raporlar), `Archive/` (eski her şey). `Archive/`, `Editorial/`, `docs/` ve `mobile/` klasörleri kök depoda henüz izlenmiyor (untracked).

---

## 1. Uygulamanın aktif kaynak klasörleri

- `mobile/` — Expo (React Native) uygulaması. **Kendi bağımsız git deposudur** (`mobile/.git` var); kök depo tarafından izlenmez.
  - `mobile/src/app/` — ekranlar: `index.tsx`, `bahce.tsx`, `kesif.tsx`, `sohbet.tsx`, `_layout.tsx`
  - `mobile/src/components/`, `mobile/src/components/ui/` — bileşenler
  - `mobile/src/lib/` — `supabase.ts`, `content.ts` (içerik okuma katmanı), `auth.tsx`, `astro/` (provider + mock)
  - `mobile/src/constants/`, `mobile/src/hooks/`, `mobile/src/data/` (şu an boş)
  - `mobile/scripts/reset-project.js`, `mobile/assets/`
- Uygulama içeriği **yerel JSON'dan değil Supabase'den** okunuyor (`mobile/src/lib/content.ts`: `herbs`, `quizzes` tabloları, anon key + RLS).

## 2. Aktif içerik ve JSON klasörleri

- `Editorial/02_CIKTI/02_CIKTI/` — editoryal olarak işlenmiş **en güncel içerik JSON'ları** (görünürdeki tek aktif içerik seti):
  - `GRUP_1_BITKI_KARTLARI/bitki-kartlari-master.json`
  - `GRUP_2_QUIZLER/quiz-ay1…ay12` (12 quiz)
  - `GRUP_3_MODULLER/` — `cycle-beslenme`, `journal`, `journal-transit-sorulari`, `mood`, `neurogames-v1`
- `Editorial/03_RAPORLAR/03_RAPORLAR/` — editoryal değişiklik raporları (md)
- Not: `02_CIKTI/02_CIKTI` ve `03_RAPORLAR/03_RAPORLAR` şeklinde **iç içe aynı adlı klasörler** var (muhtemelen zip çıkarma artefaktı). İçerik yalnızca iç katmanda.
- Kök CLAUDE.md "aktif içerik dizini"nden söz ediyor ama eski `content/` dizini `Archive/content/`e taşınmış; kaynak ağacında tanımlı bir aktif içerik dizini şu an **yok**. Fiili içerik kaynağı Supabase veritabanı.

## 3. Aynı JSON dosyalarının yinelenen sürümleri

Aynı içeriğin en az **üç kopyası** var:

| İçerik | Kopya 1 (eski taslak) | Kopya 2 (build kopyası) | Kopya 3 (editoryal güncel) |
|---|---|---|---|
| quiz-ay1…ay12 | `Archive/content/` | `Archive/wellness-app-BUILD-2026-07-05/wellness-app/content/` | `Editorial/02_CIKTI/02_CIKTI/GRUP_2_QUIZLER/` |
| cycle-beslenme, journal-transit-sorulari, neurogames-v1 | `Archive/content/` | build kopyası | `GRUP_3_MODULLER/` |
| journal, mood | `Archive/modules/` | build kopyası (`modules/`) | `GRUP_3_MODULLER/` |
| bitki kartları | `Archive/content/bitki-kartlari-parti1..3.json` + `-pilot.json` | build kopyası | `GRUP_1_BITKI_KARTLARI/bitki-kartlari-master.json` (birleşik) |

Ayrıca:
- `soz-havuzu.json` (`Archive/content/`) ↔ `soz-havuzu-v0.1-duz.json` (`Archive/arsiv/`) — eski/yeni sürüm çifti
- `EDITORIAL_MASTER_SPEC.md` iki yerde: **aktif** `docs/editorial/` ve arşiv `Archive/claude-code-editorial-master-setup/docs/editorial/`
- `Archive/wellness-app-BUILD-2026-07-05/` klasörü ile aynı içeriğin `.zip`'i yan yana duruyor (çift kopya)

## 4. Kök CLAUDE.md ↔ mobile/CLAUDE.md olası çakışmalar

- `mobile/CLAUDE.md` yalnızca `@AGENTS.md` içeriyor; `mobile/AGENTS.md` ise tek talimat veriyor: Expo v57 sürümlü dokümanlarını okumadan kod yazma. Doğrudan bir çelişki yok, ancak:
  - **Bayat yol referansı:** Kök CLAUDE.md `docs/archive/old-editorial-prompts/`i işaret ediyor; bu yol artık yok — arşiv `Archive/claude-code-editorial-master-setup/docs/archive/old-editorial-prompts/`e taşınmış.
  - **Belirsiz "aktif içerik dizini":** Kök CLAUDE.md aktif içerik dizininden söz ediyor ama taşınma sonrası hangi klasör olduğu tanımsız (bkz. madde 2).
  - **Mimari belge referansı boşlukta:** Kök CLAUDE.md "mimari/modül spec'leri belirleyicidir" diyor, ancak tüm spec'ler `Archive/specs/` altında — yani "aktif otorite" belgeler arşiv klasöründe duruyor (bkz. madde 5).
  - **Ayrı git depoları:** `mobile/` kendi deposu olduğundan kök depo geçmişi uygulama kodunu kapsamıyor; iki CLAUDE.md'nin kapsam sınırı (kök = içerik/editoryal + eski RAG hattı, mobile = Expo uygulaması) hiçbir yerde yazılı değil.

## 5. Güncel mimari ve tasarım belgeleri

Şu an hepsi `Archive/` altında olmasına rağmen görünürde hâlâ güncel/başvurulabilir belgeler:

- `Archive/ARCHITECTURE_DECISIONS.md` — mimari kararlar
- `Archive/rag-base-spec.md` — RAG veri temeli spec'i
- `Archive/specs/` — modül/ekran spec'leri: `kesif-spec.md` (son commit KS-1 Keşif kart tasarımına değiniyor), `ana-sayfa-spec.md`, `bahce-spec.md`, `sohbet-spec.md`, `akis-spec.md`, `kozmos-motor-spec.md`, `mood-journal-spec.md`, `skincare-spec.md`, `gunun-sozu-spec.md`, `haftalik-bakis-spec.md`, `hook-sentez-spec.md`, `illustrasyon-uretim-spec.md`, `karar-gunlugu-2026-07-05.md`
- `Archive/KALINAN-YER.md` — son çalışma durumu (son commit'lerde güncellenmiş)
- `Archive/supabase/` — `config.toml`, `migrations/`, kurulum README'si (canlı DB şemasının kaynağı)
- `docs/editorial/EDITORIAL_MASTER_SPEC.md` — **yalnızca kullanıcıya görünen Türkçe dilin otoritesi**; mimari/tasarım belgelerinin yerine geçmez.

⚠️ Kök CLAUDE.md'ye göre mimari otorite bu belgeler; ancak "Archive" adlı klasörde durmaları, arşiv sayılmalarıyla çelişiyor. Hangilerinin aktif otorite kalacağı netleştirilmeli (bu envanter karar vermez, yalnızca raporlar).

## 6. Eski editoryal promptlar ve geçici çalışma klasörleri

- `Archive/claude-code-editorial-master-setup/` — eski editoryal kurulum paketi:
  - `docs/archive/old-editorial-prompts/` (kök CLAUDE.md'nin "tarihsel arşiv, aktif talimat değil" dediği klasörün yeni yeri)
  - `docs/editorial/EDITORIAL_MASTER_SPEC.md` (aktif spec'in eski kopyası)
  - `CLAUDE.md`, `CLAUDE_CODE_KURULUM_REHBERI.md`
- `Editorial/` — editoryal çalışma alanı; `TESLIM-CHECKLIST.md` + raporlar. İç içe `02_CIKTI/02_CIKTI` ve `03_RAPORLAR/03_RAPORLAR` yapısı geçici/çıkarma artefaktı görünümünde.
- `Archive/BASLANGIC-CLAUDE-CODE.md`, `Archive/KALINAN-YER.md`, `Editorial/TESLIM-CHECKLIST.md` — oturum/süreç yönetimi dosyaları.

## 7. Arşivlenebilecek ancak silinmemesi gereken dosyalar

- `Archive/sources/` — ~50 kaynak rapor (md) + `manifest.json`; RAG ingest'in girdisi, yeniden üretilemez → **sakla**.
- `Archive/content/`, `Archive/modules/`, `Archive/arsiv/` — editoryal düzenleme öncesi orijinal taslaklar; karşılaştırma/geri dönüş değeri var → sürüm kontrolünde/arşivde sakla.
- `Archive/scripts/` (+ `scripts/lib/`) — ingest/seed/test script'leri (`db:check`, `test:retrieval`, `test:visibility` dahil); DB hattı hâlâ kullanılıyorsa bunlar **arşiv değil aktif araçtır**.
- `Archive/supabase/migrations/` — DB şema geçmişi → kesinlikle sakla.
- `Archive/specs/`, `Archive/ARCHITECTURE_DECISIONS.md`, `Archive/rag-base-spec.md` — bkz. madde 5.
- `Archive/package.json` + `package-lock.json` — arşivlenen script'lerin bağımlılık tanımı (script'ler saklanıyorsa bunlar da saklanmalı).
- `Editorial/03_RAPORLAR/` raporları ve `FINAL-KONTROL.md` — editoryal karar izi → sakla.
- ⚠️ `Archive/.env` — **gizli anahtarlar içerebilir; asla commit edilmemeli.** Kökteki `.gitignore` silinmiş durumda ve `Archive/` untracked olduğundan, dikkatsiz bir `git add -A` bu dosyayı ve `Archive/node_modules`ı depoya sokar. Yeniden düzenleme commit'lenmeden önce kök `.gitignore` geri getirilmeli/güncellenmeli.

## 8. node_modules, build, cache ve yeniden üretilebilir klasörler

Silinebilir/yeniden üretilebilir (git'e girmemeli):

- `Archive/node_modules/` (~8.7 MB) — arşive taşınmış bağımlılıklar; `npm install` ile yeniden üretilir.
- `mobile/node_modules/` — Expo bağımlılıkları (çok büyük; boyut ölçümü zaman aşımına uğradı).
- `mobile/.expo/` — Expo yerel cache'i.
- `Archive/wellness-app-BUILD-2026-07-05/` (1.3 MB) + `Archive/wellness-app-BUILD-2026-07-05.zip` (400 KB) — aynı anlık görüntünün iki kopyası; en az biri gereksiz (zip saklanıp klasör kaldırılabilir ya da tersi — karar kullanıcıya ait).
- Lock dosyaları (`package-lock.json`) yeniden üretilebilir ama sürüm sabitleme değeri taşır; silinmemeli.

---

## Otorite notu

`docs/editorial/EDITORIAL_MASTER_SPEC.md` yalnızca **kullanıcıya görünen Türkçe dilin** otoritesidir. Mimari, veri modeli, ekran akışı ve tasarım kararlarının otoritesi ilgili mimari/tasarım belgeleridir (şu an `Archive/specs/` ve `Archive/ARCHITECTURE_DECISIONS.md` altında).
