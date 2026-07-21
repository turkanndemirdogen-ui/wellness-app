# MIGRATION FILE MAP — Phase 0

**Tarih:** 2026-07-20 · **Revizyon:** 2026-07-21 (`15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` override'ına göre düzeltildi: navigation hedefi = **keep existing four-tab architecture · no five-tab migration · no new main tabs**) · Action: keep / refactor / replace / archive · Phase: 13_IMPLEMENTATION_PHASE_PLAN fazları · Superseded by 15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md where conflicting.

| Current file | Purpose | Canonical target | Action | Risk | Phase | Notes |
|---|---|---|---|---|---|---|
| design-system/tokens/tokens.json | W3C token kaynağı (pudra paleti) | 15 §4/§6/§9/§14 (chrome/botanical/celestial/visualPanels/layout/motionLimits/proTeaser) + 02/03/04/07/09'un çelişmeyen setleri | **refactor** | ORTA | 1 | Yapı korunur, içerik genişler/değişir; koyu tokenlar panel-only; ambient→panel/hero varyantları (chrome sabit) |
| design-system/tokens/primitive.generated.ts | Üretilmiş token çıktısı | aynı (yeniden üretim) | keep (regen) | DÜŞÜK | 1 | `npm run tokens` |
| scripts/generate-tokens.mjs | Token üretici | aynı | keep | DÜŞÜK | 1 | Nested gruplar (botanical.sage.100) desteği doğrulanır |
| scripts/check-tokens.mjs | Token gate | genişletilmiş gate | **refactor** | DÜŞÜK | 1 | +fontWeight/borderWidth/shadow kuralları |
| design-system/theme/semantic.ts | Primitive→semantic eşleme | 04 surface taksonomisi + 02 text/semantic renkleri | **refactor** | ORTA | 1 | Mevcut grup adları korunarak genişletme (geriye uyumlu köprü dönemi) |
| design-system/theme/theme-provider.tsx | timeOfDay (4 dilim) | AtmosphereProvider — **ana kromu darklaştırmaz**; saate göre yalnız panel/hero atmosfer varyantı üretir; reduced motion + fixed light API (15 §3, kapsam E) | **refactor** | ORTA | 1 | `useTheme()` API'si korunur; forceTimeOfDay dev aracı kalır; 02'nin genel-yüzey-koyulaşması hedefi iptal |
| design-system/theme/typography.ts | 12 rollük sistem-font rampası | 15 §5 rol sistemi: Fraunces/Lora/Caveat/Playfair Display + System UI (Inter canonical değil; kod uyumluluğu için kalabilir) | **replace** (API köprüsüyle) | ORTA | 1 | Text role adları → AppText variant eşleme tablosu; tr-TR helper + TR karakter testi |
| design-system/theme/motion.ts | duration/easing köprüsü | 09 token'ları | refactor | DÜŞÜK | 1 | |
| constants/theme.ts | Legacy köprü (Colors/Fonts/Spacing/Radius…) | tek kanonik sözlük (spacing/radii) | **refactor→archive** | ORTA | 1→4 | Önce yeni sözlüğe köprü olur, ekranlar taşındıkça içi boşalır; MinTouchTarget/BottomTabInset taşınır |
| design-system/primitives/text.tsx | Text (role API) | `AppText` (variant API) | **refactor** | ORTA | 1 | Eski role adları deprecated alias olarak bir faz yaşar |
| design-system/primitives/surface.tsx | Surface (4 rol) | `Surface` (04 variant seti) | **refactor** | ORTA | 1 | |
| design-system/primitives/icon.tsx | Emoji ikon primitive | Lucide sarmalayıcı `Icon` | **replace** (API korunur) | DÜŞÜK | 2 | Sadece iç temsil değişir (tasarım gereği) |
| design-system/primitives/{stack,spacer,divider}.tsx | Az kullanılan layout primitives | 07 Stack/Inline/Spacer/Divider | refactor | DÜŞÜK | 1 | Inline yeni eklenir |
| lib/content.ts PLANET_GLYPH | Unicode gezegen sembolleri | 05 SVG glyph seti (Unicode=fallback) | **refactor** | DÜŞÜK | 2 | Sembol sözlüğü fallback olarak kalır |
| domain-ui/moon-phase-glyph.tsx | Saf View 4-faz glifi | 05 moon-phases SVG ×8 | **replace** (aşamalı) | ORTA | 2 | 4→8 faz veri sözleşmesi astro provider'a bağlı — ara dönemde 4 faz eşlemesi |
| domain-ui/herb-illustration*.ts(x) | Boş harita + placeholder motif | 06/10 botanical asset + silhouette placeholder | refactor | ORTA | 4+8 | Placeholder stratejisi kanonla zaten uyumlu |
| design-system/components/button.tsx | 5-variant Button | 07 Primary/Secondary/Tertiary/IconButton | refactor | ORTA | 3 | Davranış korunur |
| design-system/components/card.tsx | Slot-tabanlı Card | HeroCard/FeatureCard/PlantCard ailesi | **replace** (taban korunur) | ORTA-YÜKSEK | 3 | Slot sözleşmesi + iç içe yasak taşınır |
| design-system/components/chip.tsx | Chip | MoodChip/FilterChip | refactor | ORTA | 3 | |
| design-system/components/list-item.tsx | ListItem (yalnız galeri) | PlantListItem temeli | refactor | DÜŞÜK | 3 | |
| design-system/components/skeleton.tsx | Skeleton | SkeletonBlock/SkeletonCard | keep+extend | DÜŞÜK | 3 | textRole sözleşmesi kanonla birebir |
| design-system/components/reveal.tsx | Cross-fade helper | motion helper | keep | DÜŞÜK | 3 | |
| design-system/components/loader.tsx | Spinner | LoadingState | refactor | DÜŞÜK | 3 | |
| design-system/components/ambient-background.tsx | Ambient gradient+paralaks | 02 atmosphereGradients katmanı | refactor | ORTA | 4 | responseSignal/paralaks davranışı korunur |
| design-system/components/states/* | Empty/Error/Offline | 07 Feedback ailesi | refactor | DÜŞÜK | 3 | state-scaffold'daki legacy Spacing temizlenir |
| design-system/components/tab-icon.tsx | Tab görselleri | BottomTabs/TabItem (4 tab SABİT) | refactor | DÜŞÜK | 3 | 15 §2: sekme sayısı kilitli — yalnız görsel refactor |
| app/_layout.tsx | Kök Stack | + font loading + AtmosphereProvider | refactor | ORTA | 1 | Splash-font senkronu (03 §21.2) |
| app/(tabs)/_layout.tsx | 4 sekme (`home\|explore\|garden\|chat`) | **keep existing four-tab architecture — no five-tab migration, no new main tabs (15 §2)** | **keep** (P3'te yalnız görsel) | DÜŞÜK | 3 | Route yapısı DEĞİŞMEZ; Phase 1'de navigation refactor yok; alt ekranlar (Mood/Cycle/Skin/Journal/Plants/Astrology/Rituals) tab İÇİNDEN stack route olarak açılır |
| app/(tabs)/index.tsx | Home B1-B6 (TAM) | Phase 4 retrofit (görsel katman; 15 §7 homeSpec) | **refactor** | YÜKSEK | 4 | HOME_B1_B6_PRESERVATION_MAP sözleşmesiyle |
| app/(tabs)/kesif.tsx | Keşif (TAM) | Explore tabı olarak kalır (15 §7 exploreSpec); Plants ALT EKRAN olarak ayrışır, tab olmaz | refactor | ORTA | 5 | FlashList ONAY DIŞI — eklenmeyecek; performans büyüme günü yeniden değerlendirilir |
| app/(tabs)/bahce.tsx | Placeholder | Garden tabı içeriği (15 §7 gardenSpec) | replace (içerik) | DÜŞÜK | 5 | Tab kimliği sabit |
| app/(tabs)/sohbet.tsx | Placeholder | **Chat tabı — 15 §2 dört tabtan biri, SABİT** | keep (içerik Phase 5+) | DÜŞÜK | 5 | "Kanonik sekmelerde yok" tespiti geçersiz — Superseded by 15 |
| app/dev-gallery.tsx | DS vitrini | Phase 1 demo/sandbox screen | keep+extend | DÜŞÜK | 1 | Foundation kabul yüzeyi |
| lib/* (10 modül) | Davranış/data katmanı | aynı | **keep** | — | — | Görsel migrasyonda DOKUNULMAZ |
| content/home-copy.ts, shell-copy.ts | Onaylı microcopy | aynı (07 "hard-coded copy" kuralı ayrı iş) | keep | — | — | Metin değişikliği Editorial onayı ister |
| assets/images/* (template) | Expo kalıntısı | marka asset'leri | **archive/replace** | DÜŞÜK | 8 | Kalıcı silme yok — arşivlenir |
| app.json splash/icon | Template mavisi | marka | refactor | DÜŞÜK | 8 | |
| src/global.css | nativewind girişi | değerlendirilecek | keep | DÜŞÜK | — | Kullanım incelemesi Phase 1'de |

## Yeni dosyalar (15 gereği Phase 1'de eklenir — mevcut karşılığı yok)

| New file | Purpose | Phase |
|---|---|---|
| design-system/tokens/screen-specs.ts | `ScreenVisualSpec` tipi + homeSpec/exploreSpec/gardenSpec/chatSpec + 7 alt ekran spec'i (15 §6-8) | 1 |
| design-system/primitives/screen-shell.tsx | `ScreenShell` — spec alır, background/padding/gap uygular, visualPanels'i background olarak reddeder | 1 |
| design-system/components/visual-panel.tsx | `VisualPanel` — koyuluğun İZİNLİ tek taşıyıcısı (scrim zorunlu, 15 §10) | 1 |
| design-system/components/pro-teaser.tsx (contract) | `ProTeaser` contract + tokenlar (15 §14) — production paywall YOK | 1 |
| design-system/components/notices/* (contract) | `SymbolicReferenceNotice` / `HealthInformationNotice` / `AstrologyInterpretationNotice` (15 §11-13) | 1 |
| lib/text-tr.ts | tr-TR locale case helper'ları (15 §5) | 1 |
