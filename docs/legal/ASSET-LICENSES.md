# ASSET-LICENSES.md — Görsel Kaynak ve Lisans Kayıtları (LANSMAN TELİF DOSYASI)

**Belge türü:** Kalıcı hukuki kayıt — ASLA arşive taşınmaz
**Tarih:** 2026-07-22 · **Kaynak kayıtlar:** `design-prova/PROVA-NOTLAR.md` §1–2b (arşiv: `docs/archive/design-tarihce/design-prova/`), `docs/design/audit/ASSET_GAP_AND_VERIFICATION_REPORT.md` §5, `docs/design/03_TYPOGRAPHY_SYSTEM.md` §21.3, `docs/design/10_ASSET_PIPELINE_AND_NAMING.md` §9

> Bu dosya, üründe ve tasarım sürecinde kullanılan üçüncü taraf görsel/font/AI kaynaklarının telif durumunu tek noktada toplar. Yeni asset eklendiğinde kayıt buraya işlenir (10 §9 metadata şemasıyla birlikte). "Lisans kaydı olmadan asset" yasaktır (10 §12).

## 1 · Köhler botanik gravürü

- **Eser:** *Matricaria recutita* (= *Matricaria chamomilla*, papatya sinonimi), Köhler's Medizinal-Pflanzen, plaka 091
- **Sanatçı:** Franz Eugen Köhler (Walther Müller çizimi), 1897
- **Kaynak sayfa:** https://commons.wikimedia.org/wiki/File:Matricaria_recutita_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-091.jpg
- **Dosya URL:** https://upload.wikimedia.org/wikipedia/commons/c/c7/Matricaria_recutita_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-091.jpg
- **Lisans:** Public domain (PD-old; Commons API `extmetadata.LicenseShortName = "Public domain"`, 2026-07-19'da teyit edildi)
- **Yerel kopyalar (arşivde):** `docs/archive/design-tarihce/design-prova/assets/kohler-matricaria.jpg` (orijinal, 1767×2341, değiştirilmedi) · `kohler-detay-ham.png` (512×512 kırpım) · `kohler-detay-esrgan.png` (4× upscale)
- **Not:** Duotone işleme prova sırasında çalışma anında SVG filtresiyle yapıldı; dosyalara piksel işlenmedi. Production kullanımı için 10 §9 metadata kaydı ayrıca açılır.

## 2 · Health Icons (ikon seti)

- **Set:** Health Icons — https://healthicons.org · repo: https://github.com/resolvetosavelives/healthicons
- **Lisans:** CC0 1.0 (public domain)
- **Karar kaydı:** MIT lisanslı setler (Feather/Lucide) prova sırasında "yalnız public-domain" kuralı gereği kullanılmadı. (Not: bu kural yalnız prova içindi; production kararı aşağıda.)

## 2b · Lucide (production UI ikon ailesi — KARAR VERİLDİ, 2026-07-22)

- **Paket:** `lucide-react-native` 1.25.0 — https://lucide.dev · repo: https://github.com/lucide-icons/lucide
- **Lisans:** **ISC** (© Lucide Contributors; Feather Icons türevi — orijinal Feather kısmı MIT, © Cole Bemis) — ticari kullanım ve gömme serbesttir; lisans bildirimi `mobile/THIRD_PARTY_NOTICES.md`'de tutulur.
- **Karar:** 05 §10 kanonik önerisi ürün sahibi onayıyla kabul edildi (Phase 2 bağımlılık turu, 2026-07-22). Tek UI ikon kütüphanesi Lucide'dir; astro glyphleri özel SVG setidir (Lucide'den gelmez). Kullanım Phase 3'te başlar.
- **Render altyapısı:** `react-native-svg` 15.15.4 — MIT (© Software Mansion); kod kütüphanesidir, görsel asset değildir; kaydı `THIRD_PARTY_NOTICES.md`'de.
- **İndirilen 8 outline SVG (arşivde):** heart · magnifying-glass · referral · info · ui-settings · ui-user_profile · calendar · star-medium → `docs/archive/design-tarihce/design-prova/assets/icons/`

## 3 · Google Fonts (tipografi)

- **Prova display adayları:** Fraunces · Playfair Display · Caveat · Lora — hepsi **SIL Open Font License (OFL)**; prova sayfasında `<link>` (CDN) ile yüklendi, repoya font dosyası girmedi (kullanıcı onaylı tek CDN istisnası).
- **Kanonik tipografi (03 + Phase 1):** Fraunces (display) · Lora (reading) · Caveat (quote) · Playfair Display (ceremonial) · system sans (ui); `Inter` mevcut kod uyumluluğu için legacy.
- **Yükümlülük (03 §21.3):** Fontlar Expo varlığı olarak paketlenirken OFL lisans metinleri `THIRD_PARTY_NOTICES.md` içinde tutulur; font dosyaları kullanıcıya ayrıca dağıtılmaz; kullanılmayan weight bundle'a girmez.

## 4 · AI model ve araç lisansları

### Stable Diffusion v1.5 (stil testi)
- **Model:** `v1-5-pruned-emaonly-fp16.safetensors` (Comfy-Org/stable-diffusion-v1-5-archive aynası; orijinal: RunwayML SD v1.5)
- **Lisans (kilitli kural — kayıt):** **CreativeML OpenRAIL-M** — ticari kullanım ve üretilen görsellerin ticari kullanımı serbesttir; lisansın kullanım kısıtları (Attachment A, zararlı kullanım yasakları) geçerlidir; model dağıtımında lisans metni eşlik etmelidir. Uygulama içi NİHAİ üretim hattı kurulurken model+lisans bu kayıtla teyit edilecek (illustrasyon-uretim-spec kural 3).
- **Çıktı durumu:** `sd-papatya-1..3.png` stil testleri **production'a giremez** (10 §12 — morfoloji doğrulanmadı; #2 yaprakları hatalı, kayıtlı). Arşivde: `docs/archive/design-tarihce/design-prova/assets/`.

### Üretim araçları (uygulamayla DAĞITILMAZ — yalnız lokal araç)
- **ComfyUI** portable v0.28.0 (GPL-3.0 lisanslı araç) — lokalde kullanıldı, repoya ve uygulamaya girmedi.
- **Real-ESRGAN** `realesrgan-ncnn-vulkan` 20220424 (xinntao/Real-ESRGAN release; BSD-3-Clause lisanslı araç), model `realesrgan-x4plus` — lokalde kullanıldı, repoya ve uygulamaya girmedi. Araç lisansları yalnız araç dağıtımını bağlar; ürettiği upscale çıktının telif durumu kaynak görüntüye tabidir (Köhler = PD).

## 5 · Moodboard referans görselleri (LİSANSSIZ — yalnız ilham)

- `docs/archive/design-tarihce/design-prova/wellness-appdesign-provamoodboard/` altındaki 27 görsel (Pinterest/Etsy vb. kaynaklı) yalnız iç ilham/moodboard amaçlıdır; **lisansları yoktur ve hiçbir üründe, pazarlamada veya dağıtımda KULLANILAMAZ.**

## 6 · Mevcut ürün durumu (2026-07-21 audit)

- `ASSET_GAP_AND_VERIFICATION_REPORT.md` §5: mevcut üründe (mobile) lisans gerektiren görsel yok (template hariç). Production asset pipeline'ı kurulurken her asset 10 §9 şemasıyla (`sourceStatus`, `licenseReference`, `aiGenerated`…) kaydedilir ve bu dosyaya satır eklenir.

**END — bu dosya lansman telif kaydıdır; güncellenerek yaşar, arşive gitmez.**
