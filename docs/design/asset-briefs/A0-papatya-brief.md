# A0 — PAPATYA ÜRETİM REÇETESİ (KİLİTLİ · v3)

**Faz:** Asset Production A0 — Kalibrasyon (kod fazlarından bağımsız paralel iş kolu; Phase 3/4 sırasını değiştirmez)
**Kapsam:** Papatya için devredilebilir üretim reçetesi + program envanteri + inceleme akışı
**Durum:** ✅ **KİLİTLİ** — kazanan reçete + ORTA kademe onaylandı. Üretim çıktıları çalışma klasöründe; **repoya girmedi, commit YOK.**
**Tarih:** 2026-07-24 · **Revizyon:** v3 (kademe=ORTA kilitlendi; kazanan seed 666; token mimarisi; envanter + inceleme akışı)
**Aktif otorite:** `06_BOTANICAL_AND_CELESTIAL_ART_DIRECTION` + `10_ASSET_PIPELINE_AND_NAMING` (15 kilitleri altında) · renk: `02_COLOR_AND_GRADIENT_TOKENS` · lisans: `docs/legal/ASSET-LICENSES.md`

---

## 0 · Kararlar ve doğrulamalar

### 0.1 Kullanıcı kararları
1. **Model:** SDXL Base 1.0 (doğrulandı, §0.2). Bulut yürütme (§0.3), platform **fal.ai** (§0.4).
2. **Dreamy tavanı:** 06 **gevşetilmedi**; kademeli üretildi, **kart yüzü için ORTA kademe** seçildi (§2, §9).
3. **Kazanan seed:** kalibrasyonda 6 aday test edildi → **seed 666** kilitlendi (§1.5).

### 0.2 SDXL lisansı (kaynaktan teyit)
- **Model:** `stabilityai/stable-diffusion-xl-base-1.0` · `sd_xl_base_1.0.safetensors`.
- **Lisans:** **CreativeML Open RAIL++-M** (26 Tem 2023; HF LICENSE.md okundu). Ticari kullanım + çıktı serbest ("Licensor claims no rights in the Output"). Attachment A yasakları (medical advice generation dahil — Safety §3 ile örtüşür). → ASSET-LICENSES §4.

### 0.3 Donanım + yürütme
- Yerel 6GB VRAM: SDXL sınırda (fp16+lowvram+tiled VAE, OOM riski). **Karar: BULUT.**
- Maliyet: ~$0.0023–0.006/görsel (fal.ai/Replicate).

### 0.4 Platform: fal.ai `fal-ai/sdxl-controlnet-union`
- ⚠ Bu endpoint **"lineart" sunmuyor**; tipler: canny/depth/normal/openpose/segmentation/teed. Köhler zaten gravür/çizgi → **canny** kullanıldı (morfoloji kilidi). teed = softedge alternatifi.
- Script: `scratchpad/A0-papatya-calibration/generate.py` (tek komut; `.env`'den FAL_KEY, loglanmaz; 3 denemeli ağ-hatası retry'si var).

