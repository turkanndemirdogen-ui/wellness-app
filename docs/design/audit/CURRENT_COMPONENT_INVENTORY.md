# CURRENT COMPONENT INVENTORY — Phase 0

**Tarih:** 2026-07-20 · **Revizyon:** 2026-07-21 (`15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` override'ına göre düzeltildi; yeni §"15 override değerlendirmesi" eklendi) · Kapsam: `mobile/src/design-system`, `src/domain-ui`, `src/app`. Duplicate bileşen YOK. Kanonik karşılık sütunu 07_COMPONENT_LIBRARY_CONTRACT'a göre (Superseded by 15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md where conflicting).

## Primitives (`design-system/primitives/`)

| Bileşen | Dosya | Kullanım | Kanonik karşılık | Refactor riski | Korunacak davranış |
|---|---|---|---|---|---|
| Text | text.tsx:30-48 | En yaygın (28 dosya) | `AppText` | ORTA (variant adları değişir: role→variant; 03 ölçeği) | heading→accessibilityRole, tone çift-kanal, allowFontScaling açık |
| Surface | surface.tsx:27-40 | index.tsx, states | `Surface` (04 taksonomisi) | ORTA (variant seti büyür) | semantic-only renk kuralı |
| Icon | icon.tsx:43-55 | tab-icon, button, dev-gallery | `Icon` (Lucide sarmalayıcı) | DÜŞÜK (API kararlı; yalnız iç temsil emoji→SVG) | name/size/decorative/label API'si, allowFontScaling=false ihtiyacı kalkar |
| Stack / Spacer / Divider | stack.tsx, spacer.tsx, divider.tsx | Stack+Spacer: fiilen 0; Divider: yalnız dev-gallery | 07 `Stack/Inline/Spacer/Divider` | DÜŞÜK | API'ler 07 ile uyumlu; canlandırılır (Inline eksik → eklenir) |

## Components (`design-system/components/`)

| Bileşen | Dosya | Kullanım | Kanonik karşılık | Risk | Korunacak davranış |
|---|---|---|---|---|---|
| Button + IconButton | button.tsx | states, dev-gallery, index | `PrimaryButton/SecondaryButton/TertiaryButton/IconButton` | ORTA (5 variant→3+icon ayrışması; min height 48 zaten var) | loading/disabled çok-kanallı durum, press feedback, a11y |
| Card | card.tsx | index (B3/B4/B5), kesif | `HeroCard/FeatureCard/PlantCard` ayrışır | ORTA-YÜKSEK (tek Card→aile) | slot sırası (header→children→media→footer), iç içe kart dev-warn, hero elevation |
| Chip | chip.tsx | index (mood, kaydet/paylaş) | `MoodChip/FilterChip` | ORTA | seçili durum çift kanal, 48pt efektif dokunma (hitSlop) |
| ListItem | list-item.tsx | yalnız dev-gallery | `PlantListItem` temeli | DÜŞÜK | leading/trailing yapısı |
| Reveal | reveal.tsx | index, kesif | (07'de yok — motion helper) | DÜŞÜK | motionScale=0 düz View |
| Skeleton | skeleton.tsx | index, kesif | `SkeletonBlock/SkeletonCard` | DÜŞÜK | textRole→lineHeight yükseklik sözleşmesi (07 §12 birebir), reduce-motion statik |
| AmbientBackground | ambient-background.tsx | yalnız index | AtmosphereProvider'ın görsel katmanı (02 §13 atmosphereGradients) | ORTA (renkler time.* token'larına bağlanır) | pointerEvents:none, paralaks sınırı, responseSignal tek-atış, motionScale=0 statik |
| Loader | loader.tsx | button içi, dev-gallery | `LoadingState` ailesi | DÜŞÜK | a11y (progressbar/busy) |
| TabIcon/TabLabel | tab-icon.tsx | (tabs)/_layout | `BottomTabs/TabItem` | DÜŞÜK (15 §2: 4-tab mimarisi SABİT — genişleme yok, yalnız görsel refactor) | aktif durum çift kanal; 4 sekme yapısı korunur |
| StateScaffold/Empty/Error/Offline | states/ | bahce, sohbet, kesif, dev-gallery | `EmptyState/ErrorState/…` (07 Feedback) | DÜŞÜK | teknik detay yalnız __DEV__, onaylı microcopy; NOT: state-scaffold legacy Spacing kullanıyor |
| usePressFeedback | use-press-feedback.ts | Button/Card | `PressableScale` | DÜŞÜK | scale 0.97 ≈ 04 §18.2 (0.985-0.99'a ayar), reduce-motion opacity |

## Domain-UI

| Bileşen | Dosya | Kanonik karşılık | Risk | Not |
|---|---|---|---|---|
| HerbIllustration | domain-ui/herb-illustration.tsx | PlantCard media + 10 §11 placeholder stratejisi | ORTA | Harita BOŞ → daima yer tutucu motif; 06 sınıflandırmasına (scientific/editorial/symbolic) bağlanmalı |
| HERB_ILLUSTRATIONS | herb-illustration-assets.ts | 10 asset pipeline | — | 0 eşleme (launch-blocker) |
| MoonPhaseGlyph | moon-phase-glyph.tsx | 05 moon-phases SVG seti (8 faz) | DÜŞÜK | Saf View, 4 faz; 05 8 faz ister — SVG'ye genişler; mevcut bileşen ara dönemde korunur |

## Ekranlar (expo-router)

| Route | Dosya | Durum | Satır | Kanonik hedef |
|---|---|---|---|---|
| kök Stack | app/_layout.tsx | tamam | 53 | AtmosphereProvider (chrome-sabit, 15 §3) + font loading eklenecek |
| (tabs) layout | app/(tabs)/_layout.tsx | tamam — **4 sekme** (Ana Sayfa/Keşif/Bahçe/Sohbet) | 95 | **15 §2 ile UYUMLU ve KİLİTLİ** (`home|explore|garden|chat`); 00 §7.1'in 5-sekme isteği iptal — Superseded by 15. Navigation refactor YOK |
| index (Home) | app/(tabs)/index.tsx | TAM (B1-B6) | 455 | Phase 4 retrofit — davranış korunur; görsel değerler 15 §7 `homeSpec` |
| kesif | app/(tabs)/kesif.tsx | TAM | 279 | Explore tabı olarak KALIR (15 §7 `exploreSpec`); Plants ayrı tab OLMAZ — alt ekran route'u olarak açılır |
| bahce | app/(tabs)/bahce.tsx | placeholder (EmptyState) | 13 | Garden tabı (15 §7 `gardenSpec`; Phase 5 içerik) |
| sohbet | app/(tabs)/sohbet.tsx | placeholder (EmptyState) | 13 | **Chat tabı olarak SABİT** (15 §2 dört tabtan biri; 15 §7 `chatSpec`) — "kanonik sekmelerde yok" tespiti geçersiz |
| dev-gallery | app/dev-gallery.tsx | tam (DS vitrini, __DEV__) | 233 | Phase 1 "visual demo/sandbox screen"in temeli — genişletilir |
| Mood/Cycle/SkinCare/Journal/Plants/Astrology/Rituals/Profile/Paywall | — | **YOK** | — | 15 §2: hepsi ALT EKRAN (tab değil); tabların içinden açılır. Spec'leri 15 §8'de; ekranlar Phase 5-6 |

## 15 override değerlendirmesi (2026-07-21)

| Soru | Cevap | Durum/Gap |
|---|---|---|
| Mevcut BottomTabs dört tabı koruyabilir mi? | **EVET.** `app/(tabs)/_layout.tsx` zaten tam olarak 15 §2'nin dört tabını render ediyor (Ana Sayfa/Keşif/Bahçe/Sohbet); `tab-icon.tsx` yalnız görsel katman. Yapısal değişiklik gerekmez, yalnız P3'te görsel refactor | Gap yok — 4-tab kilidi mevcut kodla birebir uyumlu |
| Free/Pro teaser component mevcut mu? | **HAYIR.** Kod tabanında teaser/paywall/kilitli-içerik bileşeni yok | **GAP** → Phase 1'de `ProTeaser` contract (15 §14 props + `proTeaser` tokenları); production paywall ekranı Phase 1 dışı |
| Toxic/symbolic reference notice mevcut mu? | **HAYIR.** `lib/home.ts` `app_safe=true + uyari_chip yok` filtresi davranış tarafında var ama UI'da sembolik-referans etiketi bileşeni yok | **GAP** → `SymbolicReferenceNotice` contract ("Tarihsel / sembolik referans — Kullanım önerisi değildir", 15 §11) |
| Health disclaimer ve astrology interpretation notice componentleri mevcut mu? | **HAYIR.** `states/` ailesi hata/boş durumlara özgü; bilgilendirme/disclaimer bileşeni yok | **GAP** → `HealthInformationNotice` (15 §12 izinli dil çerçevesi) + `AstrologyInterpretationNotice` (15 §13 "kesin öngörü değildir") contract'ları |
| Quote component Caveat kullanımını güvenli biçimde sınırlayabilir mi? | **EVET, contract ile.** B5 quote bugün Card+Text (rol API) — tipografi merkezi olduğundan `AppText variant="quote"` Caveat'ı tek noktadan bağlayabilir; `numberOfLines={2}` + ≤32 kelime dev-warn/helper sınırı component içinde uygulanabilir; kritik metin (buton, form, uyarı) quote variant'ı KULLANAMAZ kuralı lint/test ile korunur | Uygulanabilir — Phase 1 `AppText` contract'ına sınır kuralları yazılır |
| Screen shell ekran seviyesinde explicit token alabiliyor mu? | **HAYIR (bugün).** Ekranlar ScrollView+padding'i elle kuruyor (legacy `Spacing`); merkezi bir shell yok | **GAP** → Phase 1'de `ScreenShell` component contract'ı: `ScreenVisualSpec` (15 §6) alır, backgroundHex/padding/sectionGap'i tek noktadan uygular; `visualPanels` renklerini background olarak REDDEDER |

## lib/ (davranış katmanı — görsel refactor'da DOKUNULMAZ)

supabase.ts (anon client, null-safe) · auth.tsx (SessionProvider) · astro/ (mock provider, arayüz kararlı) · content.ts (fetchHerbs/Quizzes/Quotes + PLANET_GLYPH) · home.ts (deterministik günlük seçiciler + RPC) · query.ts (useAsyncResource + stale cache) · cache.ts (`cache.v1.*`) · checkin.ts (`checkin.v1.<date>`) · favorites.ts (`favorites.quotes.v1`) · haptics.ts (Light/Medium — 09 §7 tablosuyla birebir uyumlu).

**Test durumu:** src'de 0 test dosyası, test scripti yok — `jest-expo` ONAYLANDI (15 düzeltme talimatı §8); Phase 1 test planı PHASE_1_IMPLEMENTATION_PROPOSAL §9'da (token/spec bütünlüğü, panel-dark yasağı, TR karakter, motion limit, toxic exclusion, ProTeaser contract, Home B1-B6 karakterizasyon).
