# MOVED_FILES.md — Taşıma ve Silme Kayıtları

Tarih: 2026-07-14 · Repo: **kök** (mobile deposuna hiçbir işlem yapılmadı) · Commit: henüz yok

Her satırda: eski yol → yeni yol · neden · doğrulama.

## 1. Aktif ağacın geri yüklenmesi (Archive → orijinal izlenen yollar)

Git'te "silinmiş" görünen 132 izlenen dosyanın tamamının `Archive/` kopyaları, taşımadan önce **git HEAD blob'larıyla hash-eşit** doğrulandı; orijinal yollarına geri taşındı. Sonuç: git bu dosyaları değişmemiş görüyor (silinme kayıtları sıfırlandı).

| Eski yol | Yeni yol | Neden |
|---|---|---|
| `Archive/content/` (33 dosya) | `content/` | Aktif içerik dizini; seed/ingest scriptleri `content/*.json` okur |
| `Archive/modules/` (2) | `modules/` | Log tablosu alan kaynağı |
| `Archive/scripts/` (16) | `scripts/` | Aktif seed/ingest/test araçları (`package.json` scriptleri çağırır) |
| `Archive/sources/` (51) | `sources/` | RAG kaynak külliyatı; `content-io.mjs` `sources/manifest.json` okur |
| `Archive/specs/` (13) | `specs/` | Architecture belgesi `specs/...` yollarına atıf yapar |
| `Archive/supabase/` (8) | `supabase/` | Canlı DB şeması + 6 migration |
| `Archive/package.json`, `package-lock.json` | kök | Script tanımları + sürüm kilidi |
| `Archive/contraindications.json` | kök | Güvenlik filtresi; eski izlenen yol |
| `Archive/.env` | kök `.env` | `scripts/lib/env.mjs` `.env`'i repo kökünde arar; izlenmiyor + ignore altında (hiç commit edilmemiş — geçmiş taraması 0 commit) |
| `Editorial/TESLIM-CHECKLIST.md` | kök (sonra arşive, bkz. §4) | HEAD ile hash-eşit tek kopya buradaydı |

Doğrulama: taşıma sonrası `git status`ta 0 silinme; 41 aktif JSON parse temiz.

## 2. Editoryal finallerin aktif yollara yerleştirilmesi (17 dosya, üzerine yazma)

Kaynak: `Editorial/02_CIKTI/02_CIKTI/`. Ön doğrulama: 17/17 çiftte üst-düzey JSON yapısı (anahtarlar) eşit; soru sayıları korunmuş. Git bu dosyaları "M" (yalnız metin değişikliği) gösteriyor; eski sürümler git geçmişinde.

| Kaynak | Hedef |
|---|---|
| `GRUP_2_QUIZLER/quiz-ay1…ay12.json` (12) | `content/` (aynı adlar, üzerine) |
| `GRUP_3_MODULLER/cycle-beslenme.json`, `journal-transit-sorulari.json`, `neurogames-v1.json` | `content/` |
| `GRUP_3_MODULLER/journal.json`, `mood.json` | `modules/` |

## 3. Yeni dosya

| Dosya | Not |
|---|---|
| `content/bitki-kartlari-master.json` (← `GRUP_1_BITKI_KARTLARI/`) | Editoryal FİNAL 37 kart. Seed pipeline hâlâ `bitki-kartlari-{pilot,parti1..3}.json` okuyor — entegrasyon kod değişikliği gerektirir → `DECISION_REQUIRED.md` #1 |

## 4. Tarihsel dosyaların arşive taşınması (git mv — geçmiş korunur)

