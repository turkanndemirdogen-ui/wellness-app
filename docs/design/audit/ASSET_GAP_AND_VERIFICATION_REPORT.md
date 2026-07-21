# ASSET GAP & VERIFICATION REPORT — Phase 0

**Tarih:** 2026-07-20 · **Revizyon:** 2026-07-21 (`15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` override'ına göre düzeltildi: font seti + toksik bitki asset kuralı) · Kaynaklar: `mobile/assets/`, `mobile/src`, kök `content/`, `supabase/`, `design-prova/` · Superseded by 15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md where conflicting.

## 1 · Mevcut asset envanteri (mobile)

| Asset | Yol | Format | Boyut | Durum |
|---|---|---|---|---|
| App icon | assets/images/icon.png | PNG | 799 KB | Expo template — marka değil; 10 §6 bütçesini de aşıyor |
| logo-glow | assets/images/logo-glow.png | PNG | 331 KB | template kalıntısı |
| Android adaptive set | android-icon-*.png | PNG | 4-78 KB | template (bg #E6F4FE mavi) |
| Splash | splash-icon.png (+app.json bg #208AEF) | PNG | 3 KB | Expo mavisi — marka değil |
| react/expo logoları, tutorial, tabIcons | çeşitli | PNG | ~100 KB | template çöpü — temizlenebilir |
| SVG | expo.icon/expo-symbol 2.svg | SVG | 608 B | template |
| Font dosyası | — | — | — | **YOK** (sistem fontu) |
| WebP/JPG | — | — | — | **YOK** |
| Botanik görsel | — | — | — | **YOK** |

## 2 · Botanik görsel zinciri — ÜÇ KATMANDA BOŞ (en kritik açık)

1. **Asset haritası boş:** `herb-illustration-assets.ts:13-15` → 0 eşleme; HerbIllustration daima saf-View yer tutucu motif çizer (bu, 10 §11 placeholder stratejisiyle uyumlu bir ara durum).
2. **Content'te alan yok:** `content/bitki-kartlari-master.json` kartlarında `illus_ref` YOK; motor tablolarında da yok.
3. **DB'de alan yok:** `herbs` şemasında (0002_content_schema.sql:87-93) illus_ref sütunu yok, `data` jsonb'ye de yazılmıyor; storage bucket config'te kapalı yorum.

→ Sonuç: "aynı generik bitki görselinin farklı türlerde kullanılması" riski bugün SIFIR (hiç görsel yok); ama 37 bitki × asset paketi (10 §3: scientific-reference + editorial-hero + card-thumbnail + leaf-detail + silhouette + metadata.json) tamamen üretilecek. Ara adım önerisi: 10 §11 gereği **silhouette.svg + bilimsel ad placeholder'ı** — mevcut motif buna yakın, tür-özel siluete evrilmeli.

## 3 · Bilimsel ad (scientific name) — VERİ MODELİNDE YOK

- Content JSON'larında yapılandırılmış `bilimsel_ad`/`latin_name` alanı yok (yalnız serbest metinde geçiyor).
- DB `herbs` tablosunda yok; mobil `Herb` tipinde yok.
- 00 §6.1/03 §9/07 §6: bilimsel ad kart üzerinde ZORUNLU → **içerik + şema + seed + mobil tip zincirinde yeni alan gerekir** (kök repo işi; Editorial+Architecture onayı — kapsamı bu audit dışı, karar gerekli).

## 4 · Glyph/sembol durumu

| Sembol seti | Mevcut | Kanon (05) | Açık |
|---|---|---|---|
| Gezegen | Unicode metin (☽☉☿♀♂♃♄, content.ts) — 7 gezegen | SVG component ×10 (Sun…Pluto), Unicode yalnız fallback | 10 SVG üretilecek; mevcut 7'li set fallback'e iner; Uranüs/Neptün/Plüton içerikte henüz kullanılmıyor |
| Zodyak | YOK (yalnız burç ADI metni: MOON_IN_SIGN_TR) | SVG ×12 + 3 renk modu | 12 SVG yeni |
| Ay fazı | Saf View glif ×4 (yeni/ilk_dordun/dolunay/son_dordun) | SVG ×8 + veri/dekoratif ayrımı | 8 SVG; 4→8 faz veri genişlemesi astro sağlayıcı sözleşmesine dokunur (DİKKAT: mock provider 4 faz üretiyor) |
| UI ikon | Emoji ×6 (icon.tsx GLYPHS) + ekran-içi sızıntılar | Tek kütüphane (öneri: Lucide RN) ~29 ikon | Kütüphane kararı + react-native-svg bağımlılığı gerekir |

## 5 · Lisans/kaynak metadata durumu

- Mevcut üründe lisans gerektiren görsel yok (template hariç).
- `design-prova/PROVA-NOTLAR.md` telif kayıtları (Köhler PD, Health Icons CC0, OpenRAIL-M) prova içindir; production asset pipeline'ına 10 §9 metadata şeması kurulacak (assetId/scientificName/morphologyVerified/sourceStatus/aiGenerated…). Bugün hiçbir production asset'i olmadığından metadata açığı = pipeline açığı.
- SD1.5 stil testleri (design-prova/assets/sd-papatya-*.png) 10 §12 gereği **production'a giremez** (morfoloji doğrulaması yapılmadı; #2 yaprakları yanlış — kayıtlı).

## 6 · Kanonik adlandırma uygunluğu

- Mevcut asset adları (icon.png, splash-icon.png…) template adları; 10 §4 formatına (`<domain>-<entity>-<variant>-<index>.<ext>`) uyan 0 dosya. Tümü ya değişecek ya temizlenecek.

## 7 · Boyut/bütçe ihlalleri (mevcut)

- icon.png 799 KB (app icon olduğu için bütçe tablosu dışı ama optimize edilmeli), logo-glow 331 KB kullanılmıyor → temizlik adayı.

## 8 · Öncelikli asset açık listesi (fazlara göre)

1. **Phase 1:** Font paketleri — `@expo-google-fonts/fraunces` + `/lora` + `/caveat` + `/playfair-display` (15 §5 rolleri; Inter paketi ÇIKARILDI — System sans için paket gerekmez) + her fontta **TR karakter render doğrulaması** (Ç ç Ğ ğ İ ı Ö ö Ş ş Ü ü) + THIRD_PARTY_NOTICES.md.
2. **Phase 2:** 10 planet + 12 zodiac + 8 moon SVG (custom set) + Lucide RN (UI ikonları) — react-native-svg **yeni dev build** gerektirir, açıkça raporlanır.
3. **Phase 4 öncesi:** Papatya için ilk doğrulanmış editorial-botanical paketi (Home hero pilotu) + silhouette placeholder seti.
4. **Phase 8:** 37 bitki tam pipeline (üretim → morfoloji doğrulama → metadata → CDN/Supabase Storage) + `illus_ref`/bilimsel ad veri zinciri.
5. **Marka:** app icon + splash yeniden tasarımı (template mavisinin gitmesi) — fazı ürün sahibi kararına bağlı.

## 9 · Toksik bitki asset kuralı (15 §11 — YENİ)

Asset pipeline'ı ve metadata şeması, yüksek riskli toksik türleri (Datura, Atropa belladonna, Aconitum, Digitalis, Ricinus communis, Nerium oleander, Conium maculatum vb.) **ürün envanteri asset'i olarak KABUL ETMEZ**: bu türler için card-thumbnail/collectible/CTA görseli üretilmez; yalnız tarihsel/sembolik/sanatsal bağlam görseli üretilebilir ve metadata'da `symbolicOnly: true` benzeri bir alanla işaretlenip UI'da "Tarihsel / sembolik referans — Kullanım önerisi değildir" etiketiyle (`SymbolicReferenceNotice`) gösterilir. 10 §9 metadata şemasına bu alan eklenmeli; morfoloji doğrulama akışına tür-güvenlik sınıfı kontrolü dahil edilmelidir.
