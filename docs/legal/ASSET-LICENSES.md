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

### Stable Diffusion XL Base 1.0 (A0 kalibrasyon üretim modeli — KARAR VERİLDİ, 2026-07-24)
- **Model:** `stabilityai/stable-diffusion-xl-base-1.0` · dosya `sd_xl_base_1.0.safetensors` (~6.94 GB). (Opsiyonel: SDXL Refiner 1.0.)
- **Lisans (kaynaktan teyit — kayıt):** **CreativeML Open RAIL++-M** (26 Temmuz 2023; HF `LICENSE.md` doğrudan okundu, 2026-07-24). Ticari kullanım ve **üretilen görsellerin** ticari kullanımı serbesttir ("perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable" model hakkı; "Licensor claims no rights in the Output You generate using the Model"). Attachment A kullanım-tabanlı yasaklar geçerlidir (yasa ihlali, zarar, PII kötüye kullanımı, **medical advice generation** vb. — sonuncusu Safety §3 ile örtüşür). Model dağıtımında lisans metni eşlik etmelidir; downstream'e aktarılır.
- **Not:** Model kartı açıklamasındaki "intended for research purposes only" ibaresi boilerplate'tir; bağlayıcı olan LICENSE.md ticari hakkı verir.
- **Karar:** A0 (Papatya kalibrasyon) üretim modeli olarak SD1.5 yerine SDXL Base 1.0 seçildi (kalibrasyon kalite tavanı için; ürün sahibi kararı 2026-07-24). Reçete: `docs/design/asset-briefs/A0-papatya-brief.md`. Morfoloji çıpası = Köhler PD referansı (§1) üzerinden ControlNet.
- **Üretilen kalibrasyon çıktıları (2026-07-24):** Papatya ORTA kartı kilitlendi.
  - **assetId:** `plant-matricaria-chamomilla-editorial-01` · `aiGenerated: true` · `sourceStatus: ai-generated` · `morphologyVerified: true` · `colorAccuracy: verified`.
  - **Taban:** SDXL Base 1.0 (Open RAIL++-M) + Köhler PD referans (canny ControlNet). Kazanan **seed 666** · DPM++ 2M Karras · 30 step · CFG 6.5 · canny 0.25 · ORTA kademe · 1024×1280→800×1000 WebP.
  - **Tam reçete kaydı:** `docs/design/asset-briefs/A0-papatya-brief.md` (v3, kilitli). Prompt/negatif/token-mimarisi orada arşivli (10 §12 "kaynak prompt ve revizyon bilgisi arşivlenir").
  - **Telif:** çıktı telifi kaynağa tabidir (SDXL Open RAIL++-M ticari serbest + Köhler PD) → **temiz**.
  - **Durum:** çıktı dosyası (`r3-medium.webp`) + `metadata.json` çalışma klasöründe; final imza sonrası `assets/botanicals/papatya/` altına alınır (repoya henüz girmedi).
  - **Kalan 36 bitki:** aynı reçeteyle üretildikçe her biri için bu bölüme satır + 10 §9 metadata eklenir; tür-özel PD referansının kamu malı durumu ve T0 sınıfı üretimden önce teyit edilir.

### Batch-1 üretim satırları (12 asset, 2026-07-27/31)

Tümü: taban SDXL Base 1.0 (Open RAIL++-M, §4) · platform Replicate (§4c) · ControlNet
`edge_canny` · KarrasDPM · 30 step · CFG 6.5 · 1024×1280→800×1000 WebP · `aiGenerated: true` ·
`sourceStatus: ai-generated` · `morphologyVerified: true` · `colorAccuracy: verified` ·
`approvedBy: pending-final-signoff`. Referans plakalar §4b. Çıktı telifi taban model +
kaynak PD durumuna tabidir → **temiz**.