### 0.5 Kalibrasyon geçmişi (izlenebilirlik)
- **Tur 1 (canny 0.40, atmosfer prompt içinde):** 6/6 RED — dreamy indigo-mor atmosfer taca sızdı, çiçek MAVİ çıktı. Ders → renk kilidi.
- **Tur 2 (atmosfer≈0, KONU başa, renk vurgulu, canny 0.50):** doğru papatya. **Kazanan r2-666** (kar beyazı taç + sarı konik içi-boş merkez + tüysü yaprak).
- **Tur 3 (3 kademe dreamy):** ilk 3 deneme başarısız — kademeler birebir aynı çıktı. Kök neden = **CLIP 77-token kesintisi** (atmosfer uzun prompt'un sonuna eklenince kesiliyordu). Düzeltme: atmosfer **başa**, çiçek tanımı **kısa** + canny 0.25 → kademeler farklılaştı, renk kilidi tuttu. **ORTA seçildi.**

---

## 1 · KİLİTLİ üretim reçetesi

### 1.1 Model + ControlNet
- **Model:** SDXL Base 1.0 · endpoint `fal-ai/sdxl-controlnet-union`.
- **ControlNet:** `canny`, referans = Köhler plaka 091 (`ref/kohler-detay-esrgan.png`, PD; ASSET-LICENSES §1), `canny_preprocess: true`.
- **conditioning_scale:** doğruluk/kart tabanı **0.50**; atmosfer kademeleri **0.25** (arka planın nefes alması için — 0.50 tüm kareyi kilitliyordu).

### 1.2 Sampler / parametreler (KİLİT)
| Parametre | Değer |
|---|---|
| Sampler | **DPM++ 2M Karras** |
| Steps | **30** |
| CFG | **6.5** |
| Clip skip | 1 |
| **Seed (kazanan)** | **666** |
| Çözünürlük | **1024 × 1280** (4:5) → Lanczos **800 × 1000** |
| Format/bütçe | WebP q≈82, ≤220 KB (kart) |

### 1.3 ⚠ Prompt mimarisi (KRİTİK — token kuralı)
SDXL/CLIP metin kodlayıcısı **~77 token** ile sınırlıdır. Atmosfer ifadeleri prompt'un **BAŞINA** yazılır, çiçek kimliği **kısa** tutulur; **atmosfer asla uzun bir konu tanımının sonuna eklenmez** (kesilir → görülmez → kademeler oluşmaz). Bu, Tur 3'ün ilk üç denemesini bozan hataydı.

### 1.4 KİLİTLİ prompt'lar
**Kart yüzü (ORTA — production kartı; r3-medium):**
```
dreamy twilight mood, soft blue-grey evening glow and gentle haze filling the
background, soft moonlit rim-light on petal edges; a single fresh chamomile
(Matricaria chamomilla), white petals, golden-yellow domed hollow centre, fresh
green feathery leaves, sharp focus, vertical 4:5
```
**Negatif (çiçek-hedefli renk kilidi — arka plan atmosferini boğmaz):**
```
blue petals, indigo petals, violet petals, purple petals, yellow-green petals,
recoloured flower petals, chamomile petals tinted blue, chamomile petals tinted
violet, coloured haze on the flower, dried flower, withered, dead flower, pressed
flower, flat solid daisy centre, oxeye daisy, Leucanthemum, Bellis, common daisy,
broad toothed lobed leaves, dense nebula over the plant, cosmic overlay obscuring
the flower, cartoon, kawaii, fairy, fairytale children's-book style, crystals,
potion bottles, glitter, confetti, text, watermark, signature, logo, human hands,
harsh geometry, stock-corporate look, low detail, deformed petals, plastic, 3d render
```

### 1.5 Seed kararı
6 aday (111·222·333·444·555·666) test edildi. **666 kazandı** (en net kar beyazı taç + sarı konik merkez + en iyi tüysü yaprak + kompozisyon). Kilitlendi.

### 1.6 KRİTİK KURAL (her dozda geçerli)
> **Atmosfer hiçbir dozda çiçeğin rengini değiştiremez. Mavi / indigo / mor taç = OTOMATİK RED.** Renk kilidi negatif prompt'ta çiçek-hedefli olarak zorlanır; arka plandaki indigo-mor/altın serbesttir ama çiçeğe dokunamaz.

---

## 2 · Dreamy doz — ORTA (kilitli, kart yüzü için)

**ORTA = altın-saat çayırı:** arka planda yumuşak bokeh + ufukta altın ışıltı + soğuk-yeşil pus; çiçek keskin, tam gerçek renk. Atmosfer belirgin ama kontrollü; 06 üst sınırının altında, editoryal-dreamy dengesi. Tavan testi: "ay ışığında/çayırda bir papatya" → GEÇER.

06 tavan kuralı (kademeler için referans): dreamy öğeler arka plan + kenar ışığında; çiçek ağırlığı ≥%55, keskin, gerçek renk. Mor yalnız `celestial.indigo #59638F → violet #7E6D9A` uzak arka planda; altın yalnız `metal.gold #CBA75D` taç kenarında.

---

## 3 · Botanik doğruluk kilidi (Köhler 091 ile teyitli)
Papatya → **Matricaria chamomilla**, ASTERACEAE, bölüm: Çiçek. Öküzgözü/Bellis DEĞİL.
1. Kar beyazı ışın çiçekleri (hafif reflexed).
2. **İçi boş, konik, yükselmiş sarı disk** (belirleyici — düz merkez = RED).
3. İnce, ipliksi, tüysü (bi-tripinnat) yeşil yaprak (geniş/dişli = RED).
4. İnce dallı yeşil gövde. 5. Gerçek renk beyaz/sarı/yeşil, recolor yok.
**Köhler kıyas adımı** (10 §8): üretilen çiçek başı + yaprak, `ref/kohler-matricaria.jpg` ile yan yana kıyaslanır.

---

## 4 · ORTA kartı — QA sonucu (2026-07-24)
Production kartı = `r3-medium.webp` (ORTA). Kabul kriterleri (§5):
- ✅ Tür tanınır: beyaz ışın + yükselmiş sarı konik disk + tüysü yaprak = M. chamomilla.
- ✅ Gerçek renk: beyaz/sarı/yeşil, recolor yok (arka plan atmosferi çiçeğe sızmadı).
- ✅ Dreamy doz: ORTA hedefinde, çiçek baskın + keskin, atmosfer arka planda.
- ✅ Oran/boyut: 4:5, 800×1000, WebP 17 KB ≤220 KB.
- ✅ §14 taraması temiz: peri/kristal/iksir/subject-üstü-nebula/generik mor çiçek yok.
- ✅ Kompozisyon: çiçek üst-orta, altta yumuşak nefes alanı → kart metni için uygun.
- ✅ Köhler kıyası geçti. → **PASS.**

---

## 5 · Metadata + naming
**Dosya adı (10 §4):** `plant-matricaria-chamomilla-editorial-01.webp` · paket: `assets/botanicals/papatya/`.
**metadata.json** (çalışma klasöründe yazıldı; 10 §9 + 06 §13):
```json
{
  "assetId": "plant-matricaria-chamomilla-editorial-01",
  "domain": "botanical", "entityId": "papatya",
  "assetType": "editorial-botanical",
  "scientificName": "Matricaria chamomilla", "commonNameTr": "Papatya",
  "family": "Asteraceae",
  "plantPartsShown": ["flower", "leaf", "stem"],
  "morphologyVerified": true, "colorAccuracy": "verified",
  "toxicityContext": "none",
  "sourceStatus": "ai-generated",
  "licenseReference": "ASSET-LICENSES.md §4 (SDXL Base 1.0 / Open RAIL++-M) + §1 (Köhler PD)",
  "aiGenerated": true, "symbolicEnhancement": false,
  "recipe": { "model": "sdxl-base-1.0", "endpoint": "fal-ai/sdxl-controlnet-union",
    "controlnet": "canny/kohler", "conditioningScale": 0.25, "sampler": "DPMPP_2M_Karras",
    "steps": 30, "cfg": 6.5, "seed": 666, "stage": "ORTA", "size": "1024x1280->800x1000" },
  "createdAt": "2026-07-24", "approvedBy": "pending-final-signoff"
}
```
ASSET-LICENSES §4'e üretim satırı eklendi.

---

## 6 · Devir notu (başka model/oturum çalıştırırsa)

**BİREBİR SADIK KALINACAK (kilit):**
- Model: **SDXL Base 1.0** · endpoint `fal-ai/sdxl-controlnet-union`.
- Sampler **DPM++ 2M Karras** · steps **30** · CFG **6.5** · clip skip **1**.
- **Seed 666** (kazanan; değişirse yeniden QA + yeni seed belgele).
- ControlNet **canny** + Köhler referansı; weight **kart 0.50 / atmosfer kademe 0.25**.
- Çözünürlük **1024×1280 → 800×1000**, WebP q≈82 ≤220 KB.
- **Prompt token mimarisi:** atmosfer **başta**, çiçek kimliği **kısa**, toplam ≤~77 token. Atmosferi uzun konu tanımının sonuna EKLEME (kesilir).
- **Renk kilidi negatifi** (§1.4) çiçek-hedefli — değiştirme.
- Tür bağı **Matricaria chamomilla**; palet çıpaları `celestial.indigo/violet/silver` + `metal.gold`.

**DEĞİŞTİRİLEBİLİR (kompozisyon varyasyonu):**
Tomurcuk sayısı/açı · çiçek başı rotasyonu · arka plan bokeh/yıldız yoğunluğu (opaklık tavanı + §14 içinde) · 06 §11 crop.

**YENİDEN KALİBRASYON ŞART:** taban model değişirse (FLUX vb.) → yeni lisans kaydı + tam yeniden kalibrasyon + QA.

---

## 7 · Güvenlik — T0 dışlama kapısı
Safety §3: T0/EXCLUDE bitkiler ana koleksiyona girmez; **asset tarafında da geçerli** (T0 bitkiye "sevimli wellness" görseli üretilmez, 06 §5/§14). master.json = ana koleksiyon → içindeki 37 bitki **zaten T0-sonrası** (app_safe); yine de her bitki üretimden önce T0 sınıfı **teyit edilir** (gap raporu §9: yüksek-riskli toksikler `symbolicOnly` işaretiyle ayrı tutulur). **Papatya = app_safe** → geçer.

---

## 8 · Kademe → modül eşlemesi (KİLİT)
Aynı kazanan reçete + seed 666; yalnız atmosfer kademesi değişir:

| Modül kullanımı | Kademe | conditioning | Not |
|---|---|---|---|
| **Kart yüzü** (plant card, 4:5) | **ORTA** (r3-medium) | 0.25 | Production standardı; §1.4 prompt |
| **Hero / gece paneli** (immersive) | **TAVAN** (r3-ceiling) | 0.25 | ⚠ bokeh **seyreltilir**: prompt'a "sparse faint stars, restrained few soft lights" + negatife "dense bokeh orbs, swarm of lights, fireflies". §14 peri/ışık-patlaması sınırını aşma. |
| **Liste küçük görseli** (thumbnail 1:1) | **HAFİF** (r3-light) | 0.25 | Sade ivory zemin; küçük boyutta okunur kalır. Crop-türetme de mümkün (kod). |

Kademe prompt'ları (başta atmosfer, §1.3 kuralı):
- **HAFİF:** `soft pale ivory background, gentle warm daylight, faint background haze; a single fresh chamomile (Matricaria chamomilla), white petals, golden-yellow domed hollow centre, fresh green feathery leaves, sharp botanical focus, vertical 4:5`
- **ORTA:** §1.4 (kilit).
- **TAVAN:** `dreamy indigo and violet night sky in the background with faint scattered stars and a soft silver glow, warm gold rim-light tracing the white petal edges; a single fresh chamomile (Matricaria chamomilla), pure white petals, golden-yellow domed hollow centre, fresh green feathery leaves, sharp focus, vertical 4:5` — **+ bokeh seyreltme** (yukarıdaki not).

---

## 9 · Üretim envanteri (uygulama kapsamı)

> Firm = kanon-temelli kesin sayı · Tahmin = ürün sahibi teyidi gerekir (ekran envanteri kanonlarda tam sayılmamış).

### 9.1 Botanik (bitki başına, **37 bitki** — master.json gerçek sayısı)
| Varlık | Kademe | Adet | Durum |
|---|---|---|---|
| Kart yüzü (editorial, 4:5) | ORTA | **37** | FIRM — üretilecek |
| Liste küçük görsel (1:1) | HAFİF | 37 | Öneri: karttan **crop-türetme (kod, 0 üretim)**; istenirse üretim +37 |
| Yaprak-detay (leaf-detail) | — | 37 | Opsiyonel; crop-türetme mümkün |
| Silüet (silhouette.svg) | — | 37 | **Kod-türetme** (illüstrasyon-spec §4), üretim DEĞİL |
| Bilimsel referans (scientific-reference) | — | 37 | PD gravür (Köhler/herbaria) **kaynak**, AI üretim değil; PD kapsam taraması gerekir (gap §2) |

**Botanik firm üretim: 37 kart yüzü.** (Papatya bitti → kalan **36**.)

### 9.2 Modül sahneleri (TAHMİN — ürün sahibi teyidi)
| Kategori | Kademe | Tahmini adet | Kapsam (02 §10 / 10 §2) |
|---|---|---|---|
| Hero (immersive) | TAVAN | ~9 | Home·Garden·Plants·Astrology·Skin·Cycle·Journal·Rituals(±) |
| Boş-durum (empty-state) | HAFİF | ~7 | Journal·Mood geçmiş·Garden·Plants·Cycle·Rituals·Skin |
| Ambient / panel sahne | TAVAN | ~11 | Celestial gece paneli/natal-transit zemin (~3) · Garden gün-döngüsü (dawn/day/dusk/night, 4) · Ritual kapakları (sleep/grounding/energizing/reflection, 4) |

> Not: Atmosfer gradyanları/scrim'ler (02 §13) **kod/gradyan**, üretim değil — sayıma dahil değil.

### 9.3 Glyph / sembol — ✅ BİTTİ (ayrı işaretli)
| Set | Adet | Durum |
|---|---|---|
| Gezegen SVG | 10 | ✅ P2'de merge |
| Zodyak SVG | 12 | ✅ P2'de merge |
| Ay fazı SVG | 8 | ✅ P2'de merge |
| **Toplam glyph** | **30** | ✅ **BİTTİ — bu envanterin üretim sayımına DAHİL DEĞİL** |

### 9.4 Toplam üretim adedi + maliyet
| | Nihai üretilen asset | Not |
|---|---|---|
| Botanik (firm) | 37 kart (Papatya dahil; kalan 36) | thumbnail/leaf türetilirse +0 |
| Modül sahneleri (tahmin) | ~27 (9 hero + 7 boş + 11 ambient) | ürün sahibi teyidi |
| **Önerilen V1 nihai set** | **~64 asset** | glyph'ler hariç (bitti) |
| Maksimal (thumbnail+leaf üretilirse) | ~138 | önerilmez; türetme yeterli |

**Üretim denemeleri (nihai ≠ deneme):** kilitli reçeteyle asset başına birkaç aday seed + olası tekrar.
- ~64 nihai × ort. ~6 deneme ≈ **~380 üretim çağrısı.**
- Maliyet: ~380 × ~$0.005 ≈ **~$2** (yoğun iterasyonla en kötü ~$5). Papatya kalibrasyonu ~24 çağrı ≈ 15 sent harcadı (kaydedildi).

### 9.5 İnceleyeceğin kontak sayfası sayısı
- Nihai ~64 asset, **12'lik** kontak sayfaları → tümü gösterilse ~5-6 sayfa.
- Ama otomatik QA elemesiyle (§10) **yalnız elenenler** sana gelir → gerçekçi **~2-4 sayfa** (reddedilme oranına bağlı; kilitli reçeteyle düşük beklenir).

---

## 10 · İnceleme akışı (otomatik QA + insan onayı)

**Amaç:** senin zamanını yalnız sorunlu çıktılara ayırmak.

1. **Üretim:** her asset için 12'lik parti (kilitli reçete + aday seed'ler).
2. **Otomatik QA (insan yok) — programatik geçit:**
   - Format = WebP · oran = 4:5 (±1px) · boyut ≤ bütçe (thumbnail 120 / kart 220 / hero 500 KB).
   - Çözünürlük hedefi tutuyor.
   - **Görsel kontrol (otomatik):** çiçek var mı · taç mavi/mor DEĞİL (renk kilidi) · tek konu · tür morfolojisi (konik merkez + tüysü yaprak) · §14 kaba tarama.