| Eski yol | Yeni yol | Neden |
|---|---|---|
| `ARCHITECTURE_DECISIONS.md` | `docs/architecture/ARCHITECTURE_DECISIONS.md` | Kanonik konum (Governance §2); üzerine canonical başlık notlu sürüm yazıldı (içerik farkı yalnız 5 satırlık başlık — git R+M) |
| `rag-base-spec.md` | `docs/architecture/rag-base-spec.md` | Mimari spec'in belge ağacına alınması |
| `arsiv/herbaryum-spec.md` | `docs/archive/arsiv/herbaryum-spec.md` | Tarihsel (Architecture'da "tarihsel arşiv" damgalı) |
| `arsiv/soz-havuzu-v0.1-duz.json` | `docs/archive/arsiv/soz-havuzu-v0.1-duz.json` | Eski taslak; aktif sürüm `content/soz-havuzu.json` |
| `BASLANGIC-CLAUDE-CODE.md` | `docs/archive/history/` | Tamamlanmış kurulum talimatı |
| `KALINAN-YER.md` | `docs/archive/history/` | Oturum-durum günlüğü; süreklilik rolü Governance+Architecture'a geçti → onay: `DECISION_REQUIRED.md` #3 |
| `TESLIM-CHECKLIST.md` | `docs/archive/history/` | Tamamlanmış editoryal teslim süreci |

## 5. Canonical belge kurulumu (`wellness-app-canonical-specs/` paketi → aktif ağaç)

| Kaynak (paket) | Hedef | Doğrulama |
|---|---|---|
| `CLAUDE.md` | kök `CLAUDE.md` (üzerine) | hash-eşit kurulum; önceki kök sürüm arşivlendi (aşağıda) |
| `docs/governance/GOVERNANCE_MASTER.md` | `docs/governance/` | hash-eşit |
| `docs/architecture/ARCHITECTURE_DECISIONS.md` | `docs/architecture/` | hash-eşit (git mv edilen dosyanın üzerine) |
| `docs/design/PRODUCT_DESIGN_SYSTEM_MASTER.md` | `docs/design/` | hash-eşit |
| `docs/safety/SAFETY_MASTER_SPEC.md` | `docs/safety/` | hash-eşit |
| `docs/operations/REPOSITORY_CLEANUP_TASK.md` | `docs/operations/` | hash-eşit |
| `docs/archive/old-editorial-prompts/README.md` | `docs/archive/old-editorial-prompts/` | hash-eşit |
| `docs/editorial/EDITORIAL_MASTER_SPEC.md` | (kopyalanmadı) | Mevcut `docs/editorial/` sürümüyle zaten birebir aynıydı |
| `README-KURULUM.md` | `docs/archive/history/canonical-specs-README-KURULUM.md` | Kurulum kaydı |

## 6. Eski talimat/rapor arşivi

| Eski yol | Yeni yol | Neden |
|---|---|---|
| kök `CLAUDE.md` (iki-otorite sürümü, git'te yoktu) | `docs/archive/old-claude-instructions/CLAUDE-kok-iki-otorite-2026-07-14.md` | Canonical CLAUDE ile değiştirilmeden önce korundu |
| `Archive/CLAUDE.md` (v1 RAG-base, HEAD ile hash-eşit) | `docs/archive/old-claude-instructions/CLAUDE-kok-v1-rag-base.md` | Tarihsel referans; ad değişikliği aktif talimat sanılmasını önler |
| `Archive/claude-code-editorial-master-setup/` | `docs/archive/old-editorial-setup/` | Eski editoryal kurulum paketi; içindeki `CLAUDE.md` → `CLAUDE-editorial-setup-eski.md` olarak yeniden adlandırıldı |
| `Editorial/03_RAPORLAR/03_RAPORLAR/*` (19 rapor + DEGISIKLIKLER) | `docs/archive/editorial-reports/` | Editoryal karar izi |
| `Archive/wellness-app-BUILD-2026-07-05.zip` | `docs/archive/build-snapshots/` | Tek build anlık görüntüsü; `.gitignore` deseni gereği Git'e girmez (disk arşivi) |

## 7. Kalıcı silmeler (yalnızca yeniden üretilebilir / hash-doğrulanmış yinelenenler)

| Silinen | Yeniden üretilebilirlik kanıtı |
|---|---|
| `Archive/node_modules/` (~8.7 MB) | `npm install` ile yeniden üretildi (doğrulama sırasında kökte 2 sn'de kuruldu ve `db:check` geçti) |
| `mobile/.expo/` | Expo yerel cache; `expo start` yeniden üretir |
| `Archive/wellness-app-BUILD-2026-07-05/` (açılmış klasör) | Zip bütünlük testi geçti; klasördeki 106 dosyanın TAMAMI zip'te mevcut (fark: 0) — zip korunuyor |
| `Editorial/02_CIKTI/02_CIKTI`, `03_RAPORLAR/03_RAPORLAR` iç içe kabuklar + boş `Editorial/`, `Archive/` | Zip-açma artefaktı; içerikleri §2, §6'da taşındı (0 dosya kaldı doğrulandı) |
| `Archive/.gitignore` | `HEAD:.gitignore` ile hash-eşit → `git show HEAD:.gitignore` ile üretilebilir |
| `wellness-app-canonical-specs/` paket klasörü | 8 dosyanın 8'i kurulan kopyalarla hash-eşit doğrulandıktan sonra kaldırıldı (README-KURULUM arşive alındı) |
| `docs/archive/old-editorial-setup/docs/editorial/EDITORIAL_MASTER_SPEC.md` | Aktif `docs/editorial/` sürümüyle hash-eşit yinelenen |

## 8. Dosya düzenlemeleri (taşıma dışı)

| Dosya | Değişiklik |
|---|---|
| `.gitignore` | `git restore` ile geri yüklendi + iki satır eklendi: `mobile/` (nested repo sınırı) ve `.expo/` |
| kök `CLAUDE.md` | Canonical PROJECT ENTRY POINT sürümüyle değiştirildi (§5) |

Mobile deposunda hiçbir dosya değiştirilmedi, taşınmadı, silinmedi (`git -C mobile status` temiz; `.expo` cache silme git'e görünmez).

## 9. KD-01 modül kaldırma (2026-07-14 — ayrıntı: `REMOVED_MODULES_REPORT.md`)

| Eski yol | Yeni yol | Neden | Doğrulama |
|---|---|---|---|
| `content/neurogames-v1.json` | `docs/archive/removed-modules/neurogames/neurogames-v1.json` | KD-01: Neurogames kapsam dışı; silinmedi, git mv ile arşivlendi | JSON parse ✓; DB'de seed kaydı yok; aktif ağaçta dosya referansı kalmadı |
| `content/bitki-kartlari-{pilot,parti1..3}.json` (4 dosya) | (aktif ağaçtan çıkarıldı — git geçmişinde) | DECISION_REQUIRED #1 Seçenek A: kart metni tek canonical `bitki-kartlari-master.json`'a tekilleşti | `seed:generate` 37/37 kart eşleşti; `db:check` ✓ |

## 10. ACG paketi yerleşimi (2026-07-18 — `acg-uygulama-paketi.zip`)

| Eski yol | Yeni yol | Neden | Doğrulama |
|---|---|---|---|
| paket `specs/acg-spec.md`, `specs/astro-engine-spec.md` | `specs/` | Aktif spec klasörüne yerleşim (ACG-UYGULAMA-NOTU §1) | acg-spec eski kopyayla hash-eşit; astro-engine-spec'te 2026-07-19'da başlık/giriş bloğu 15 Tem orijinaliyle geri yüklendi (rekonstrüksiyon notu düştü) → aktif dosya arşiv kopyasıyla hash-eşit |
| paket `ACG-UYGULAMA-NOTU.md` | kök | Geçici çalışma dosyası | — |
| kök `guncelleme-bloklari.md` | `docs/archive/acg-onceki-kopya-2026-07-15/` | Bloklar 2026-07-19'da uygulandı (A1/A3/A2→ADR §14 + satır işaretleri; B1 düşürüldü — A1 ile mükerrer; B2-B4 → PROJECT-CHECKPOINT; MapTiler+KVKK kısıtları ayrıca ADR §14) → görev bitti, arşive taşındı | arşivdeki kopyayla hash-eşitti (üzerine taşındı, tek kopya) |
| `added-specialties and new module astrocartography/` (untracked) | `docs/archive/acg-onceki-kopya-2026-07-15/` | Paket-öncesi kopya; aktif sürümler yukarıda — Governance §5 tek doğru kaynak | başlık restorasyonu sonrası 3 dosyanın 3'ü aktif/ilgili sürümlerle hash-eşit |