| assetId | Tür | cond / seed |
|---|---|---|
| `plant-foeniculum-vulgare-editorial-01` | *Foeniculum vulgare* | 0.25 / 666 |
| `plant-zingiber-officinale-editorial-01` | *Zingiber officinale* | 0.42 / 333 |
| `plant-taraxacum-officinale-editorial-01` | *Taraxacum officinale* | 0.25 / 666 |
| `plant-mentha-piperita-editorial-01` | *Mentha piperita* | 0.25 / 666 |
| `plant-rosmarinus-officinalis-editorial-01` | *Rosmarinus officinalis* | 0.42 / 666 |
| `plant-melissa-officinalis-editorial-01` | *Melissa officinalis* | 0.38 / 666 |
| `plant-lavandula-angustifolia-editorial-01` | *Lavandula angustifolia* | 0.25 / 666 |
| `plant-salvia-officinalis-editorial-01` | *Salvia officinalis* | 0.38 / 666 |
| `plant-calendula-officinalis-editorial-01` | *Calendula officinalis* | 0.40 / 666 |
| `plant-urtica-dioica-editorial-01` | *Urtica dioica* | 0.25 / 666 |
| `plant-equisetum-arvense-editorial-01` | *Equisetum arvense* | 0.32 / 666 |
| `plant-hypericum-perforatum-editorial-01` | *Hypericum perforatum* | 0.25 / 666 |

- **Prompt/revizyon arşivi (10 §12):** A0 brief §12 + üretim script'inin `OVERRIDES` bloğu.
- **Durum:** dosyalar + `metadata.json`'lar çalışma klasöründe (`assets-staging/<herb_id>/`);
  **repoya girmedi.** Ürün sahibi final imzası + Supabase Storage yüklemesi sonrası
  `approvedBy` güncellenir.
- **Zencefil şerhi:** kadraj ürün kararıyla toprak üstü forma çevrildi (A0 brief §12.1c);
  `plantPartsShown` rizom içermez.

### Üretim araçları (uygulamayla DAĞITILMAZ — yalnız lokal araç)
- **ComfyUI** portable v0.28.0 (GPL-3.0 lisanslı araç) — lokalde kullanıldı, repoya ve uygulamaya girmedi.
- **Real-ESRGAN** `realesrgan-ncnn-vulkan` 20220424 (xinntao/Real-ESRGAN release; BSD-3-Clause lisanslı araç), model `realesrgan-x4plus` — lokalde kullanıldı, repoya ve uygulamaya girmedi. Araç lisansları yalnız araç dağıtımını bağlar; ürettiği upscale çıktının telif durumu kaynak görüntüye tabidir (Köhler = PD).

## 4b · Batch-1 bitki referansları — PD plakalar (2026-07-27/28)

Batch-1'de (12 bitki) morfoloji çıpası olarak kullanılan tür-özel PD plakalar. Köhler
plakası bulunamayan türlerde alternatif PD serisi kullanıldı; her satırın kamu malı
durumu Commons `extmetadata` üzerinden teyit edildi.

| Bitki | Tür | Kaynak | Lisans |
|---|---|---|---|
| rezene · zencefil · karahindiba · nane · biberiye · melisa · lavanta · adaçayı | *Foeniculum vulgare* · *Zingiber officinale* · *Taraxacum officinale* · *Mentha piperita* · *Rosmarinus officinalis* · *Melissa officinalis* · *Lavandula angustifolia* · *Salvia officinalis* | Köhler's Medizinal-Pflanzen plakaları (Commons) | Public domain (PD-old) |
| aynısefa | *Calendula officinalis* | Köhler's Medizinal-Pflanzen **cilt 3, plaka 61** (M. Vogtherr, 1898) — yüksek çözünürlüklü sürüm `Calendula_officinalis_-_001x.jpg` (2785×4171). Adlandırılmış düşük çözünürlüklü sürümün (414×586) yerine geçti. | Public domain + CC0 Public Domain Mark 1.0 |
| ısırgan | *Urtica dioica* | Thomé, *Flora von Deutschland* — `Illustration Urtica dioica0.jpg` | Public domain |
| sarı kantaron | *Hypericum perforatum* | *Medical Botany* (1790) — `Hypericum perforatum-Medical Botany-1790-1-0068-10.png` | Public domain |
| **atkuyruğu** | *Equisetum arvense* | **KAYNAK DEĞİŞTİ (2026-07-28):** Mentz & Ostenfeld, *Billeder af nordens flora* cilt 2 (1917), "clean" sürüm (1768×2924). Önceki `Equisetum arvense Lindman DESC.jpeg` **bırakıldı** — açıklama kutuları ve ok çizgileri içeren şema olduğu için ControlNet canny haritasını bozuyordu (A0 brief §12.1/K2). | Public domain — "no known copyright restrictions" (NYBG Mertz Library / Internet Archive → Flickr Commons); yazarlar 1944 ve 1931'de vefat etti |

