# VISUAL AUDIT REPORT — Phase 0

**Tarih:** 2026-07-20 · **Revizyon:** 2026-07-21 (`15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` override'ına göre düzeltildi) · **Kanon:** `docs/design/15 + 00-14` (öncelik: 15 > 00-14) · **Kod:** `mobile/` @ `master` `bacfadf` (temiz)
**Ekler:** CURRENT_TOKEN_INVENTORY · CURRENT_COMPONENT_INVENTORY · HOME_B1_B6_PRESERVATION_MAP · ASSET_GAP_AND_VERIFICATION_REPORT · VISUAL_TECH_DEBT_REPORT · MIGRATION_FILE_MAP · PHASE_1_IMPLEMENTATION_PROPOSAL
Eski canonical belgelerdeki çelişkili maddeler için kural: Superseded by 15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md where conflicting.

## 1 · Executive summary

Kod tabanı yeni kanonun **mimari disiplinine** şaşırtıcı ölçüde hazır: renkler %100 tokenize (0 inline HEX), tek token kaynağı + üretim + lint-gate hattı çalışıyor, reduced-motion/touch-target/a11y hijyeni sistematik, Home B1-B6 cihazda kabul edilmiş ve davranış katmanı (lib/) görsel katmandan temiz ayrılmış. **Navigasyon çatışması 15 ile çözüldü:** nihai mimari mevcut 4 sekmedir (Ana Sayfa/Keşif/Bahçe/Sohbet — `home|explore|garden|chat`); 5-sekme migrasyonu iptal; Mood, Cycle, Skin Care, Journal, Astrology, Rituals ve Plants alt ekrandır; Phase 1'de navigation refactor yoktur. Kanonun **içeriksel** tarafındaki açıklar sürüyor: palet tek-aile pudra (15 chrome + botanical + celestial + panel-only dark ailelerini ister), font sistemi sistem-fontu (15 rolleri: Fraunces/Lora/Caveat/Playfair Display + System UI — `Fraunces+Inter only` iptal), ikonlar emoji, glyph'ler Unicode, hiç botanik görsel/bilimsel ad verisi yok. **Ana UI hiçbir zaman dark mode'a dönüşmez:** krom açık krem-pudra kilitli; koyuluk yalnız görsel panellerde (hero, astrology chart, garden dusk, ritual cover). Ayrıca iki yeni ürün kilidi audit kapsamına girdi: **toksik bitki dışlaması** (kritik ürün güvenlik sınırı, §5a) ve **Free/Pro teaser** (component gap, §5b). Önerilen yol değişmedi: mevcut altyapıyı **taşıyıcı** olarak koruyup içerikleri kanonla değiştirmek — reskin değil, token-önce migrasyon. Go önerisi §13'te, kalan kullanıcı kararları §12'de.

## 2 · Current architecture

- Kök repo (içerik/DB/scriptler) + nested `mobile/` (Expo SDK 57, RN 0.86, React 19.2, TS 6, expo-router, Reanimated 4.5, reactCompiler+typedRoutes). Branch: `master`, çalışma ağacı temiz.
- Navigasyon: kök Stack → `(tabs)` (4 sekme: Ana Sayfa · Keşif · Bahçe · Sohbet) + gizli `dev-gallery`.
- Tasarım hattı: `tokens.json` → `generate-tokens.mjs` → `primitive.generated.ts` → `semantic.ts` → `useTheme()`; gate: `check-tokens.mjs` (lint'e bağlı).
- Tema: light-first; timeOfDay 4 dilim yalnız canvas+ambient wash'ı tonlar; dark seti üretilip kullanılmıyor.
- Veri: Supabase anon (herbs 37, quizzes 12, engine_rules RPC; quotes tablosu YOK), AsyncStorage (checkin/favorites/cache), astro mock provider.
- Çalıştırma: `npm start` (dev-client + tünel operasyon notları memory'de), `npm run lint|tokens|check:tokens`; test scripti YOK.

## 3 · What is already reusable (kanonla uyumlu, taşıyıcı)

1. Token kaynak→üretim→gate hattı (02'nin "ekrana HEX yazılmaz" kuralının hazır polisi).
2. `useTheme()` + semantic katman deseni; `forceTimeOfDay` dev aracı.
3. Reduced-motion köprüsü (`useMotionScale`) — 09 §8'in temeli; tüm animasyonlu bileşenler zaten tüketiyor.
4. Skeleton `textRole→lineHeight` sözleşmesi (07 §12 birebir) ve blok-iskelet eşitliği pratiği.
5. Slot-tabanlı Card, çok-kanallı durumlar (Button/Chip), 48pt dokunma hedefleri, a11y etiket disiplini (76 kullanım/23 dosya).
6. `lib/` davranış katmanı — deterministik seçiciler, stale-cache, haptics tablosu (09 §7 ile birebir).
7. dev-gallery — Phase 1 kabul yüzeyinin hazır temeli.
8. `useWidthClass` (08 compact padding), `MinTouchTarget`, `BottomTabInset`.

## 4 · What conflicts with the canonical system

| Alan | Mevcut | Kanon (15 > 00-14) | Çatışma düzeyi |
|---|---|---|---|
| Palet | Tek aile pudra/lila-pembe | 15 §4: chrome (krem-pudra, ana UI) + botanical + celestial + visualPanels (panel-only dark); 02'nin geniş aileleri 15 ile çelişmedikçe geçerli | YÜKSEK (ama hex'ler zaten GEÇİCİ işaretli; 15 kesin HEX veriyor) |
| Font | Sistem serif/sans | 15 §5: Fraunces (display) + Lora (reading) + Caveat (quote, ≤32 kelime/2 satır) + Playfair Display (ceremonial) + System sans (UI). `Fraunces+Inter only` (03/14) İPTAL — Superseded by 15 | YÜKSEK (açık sürüyor; hedef değişti) |
| İkon/glyph | Emoji + Unicode | Lucide + custom SVG (05) — 15 ile çelişmiyor; toplu migration P2 | ORTA (API'ler soyut, iç değişim) |
| Atmosfer | 4 dilim, anlık geçiş, mod yok | 15 §3: ana krom AÇIK KALIR; koyuluk yalnız visual panel; saat bilgisi yalnız panel/hero atmosfer varyantı üretir. 02'nin "genel yüzey koyulaşması" okuması İPTAL — Superseded by 15 | ORTA (kapsamı 15 ile daraldı) |
| Navigasyon | 4 sekme (Ana Sayfa/Keşif/Bahçe/Sohbet) | 15 §2: yalnız 4 sabit tab (`home|explore|garden|chat`) — MEVCUTLA UYUMLU. 00 §7.1'in 5-sekme önerisi İPTAL — Superseded by 15. Mood/Cycle/Skin Care/Journal/Astrology/Rituals/Plants alt ekran | **ÇÖZÜLDÜ — çatışma yok; Phase 1'de navigation refactor yapılmaz** |
| Bilimsel ad | Veri modelinde yok | Kart üzerinde zorunlu | YÜKSEK — kök repo veri işi |
| Ay fazı | 4 faz (veri+glif) | 8 faz SVG | ORTA — astro sözleşmesine dokunur |
| Radius | xs-lg+full | 15 §6 layout (hero 24/card 16/compact 12) + 04 seti | DÜŞÜK |
| Gölge | Yalnız Android elevation | iOS shadow token'ları | DÜŞÜK |
| Toksik bitki politikası | Kod'da `app_safe=true` filtresi var; ürün-genel dışlama zinciri tanımsız | 15 §11: envanter/öneri/ritüel/collectible/CTA/affiliate tam dışlama + sembolik etiket | **YENİ — kritik ürün güvenlik sınırı (§5a)** |
| Free/Pro teaser | Hiç yok | 15 §14: ProTeaser contract + token seti; ilk anlamlı sonuç free | **YENİ — component gap (§5b)** |
| Eski tasarım belgeleri | PRODUCT_DESIGN_SYSTEM_MASTER, ana-sayfa-spec görsel maddeleri, estetik-anayasa 1.0, design-prova v4 | Paket öncelikli (15 en üstte) | Statü netleştirme gerekli (§12) |

## 5 · Critical blockers

1. **Botanik görsel zinciri üç katmanda boş** (asset yok, content'te illus_ref yok, DB'de sütun yok) — Phase 4 hero'nun "gerçek bitki" hedefi için pipeline sıfırdan.
2. **Bilimsel ad alanı hiçbir katmanda yok** — kart kimliğinin (00 §6.2) veri önkoşulu; kök repo şema+seed+editorial işi.
3. **react-native-svg yeni EAS dev build ister** (font paketleri JS-only, build gerektirmez ama splash-font senkronu ister) — cihaz kabulü build slotuna bağlı (2.2A'daki linear-gradient dersi). Yeni dev build gereksinimi her raporda açıkça belirtilecek.
4. **Test altyapısı sıfır** — 14 "run relevant tests" şartının taşıyıcısı yok; Home davranış koruması şu an yalnız manuel. (jest-expo 15 düzeltme talimatıyla ONAYLI — Phase 1'de kurulur.)
5. `quotes` tablosu hâlâ yok (B5 launch-blocker, görsel migrasyondan bağımsız sürüyor).

### 5a · Toksik bitki dışlaması — KRİTİK ÜRÜN GÜVENLİK SINIRI (15 §11)

Datura, Atropa belladonna, Aconitum, Digitalis, Ricinus communis, Nerium oleander, Conium maculatum ve benzeri yüksek riskli türler yalnız tarihsel/kültürel/sembolik/sanatsal/estetik referans olabilir. Ürün envanterine, kişisel öneriye, ritüel bileşenine, Bahçe collectible'ına, tüketim/uygulama CTA'sına ve affiliate zincirine GİREMEZ; doz/kullanım talimatı içeremez. Sembolik gösterim "Tarihsel / sembolik referans — Kullanım önerisi değildir" etiketi ister. Mevcut kod tarafında `pickDailyHerb`'ün `app_safe=true + uyari_chip yok` filtresi bu yönde çalışan bir taban; ancak ürün-genel dışlama **politika/helper düzeyinde tanımlı değil** — Phase 1 test planına `toxic plant exclusion helper/policy` maddesi eklendi. `SymbolicReferenceNotice` component contract'ı Phase 1 foundation kapsamındadır. Sağlık dili ve astroloji dili kilitleri (15 §12-13) editorial + component copy denetimine girer; `HealthInformationNotice` ve `AstrologyInterpretationNotice` contract'ları da foundation kapsamındadır.

### 5b · Free/Pro teaser — COMPONENT GAP (15 §14)

İlk anlamlı sonuç ücretsizdir; Pro yalnız derinlik/geçmiş/ileri insight/kişiselleştirme/gelişmiş koleksiyon açar; sonucun tamamı paywall arkasına konamaz; aynı viewportta maks 1 teaser; sahte blur yasak. Kod tabanında hiçbir teaser/paywall bileşeni yok. Phase 1'e `ProTeaser` **component contract'ı + token seti** (15 §14 `proTeaser`) eklenir; production paywall ekranı bu fazda YAPILMAZ.

## 6 · Home preservation summary

B1-B6 tam haritalandı (HOME_B1_B6_PRESERVATION_MAP): 14 korunacak davranış sözleşmesi + 6 giriş kriteri. En kritik korumalar: hero-asla-boş zinciri, transit-only free sınırı, sessiz-gizlenme halleri, aynı-gün-güncelleme, haptic çifti, AsyncStorage anahtarları, iskelet yükseklik eşitliği, B6'nın bilinçli yokluğu. Phase 4 bu haritayla gate'lenir; `lib/` dosyalarına dokunulmaz.

## 7 · Asset and botanical accuracy risks

- Bugün yanlış-tür riski sıfır (hiç görsel yok) — risk, pipeline kurulurken doğrulamasız AI görseli almakta (SD1.5 stil testleri kayıtlı örnek: 3 üretimden 1'i morfolojik hatalı). 10 §12 politikası + metadata şeması kurulmadan hiçbir botanik görsel production'a girmemeli.
- Template asset'leri (Expo mavisi splash/icon) marka dışı; arşivlenip değiştirilecek.
- Ayrıntı: ASSET_GAP_AND_VERIFICATION_REPORT.

## 8 · Accessibility and performance risks

- GÜÇLÜ: a11y etiketleri, dekoratif gizleme, touch target, reduced-motion, sabit-metin-yüksekliği yasağı, tek gradient, blur=0.
- RİSK: `maxFontSizeMultiplier` hiç yok (aşırı Dynamic Type'ta taşma sınırsız — 03 §20.1 ile gelecek) · liste virtualizasyonu yok (kesif 37 kart map — bugün kabul edilebilir; **FlashList bu düzeltmeyle onay listesinden ÇIKARILDI, eklenmeyecek** — büyüme günü yeniden değerlendirilir) · yeni sistemin glow/atmosfer eklentileri 04 §20 bütçesiyle sıkı QA ister (**expo-blur da onay dışı — glass yalnız tint fallback**) · koyu visual panel üstünde scrim zorunlu (15 §10).
- **Ana UI dark mode'a dönüşmez (15 §3):** genel screen background, navigation, form, journal editor, settings, legal ve uzun okuma yüzeyleri hiçbir saatte koyulaşamaz. Koyuluk yalnız hero görsel paneli, ritual cover, astrology chart paneli, garden dusk vignette, night illustration, modal görsel alanı ve image-backed teaser'da. Kontrast hedefleri (AA 4.5:1 / 3:1) hem açık krom hem koyu panel yüzeylerinde ayrı ayrı doğrulanır; motion tarafında ekran başına maks 1-2 animasyonlu öğe, ambient scale ≤1.02, press ≈0.98, Reduced Motion'da ambient tamamen durur (15 §9).

## 9 · Recommended migration sequence

13'ün fazları aynen, şu vurgularla: **P1** Foundations (deprecated-alias köprüleriyle; ekranlar kırılmaz; navigation refactor YOK) → **P2** Glyphs (SVG setleri; yeni dev build burada alınır) → **P3** Core components → **P4** Home retrofit (preservation map gate) → **P5** sekme içerikleri (4-tab mimarisi SABİT — 15 §2; sekme ekleme/çıkarma yok; Mood/Cycle/Skin/Journal/Plants/Astrology/Rituals alt ekran route'ları olarak tabların içinden açılır) → P6-P10. Her faz ayrı branch+PR (mevcut git konvansiyonu), commit onayla.

## 10 · Files proposed for Phase 1

PHASE_1_IMPLEMENTATION_PROPOSAL §10'daki kesin liste (2026-07-21 revizyonu): değişen + yeni dosyalar; `app/(tabs)/*` gövdeleri, `lib/*`, `content/*`, navigation route'ları dokunulmaz.

## 11 · Dependencies proposed

**ONAYLI (15 düzeltme talimatı §8):** `@expo-google-fonts/fraunces`, `@expo-google-fonts/lora`, `@expo-google-fonts/caveat`, `@expo-google-fonts/playfair-display` (P1; `@expo-google-fonts/inter` ÇIKARILDI — Inter canonical body fontu değil; mevcut kod sistem sans kullanmayı sürdürür, System UI için yeni paket gerekmez) · `jest-expo` (P1, ONAYLI) · `react-native-svg` + `lucide-react-native` (P1 mimari ihtiyaca göre eklenebilir; gerçek glyph migration P2; **yeni dev build gereksinimi açıkça raporlanır**).
**EKLENMEYECEK:** `expo-blur`, `@shopify/flash-list`, yeni animation library, yeni state library.
**Kaldırma adayı:** `expo-glass-effect` (hiç kullanılmıyor) — kaldırılmadan önce kullanım TEKRAR doğrulanacak.
Mevcut yetenek değerlendirmesi: reanimated+expo-image+linear-gradient+haptics yeterli; glass etkileri tint-fallback ile.

## 12 · Decisions requiring user approval

1. ~~**Navigasyon:** 4 vs 5 sekme~~ **ÇÖZÜLDÜ (15 §2):** 4 sabit tab (`home|explore|garden|chat`) — mevcut mimariyle uyumlu, ADR §3 kilidiyle de tutarlı. Mood/Cycle/Skin Care/Journal/Astrology/Rituals/Plants/Profile/Settings/Saved/Pro alt ekrandır; yeni ana tab yasak. Keşif ayrıca Plants tabına AYRIŞMAZ; Plants, Keşif (veya ilgili tab) içinden açılan alt ekran olur.
2. **Eski tasarım otoritelerinin statüsü:** `PRODUCT_DESIGN_SYSTEM_MASTER.md` (Governance'ta kanonik anılıyor), `estetik-anayasa.md 1.0`, `design-prova` (v4), ana-sayfa-spec'in görsel maddeleri → paketle çelişenlerin resmî durumu (arşiv? revizyon?) netleşmeli; ayrıca CLAUDE.md/GOVERNANCE_MASTER kanonik listesi güncellenmeli. (Not: 15, Lora ve Caveat'ı resmî rollere geri getirdi — 03'ün "script font yok" kuralı Caveat için Superseded by 15; Caveat yalnız kısa sözlerde, ≤32 kelime/2 satır, kritik metinde asla.)
3. **Bilimsel ad veri zinciri:** content şeması + DB migration + seed + editorial doldurma işinin sahipliği/zamanlaması (görsel migrasyonun önkoşulu, ama kök repo işi).
4. **Türkçe modül adları:** kanon İngilizce modül adları kullanıyor (Home/Garden/Plants…) — sekme etiketleri Türkçe kalacak (Editorial otoritesi) varsayımım var; teyit istenir. (15 Türkçe karakter + tr-TR locale desteğini zorunlu kılar — bu yönde.)
5. ~~**Test altyapısı**~~ **ÇÖZÜLDÜ:** jest-expo ONAYLI; Phase 1 test planı PHASE_1_IMPLEMENTATION_PROPOSAL §9'da.
6. **`expo-glass-effect` kaldırma** — kaldırmadan önce kullanım yeniden doğrulanacak; template asset temizliği onayı ayrı.

## 13 · Go / No-Go recommendation

**GO.** Navigasyon ve test altyapısı kararları 15 ile çözüldü; font bağımlılıkları onaylı. Phase 1 Foundations, 15'in kilitleriyle (4 tab, açık krom, panel-only dark, yeni font rolleri, ScreenVisualSpec, ProTeaser + safety notice contract'ları) başlayabilir. No-Go koşulları (devam eden): bilimsel ad zinciri kurulmadan P4 PlantCard kimliği, morfoloji doğrulaması olmadan herhangi bir botanik görselin production'a alınması, toxic-plant exclusion politikası tanımlanmadan herhangi bir envanter/collectible genişlemesi, herhangi bir fazda ana tab ekleme/çıkarma veya ana kromun koyulaştırılması.

## Validation sonuçları (kod değişmeden)

- `git status`: temiz (master, bacfadf) — kök repo da temiz.
- `npx tsc --noEmit`: ✅ hatasız.
- `npm run lint` (eslint + token-gate): ✅ (60 dosya, 5 kural, 2 denetimli istisna).
- Unit test: script/framework yok — koşulamadı (bkz. §5.4).
- `npx expo config`: ✅ parse ediyor (SDK 57.0.0, light, portrait, scheme wellnessapp, typedRoutes+reactCompiler).