3. **Eleme mantığı:**
   - QA **GEÇTİ + yüksek güven** → asset sessizce ilerler, **sana gelmez.**
   - QA **ELENDİ veya düşük güven** → o parti/asset bir **12'lik kontak sayfasına** toplanır, onayına sunulur.
4. **İnsan onayı:** yalnız elenen/sınırdaki adaylar. Sen seçer/redderdersin; red → reçete ince-ayar veya yeni seed.
5. **Kabul → yayın:** onaylı asset metadata + ASSET-LICENSES satırıyla mühürlenir, **ancak o zaman repoya** (assets/ ağacı) alınır.

Renk kilidi (§1.6) otomatik QA'nın **sert** kuralıdır: mavi/mor taç tespitinde asset otomatik elenir.

---

## 12 · Yaygın hatalar + önlem (Batch-1 dersleri, 2026-07-28)

> Batch-1'de (12 bitki) **6 kart revize** oldu. Nedenler tek bir kategoriye ait değildi;
> hepsini "reçete ayarı" sanmak yanlış yeri onarmak olurdu. Kök nedenler dört başlıkta
> toplanır. Yeni bitkilerde önce **hangi kategori** olduğu belirlenir, sonra düzeltilir.

### 12.1 Kök-neden kategorileri

| # | Kategori | Belirti | Doğru düzeltme | Batch-1 vakası |
|---|---|---|---|---|
| K1 | **Kırpım** — teşhis edici özellik kadraj dışında | Tür tanınmıyor; model "makul ama yanlış" bir bitki üretiyor | Kırpımı yeniden çerçevele; özelliği kadraja al | **zencefil** (rizom kadraj dışıydı) · **aynısefa** (çiçek başları kenarda kesik, kadraja yaprak hâkim) |
| K2 | **Kaynak** — plaka yanlış tür / şema / açıklamalı | Çıktıda anlamsız tekrar eden yapılar, tuhaf geometriler | Kaynağı değiştir; **temiz** PD plaka bul, lisansı kaydet | **atkuyruğu** (Lindman *DESC* şeması: metin kutuları + ok çizgileri canny'ye kenar olarak girdi) |
| K3 | **Model sapması** — referans doğru, model önyargısı bastırıyor | Doğru tür ama oranlar/vurgu kayıyor (çiçek büyüyor, yaprak yumuşuyor) | `conditioning_scale` 0.25 → **0.35-0.40**; teşhis terimleri prompt'un başına | **melisa** (çiçekler gösterişli büyüdü) · **biberiye** (iğnemsi yaprak yumuşadı → lavanta/adaçayı melezi) |
| K4 | **Prompt** — KONU metni plakayla çelişiyor | Model doğru referansa rağmen komşu türe kayıyor | KONU'yu plakaya uydur; teşhis özelliğini çiçekten önce yaz | **adaçayı** (KONU "violet-blue" diyordu, plaka **pembe-leylak**; model lavantaya kaydı) |

### 12.1b Bitki-tipi kuralı — kimliği YAPRAKTA olan otlar (KALIP)

> **Kural:** Aromatik nane-ailesi (Lamiaceae) otlarında ve genel olarak kimliği çiçekten
> çok **yaprakta** olan bitkilerde `controlnet_conditioning_scale` **0.42-0.45** tutulur
> (varsayılan 0.25 değil) ve **yaprak morfolojisi prompt'un ilk cümlesine** yazılır.

**Neden:** Bu bitkilerin çiçekleri küçük ve ayırt edici değildir; model boşluğu kendi
önyargısıyla doldurup yaprağı "genel yeşil yaprak", çiçeği "genel gösterişli çiçek"
yapar. Sonuç komşu türe kayar: melisa → nane/yaban fesleğeni, biberiye → lavanta/adaçayı.
Düşük cond'da referansın yaprak çizgileri bu önyargıyı yenemez.

**Kapsam (kalan bitkilerde uygulanacak):** kekik, fesleğen, oğulotu, mercanköşk, nane
türleri, adaçayı, biberiye, melisa, lavanta — ve kimliği yaprak/gövde morfolojisinde
olan otsu türler (ör. atkuyruğu: iğnemsi halka dallar).

**Sınır:** cond ≤ 0.45 tutulur. Batch-1'de zencefilde denenen **0.55 üslubu bozdu** —
gravürün çizgisel karakterini dayatıp çıktıyı monokrom kalem çizimine çevirdi. 0.45 üstü
yalnız yeni bir kalibrasyonla ve QA turuyla açılır.

**Dayanak (Batch-1 A/B turu, 2026-07-28):** melisa + biberiye için iki yol aynı turda
denendi — **Yol A** (cond 0.42 · yaprak morfolojisi ilk cümlede · atmosfer bir kademe
kısık) ve **Yol B** (Köhler yaprak-detay kırpımı · cond 0.45).
- **biberiye: Yol A kazandı** — ince iğnemsi yaprak + minik soluk mavi çiçek; lavanta
  çağrışımı tamamen kalktı. Yol B'de çiçekler yaprakla birleşip okunmaz oldu.
- **melisa: iki yol da mevcut sürümü geçemedi** — Yol A yaprak biçimini iyileştirdi ama
  yaprakları grileştirdi (§1.6 **renk kilidi** ihlali: melisa yaprağı canlı yeşildir) ve
  çiçekleri neredeyse yok etti; Yol B yaprağı yuvarlatıp başka türe (Alchemilla/Geranium
  havası) kaydırdı. Kayıtlı sürüm cond 0.38 ile kaldı.
- **Ders:** cond artışı morfolojiyi düzeltirken **doygunluğu düşürebilir**; renk kilidi
  morfoloji kazancının önüne geçer. Yaprağı gri çıkan bir "doğru biçim" kabul edilmez.

### 12.1c Zencefil istisnası — DENENDİ, ÇÖZÜLMEDİ (açık kalem, 2026-07-28)

Zencefil kartı (rizom formu) Batch-1'de **dört tur** denendi ve hâlâ kabul edilmedi.
Kayıt, ileriki batch'lerde aynı yolun tekrar denenmemesi için tutuluyor.

| Tur | Ayar | Sonuç |
|---|---|---|
| 1 | cond 0.30 · Köhler alt bant kırpımı (rizom kadrajda) | Rizom yok sayıldı; filizli soluk saplar |
| 2 | cond 0.55 | Morfoloji geldi **ama üslup kırıldı**: gravür dayatıldı → monokrom kalem çizimi |
| 3 | cond 0.42 + renk/foto negatifleri | Renk döndü, morfoloji kaydı: boynuzumsu sivri kökler |
| 4 | **cond 0.15** (ürün sahibi onaylı gevşetme) + mutfak-zencefili prompt'u + çubuk/filiz negatifleri · seed 666/111/222 | Çubuk-filiz formu **kalktı** (negatifler işe yaradı) ama rizom yine doğru değil: 666 → mercan/patlamış mısır dokusu · 111 → etli dallı kök (ginseng havası) · 222 → kıvrık sosis benzeri parçalar, ayrıca düz ürün-çekimi kompozisyonu (ORTA dreamy fon kayboldu) |

| 5 | **Kaynak değişikliği (K2):** CC0 mutfak zencefili **fotoğrafı** referans · cond 0.40 · seed 666/111/222 | Yine kabul edilmedi: 666 → mercan/karnabahar kütlesi · 111 → pürüzsüz turuncu kıvrık form · 222 → kızarmış hamur benzeri form. **Üçünde de insan eli** çıktı (negatif listede "human hands" olmasına rağmen) |

**Tur 5 kaynak notu (araştırma tekrarlanmasın diye):** Commons'ta lisansı temiz iki aday
bulundu — `File:Fresh ginger (20240131).jpg` (3000×3000, **CC0**, Fumikas Sagisavas) ve
`File:Ginger rhizomes.jpg` (3548×2773, **CC0**, Judethedeus). İkisi de atıf gerektirmez.
İkincisi elendi: arka planda markalı karton kutu yazıları var (ön-kontrol (c) ihlali).
Birinciden üç kadraj denendi; tek-özne kadrajı (k3) fazla yakın kalıp formu okunamaz
yaptı, orta kadraj (k2) seçildi. **Bu kaynaklar ASSET-LICENSES'a işlenmedi** — kabul
edilmiş bir asset üretmedikleri için; üretim satırı yalnız kabul edilen asset için açılır.

**Teşhis:** Köhler plakasındaki rizomların üstünde konik filiz kaideleri var; yüksek cond'da
bunlar sivri huni olarak dayatılıyor, düşük cond'da ise çıpa tamamen kalkıyor ve SDXL'in
"ginger" önyargısı tek başına inandırıcı bir rizom üretmiyor. Arada çalışan bir pencere
bulunamadı. **Sorun reçete ayarı değil, referans-hedef uyuşmazlığı** (K1/K2 karması):
elimizdeki plaka "çiçekli bitki + toprak altı rizom" kompozisyonu, hedef ise "mutfak
rizomu" yakın planı.

**ÇÖZÜM — kadraj değişikliği (ürün kararı, 2026-07-31):** Zencefil kartı **toprak üstü
bitki formunu** gösterir. Gerekçe:
- Rizom kadrajı **5 turda çözülemedi**; kırpım (K1), kaynak (K2), parametre (K3) ve
  fotoğraf-referansı yollarının tamamı denendi (yukarıdaki tablo).
- Toprak üstü form **botanik olarak doğrudur** ve Köhler 172 ile tam tutarlıdır.
- **Koleksiyonun geri kalanıyla uyumludur**: diğer 11 kartın hepsi bitkiyi doğal habitat
  formunda gösterir; rizom yakın planı zaten tek başına aykırı düşüyordu.
- Mutfak çağrışımı **kart metniyle taşınır** (editoryal metin + `plantPartsShown` alanı).

Üretim: Köhler 172 üst bant kırpımı (1800×2250, plaka başlığı kadraj dışı) · cond **0.42**
(§12.1b kuralı; ilk tur 0.30 çıpayı tutmadı, çıktı tahıl başağına kaydı) · seed **333**
(666 ve 111 elendi: 666'da çiçek başağı yok, 111 mısır/darı'ya kaydı).

**Şerh (kayıt):** Seçilen kart kamışsı sapları ve iki sıralı uzun mızrak yaprakları doğru
verir; ancak Köhler'deki **sarı–mor dudaklı çiçek başağı net değildir** (yeşil koni
tomurcuk olarak okunur). Tür tanınabilirliği yaprak dizilişi + habitusa dayanır.

