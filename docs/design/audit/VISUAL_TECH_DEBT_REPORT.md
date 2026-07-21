# VISUAL TECH DEBT REPORT — Phase 0

**Tarih:** 2026-07-20 · **Revizyon:** 2026-07-21 (`15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` override'ına göre hedef referansları düzeltildi) · **Kapsam:** `mobile/src` (61 dosya) + `mobile/scripts` · **Araç:** satır-satır grep + token-gate analizi · Superseded by 15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md where conflicting.

## 1 · Özet skor

| Kategori | Durum | İhlal |
|---|---|---:|
| Hard-coded HEX / rgba | ✅ TEMİZ | 0 |
| Inline fontSize/lineHeight/fontFamily | ✅ TEMİZ (typography.ts merkezli) | 0 |
| Inline fontWeight | ⚠️ BORÇ | 6 |
| Inline borderRadius | ✅ TEMİZ (tam token) | 0 |
| Inline shadow* | ✅ YOK (shadow hiç kullanılmıyor; yalnız token'lı Android elevation) | 0 |
| Inline borderWidth | ⚠️ küçük | 1 |
| Screen-local gradient | ✅ YOK (tek gradient: AmbientBackground, token renkli) | 0 |
| Sabit yükseklik (metin kırpma riski) | ✅ YOK | 0 |
| Emoji-as-icon | ⚠️ BİLİNÇLİ GEÇİCİ + sızıntı | ~10 |
| Çift adlandırmalı spacing/radius | ⚠️ BORÇ | 45+4 kullanım |

Mevcut sistem yeni kanonun 02/04 belgelerinin "ekran içine rastgele HEX/radius/shadow yazılmaz" kuralına **bugünden büyük ölçüde uyumlu** — token disiplini güçlü. Borç, değer değil **adlandırma ve soyutlama** düzeyinde.

## 2 · Bulgular (dosya+satır)

### 2a. Inline `fontWeight: '600'` (token-gate denetlemiyor)
- `design-system/components/button.tsx:129` · `chip.tsx:78` · `list-item.tsx:58`
- `app/(tabs)/kesif.tsx:262, 271`
- (`tab-icon.tsx:50` token'dan — ihlal değil)
→ Yeni tipografide (15 §5 rolleri) weight, rol-bazlı aile adına gömülür (UI rolü System sans'ta weight variant'ı; display/reading rollerinde Fraunces/Lora ağırlık kesimleri); bu literal sınıf Phase 1'de kendiliğinden ölür.

### 2b. `borderWidth: 1` inline — `kesif.tsx:263` (BorderWidth token'ı varken)

### 2c. Emoji/Unicode sembol envanteri
| Yer | İçerik | Sınıf |
|---|---|---|
| `design-system/primitives/icon.tsx:18-25` | 🌙🔮🌿💬🌱✨ (GLYPHS) | Bilinçli geçici; API kararlı — 05'e göre SVG setiyle YALNIZ bu dosya değişir |
| `lib/content.ts:93-101` | ☽☉☿♀♂♃♄ (PLANET_GLYPH) | Astronomik metin sembolü; 05'e göre yalnız fallback olabilir → SVG'ye taşınmalı |
| `kesif.tsx:155` | `?? '🌿'` fallback | Sızıntı — kaldırılmalı (silhouette placeholder kuralı, 10 §11) |
| `kesif.tsx:165` | `⚠ dikkat` | Sızıntı — semantic warning icon'a taşınmalı |
| `index.tsx:357,366` | ♥/♡ kaydet | Sızıntı — Save icon'a taşınmalı |
| `content/shell-copy.ts:37`, `states/state-scaffold.tsx:33` | "yakında ✨" | Copy içi emoji; 07 "component içinde hard-coded copy" kuralıyla birlikte değerlendirilmeli |
| `domain-ui/moon-phase-glyph.tsx` | saf View, emoji YOK | ✅ doğru örnek — 05 moon-phases SVG setine geçene dek korunabilir |

### 2d. Çift adlandırmalı spacing/radius (değer tek, isim çift)
- Her iki yol da `primitive.space.sN`'e çözülür (`constants/theme.ts:62-70` köprü) — **değer çatalı yok**.
- Legacy `Spacing.half/one/../six`: 45 kullanım / 6 dosya (ekran katmanı: `index.tsx` 16, `kesif.tsx` 14, `dev-gallery` 6, states 7). `Radius.*`: 4 kullanım.
- Kanonik `primitive.space.sN`: 42 kullanım / 9 dosya (bileşen katmanı).
- `Spacing.half=2` kanonik ölçekte yok (legacy optik değer).
→ Yeni 07 spacing'i (4pt: 0/4/8/…/80) mevcut sN ölçeğiyle **birebir örtüşüyor**; migrasyon = adlandırma birleştirme (`spacing[2]` tarzı tek sözlük), ekran katmanında ~50 mekanik değişiklik.

### 2e. Token-gate kapsam boşlukları (`scripts/check-tokens.mjs`)
Denetlenen 5 kural: color, fontSize, borderRadius, duration, easing (allowlist: primitive.generated, motion.ts).
Denetlenmeyen: **fontWeight, lineHeight, letterSpacing, borderWidth, height, elevation, shadow***.
→ Phase 1'de gate'e fontWeight+borderWidth+shadow kuralları eklenmeli (öneri).

### 2f. Tema/atmosfer sisteminin bugünkü kapsamı
- `theme-provider.tsx:21-27`: timeOfDay 4 dilim (05-11/11-17/17-22/22-05), yalnız AppState-active'te tazelenir; `forceTimeOfDay` dev-only.
- `semantic.ts`: saatle YALNIZ `surface.canvas` + `ambient.wash` değişir; metin/kart/nav sabit (bilinçli kilit).
- Dark token seti üretiliyor (`primitive.color.dark`) ama runtime'da **hiç kullanılmıyor** (light-first LOCKED).
→ 15 §3 override sonrası hedef DARALDI: ana krom hiçbir saatte koyulaşmaz — "night'ta genel yüzey koyulaşması" hedefi İPTAL (bugünkü "metin/kart/nav sabit" kilidi 15 ile UYUMLU çıktı). AtmosphereProvider yalnız panel/hero atmosfer varyantı üretir + reduced motion ve fixed light tercih API'si sunar. Eksikler: panel varyant üretimi, kullanıcı tercihi API'si. Kullanılmayan dark token seti temizlenir; yerine **panel-only** `visualPanels` tokenları gelir (screen background yasağı gate+test ile).

## 3 · "Korunmalı / dönüştürülmeli / kaldırılmalı" özetleri
- **Korunmalı:** token-gate altyapısı (genişletilerek), tokens.json→generate hattı, semantic katman deseni, reduced-motion köprüsü, skeleton lineHeight sözleşmesi.
- **Dönüştürülmeli:** Spacing/Radius legacy adları → tek kanonik sözlük; PLANET_GLYPH → SVG glyph seti (Unicode fallback'e iner); icon.tsx GLYPHS → SVG icon seti; fontWeight literalleri → typography variant'ları.
- **Kaldırılmalı:** `kesif.tsx` 🌿 fallback, ekran-içi ♥/♡ ve ⚠ karakterleri (ikonlaşınca); kullanılmayan dark token seti temizlenir — yerine 15 §4 `visualPanels` panel-only tokenları gelir (genel dark theme YOK; karar 15 ile çözüldü).