**Zencefil kadraj değişikliği (2026-07-31):** Kaynak plaka **değişmedi** (Köhler 172); yalnız
kırpım bandı rizomdan **toprak üstü forma** alındı. Gerekçe A0 brief §12.1c.

**Değerlendirildi, KULLANILMADI** (ileride aynı arama tekrarlanmasın diye kayıt — bu iki dosya
hiçbir üretilen asset'te kullanılmamıştır, telif yükümlülüğü doğurmaz):

| Dosya | Lisans | Neden kullanılmadı |
|---|---|---|
| `File:Fresh ginger (20240131).jpg` (Commons, 3000×2000+, Fumikas Sagisavas) | **CC0 1.0** — atıf gerekmez | Rizom denemelerinde referans olarak denendi; fotoğraf bir market **yığını** olduğundan canny'de tek özne ayrışmadı, üç seed de reddedildi (brief §12.1c tur 5) |
| `File:Ginger rhizomes.jpg` (Commons, 3548×2773, Judethedeus) | **CC0 1.0** — atıf gerekmez | Ön-kontrol (c) maddesinde elendi: arka planda markalı karton kutu yazıları var, canny'yi bozar |

- **Kullanım biçimi:** Plakalar yalnız **ControlNet morfoloji referansı** olarak kullanılır; üretilen kartlara plaka pikseli kopyalanmaz. Çıktı telifi §4'teki SDXL Open RAIL++-M + kaynak PD durumuna tabidir → temiz.
- **Ön-kontrol yükümlülüğü:** Yeni bitki eklenirken plakanın türü, kadrajı, açıklama-metni durumu ve renk uyumu üretimden önce doğrulanır (A0 brief §12.2, `precheck.py` kapısı).

## 4c · Replicate (A0 üretim platformu — fal kilidi nedeniyle, 2026-07-27)

- **Platform:** Replicate · model `fofr/sdxl-multi-controlnet-lora` (sürüm çalışma anında çözülür ve loglanır).
- **Taban model:** SDXL Base 1.0 → lisans §4'teki **Open RAIL++-M** kaydına tabidir (değişmedi).
- **ControlNet ağırlığı:** `diffusers/controlnet-canny-sdxl-1.0` (fal'daki xinsir controlnet-union'ın yerine). Model kodu Apache-2.0/OpenRAIL türevi araç bileşenidir; **uygulamayla dağıtılmaz**, yalnız üretim anında bulutta çalışır.
- **Çıktı telifi:** Taban model lisansı + kaynak PD plaka durumuna tabidir → temiz. Görünmez watermark kapalı (`apply_watermark: false`).
- **fal.ai:** hesap kilidi (bakiye) nedeniyle kullanılamadı; script'leri saklandı, kilit açılırsa geri dönülebilir. Reçete kilitleri (seed 666, DPM++ 2M Karras eşleniği KarrasDPM, 30 step, CFG 6.5, 1024×1280→800×1000) değişmedi.

## 5 · Moodboard referans görselleri (LİSANSSIZ — yalnız ilham)

- `docs/archive/design-tarihce/design-prova/wellness-appdesign-provamoodboard/` altındaki 27 görsel (Pinterest/Etsy vb. kaynaklı) yalnız iç ilham/moodboard amaçlıdır; **lisansları yoktur ve hiçbir üründe, pazarlamada veya dağıtımda KULLANILAMAZ.**

## 6 · Mevcut ürün durumu (2026-07-21 audit)

- `ASSET_GAP_AND_VERIFICATION_REPORT.md` §5: mevcut üründe (mobile) lisans gerektiren görsel yok (template hariç). Production asset pipeline'ı kurulurken her asset 10 §9 şemasıyla (`sourceStatus`, `licenseReference`, `aiGenerated`…) kaydedilir ve bu dosyaya satır eklenir.

**END — bu dosya lansman telif kaydıdır; güncellenerek yaşar, arşive gitmez.**