> **Açık kalem:** Rizom kadrajı ileride **tekil bir iş kalemi** olarak yeniden ele
> alınabilir. Gereken şey: **tek rizomu izole gösteren, temiz zeminli PD/CC0 referans**
> (stüdyo çekimi ya da tek-özne gravür). Elimizdeki iki CC0 fotoğraf market yığını olduğu
> için canny'de tek özne ayrışmıyordu.

> Not: cond 0.15 gevşetmesi **kalıcı istisna olarak kayda geçmemiştir** — denendi ve
> kabul edilmedi. §1 kilitleri ve §12.1b'deki 0.42-0.45 kuralı yürürlüktedir.

### 12.2 Üretim öncesi ön-kontrol (ZORUNLU kapı)

Her bitki için üretimden **önce** kırpım gözle incelenir; dört soru:

- **(a) Doğru tür mü?** Plakadaki Latince ad okunur, master.json'daki türle karşılaştırılır.
- **(b) Teşhis edici özellik kadrajda mı?** (rizom, iğnemsi yaprak, konik disk, çift sıra taç, iğnemsi halka dallar…)
- **(c) Açıklama kutusu / metin / ok çizgisi var mı?** Varsa **kullanma** — canny bunları kenar sanır. Plaka başlığı/rakam etiketleri de kadraj dışında bırakılır.
- **(d) Renk tarifi plakayla uyumlu mu?** KONU'daki renk sözcükleri plakadaki renkle birebir örtüşmeli.

Kapı `precheck.py` ile uygulanır: `ref/PRECHECK.json` içinde o bitki için dört madde de
`true` ve `checked_by` dolu değilse **üretim yapılmaz**. `make_reference_sheet` tüm
kırpımları tek sayfada gösterir; inceleme toplu yapılır.

> **Otomatik metin tespiti denendi ve BAŞARISIZ oldu** (2026-07-28): iki ayrı sezgisel
> (beyaz zeminde seyrek koyu iz · uzun düz çizgi) bilinen kötü plakayı temiz plakalardan
> ayıramadı, hatta ters sıraladı. Bu yüzden (c) maddesi **insan gözüne** bırakıldı;
> program yalnız ölçülebilir olanı (dosya varlığı, çözünürlük, oran) denetler.
> Sahte otomatik güvence eklenmeyecek.

### 12.3 Referans çözünürlüğü

Köhler plakalarının Commons'taki **adlandırılmış** sürümleri çoğu türde ~450×590
küçük resimdir; kaynak olarak zayıftır. Yüksek çözünürlük için: aynı türün `- 001x.jpg`
gibi varyantı aranır (aynısefa'da 2785×4171 bulundu), yoksa alternatif PD serisi
kullanılır, o da yoksa ESRGAN upscale (papatya kalibrasyonundaki `kohler-detay-esrgan.png`
yöntemi). Kısa kenar < 700px ise `precheck.py` **uyarı** verir (blok değil).

### 12.4 Kilitler değişmedi

Bu bölüm §1 reçetesini **değiştirmez**: model, sampler, steps, CFG, seed 666, çözünürlük,
renk kilidi negatifleri ve §6 devir kilitleri aynen geçerlidir. Değişen tek şey,
`conditioning_scale`'in bitkiye göre 0.25-0.40 aralığında **gerekçeli** ayarlanabilmesi
(K3) ve her üretimin ön-kontrol kapısından geçmesidir.

---

## 11 · Sonraki adım
- Papatya ORTA kartı kilitli (QA PASS). Kalan **36 bitki** aynı reçeteyle üretilebilir (yalnız KONU'daki tür kimliği + kendi Köhler/PD referansı değişir; §6 kilitleri sabit).
- Her yeni bitki için: tür-özel Köhler/PD referansının PD kapsamı teyit edilir (gap §2), T0 sınıfı doğrulanır (§7).
- Modül sahne sayıları (§9.2) ürün sahibi teyidini bekler.
- Üretim çıktıları onaya kadar çalışma klasöründe; repoya girmez.
