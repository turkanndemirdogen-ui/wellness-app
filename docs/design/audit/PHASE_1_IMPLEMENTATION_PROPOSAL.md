# PHASE 1 IMPLEMENTATION PROPOSAL — Foundations (yalnız öneri; uygulama onay bekler)

**Tarih:** 2026-07-20 · **Revizyon:** 2026-07-21 — `15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` override'ına göre yeniden yazıldı; kapsam, düzeltme talimatının §7 "onaylı foundation kapsamı" (A–I) ile hizalandı. Superseded by 15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md where conflicting.
**Kapsam:** tokenlar + typography + surfaces + screen specs + provider + icon/glyph sınırı + component contract'ları + dev gallery + testler. **Ekran retrofit'i YOK. Navigation refactor YOK. Home'a dokunulmaz. Production paywall YOK.**

## 0 · İlkeler

- Kaynak önceliği: **15 > 00-14**. Çelişkide 15 kazanır.
- Mevcut `useTheme()`/`Text role` API'leri bir faz boyunca deprecated-alias olarak yaşar → ekranlar Phase 4-5'te taşınana kadar HİÇBİR ekran kırılmaz.
- **Genel dark theme veya dark screen surface KURULMAZ.** Koyuluk yalnız visual-panel-only token mimarisiyle gelir.
- 4-tab mimarisi (`home|explore|garden|chat`) SABİT; route'lara dokunulmaz.
- Her adımda `tsc + lint(genişletilmiş gate) + tokens + test` yeşil; dev-gallery görsel kabul yüzeyi.
- Yeni bağımlılıklar §7'deki onay listesine tabidir; liste dışına çıkılmaz.

## A · Tokens (15 §4/§6/§9/§14)

- `tokens.json` yeniden yapılandırılır:
  - **chrome** (11 kesin HEX — ana UI kromu; 15 §4 birebir),
  - **botanical** accent'leri (11 HEX),
  - **celestial** accent'leri (8 HEX),
  - **visualPanels** — panel-only dark (5 HEX; dusk/night/ritual/astrology/gardenNight),
  - spacing (15 §6 `layout` + mevcut 4pt ölçek), radius (hero 24 / card 16 / compact 12 + mevcut set), borders, shadows (iOS shadow + Android elevation),
  - **motionLimits** (maxScale 1.02, pressScale 0.98, maxAnimatedElementsPerScreen 2 + ambient 8-16sn / responsive 160-300ms / ceremonial 3-5sn bantları),
  - **proTeaser** token seti (15 §14).
- Mevcut pudra seti `legacy.*` altına taşınır (bir faz; ekranlar hâlâ okuyor) — sonra silinir. Kullanılmayan `color.dark` seti temizlenir.
- **Gate kuralı (yeni):** `visualPanels.*` bir ekranın/shell'in `background` değeri olarak KULLANILAMAZ — check-tokens.mjs + test ile korunur.
- `generate-tokens.mjs` üç-seviye nested grup için doğrulanır (bugün 2 seviye çalışıyor).

## B · Typography (15 §5)

- Font rolleri: **Fraunces** (display: hero, screen/section title, plant common name, ritual title) · **Lora** (reading: journal prompt, editorial, plant lore) · **Caveat** (quote: YALNIZ kısa söz, ≤32 kelime ve 2 satır; kritik metinde asla) · **Playfair Display** (ceremonial: nadir; ekran başına maks 1) · **System sans** (ui: controls, metadata, forms, navigation).
- `Fraunces + Inter only` kararı GEÇERSİZ. Inter mevcut kod uyumluluğu için kalabilir; canonical tek body fontu YAPILMAZ. System sans için yeni paket gerekmez.
- `app/_layout.tsx`: `useFonts` + splash senkronu (font yüklenmeden UI görünmez, layout shift yok).
- **`AppText`** primitive: rol-tabanlı variant API; eski `Text role` adları deprecated alias eşleme tablosuyla yaşar. `variant="quote"` Caveat sınırlarını component içinde zorlar (numberOfLines=2 + kelime sayısı dev-warn).
- **Turkish locale helper:** `lib/text-tr.ts` — `toLocaleUpperCase('tr-TR')` / `toLocaleLowerCase('tr-TR')`.
- **Turkish character rendering test:** her font ailesinde Ç ç Ğ ğ İ ı Ö ö Ş ş Ü ü doğrulaması (dev-gallery satırı + otomatik test).
- `maxFontSizeMultiplier` default'ları variant başına; Dynamic Type desteklenir.

## C · Surfaces (15 §3-4)

- `Surface` variant seti: **base cream** (#F8F2EC) · **powder tint** (#EFD9DD) · **parchment** (#F6EEE4) · **standard card** (#FFFDFC) · **elevated card** · **visual panel** (genel) · **astrology visual panel** (#293346) · **garden visual panel** (#26392F) · **ritual visual panel** (#31303D).
- **Koyu surface genel screen background olarak kullanılamaz** — tip düzeyinde (variant ayrımı) + gate + test ile korunur.
- Koyu visual panel üstünde scrim ZORUNLU (15 §10).
- Navigation, form, journal editor, settings, legal ve uzun okuma yüzeyleri koyu variant ALAMAZ.
- Glass etkileri yalnız tint fallback (expo-blur onay dışı).
- Eski 4 rol alias olarak yaşar.

## D · Screen Visual Specs (15 §6-8)

- `ScreenVisualSpec` tipi birebir 15 §6'dan alınır (screenId/backgroundHex/surfaceHex/accentHex/visualPanelHex?/padding/gap/hero/radius/motionLevel/maxAnimatedElements).
- En az şu spec'ler tanımlanır: **homeSpec · exploreSpec · gardenSpec · chatSpec** (ana tablar, 15 §7 değerleri birebir) + **moodSpec · cycleSpec · skinCareSpec · journalSpec · plantsSpec · astrologySpec · ritualsSpec** (alt ekranlar, 15 §8).
- `ScreenShell` bu spec'i tüketir (bkz. G); ekranlar Phase 4-5'te taşındıkça spec'ten okur — Phase 1'de yalnız tanım + dev-gallery gösterimi.

## E · Provider (15 §3)

- `AtmosphereProvider` (yeni): **ana chrome'u DARKLAŞTIRMAZ** — chrome sabittir.
- Saat bilgisine göre yalnız **panel/hero atmosfer varyantı** üretir (ör. akşam hero/garden/astrology/ritual panellerinin dusk/night varyant seçimi).
- **Reduced motion** ve **fixed light** kullanıcı tercihlerini destekleyecek API sunar (AsyncStorage; mevcut `settings.*` desenleriyle).
- `AppThemeProvider` ince uyum katmanı olur; eski `timeOfDay` API'si deprecated-alias — Home'un mevcut ambient'i kırılmaz. `forceTimeOfDay` dev aracı kalır.
- 02'nin "5 evre + genel yüzey koyulaşması + 20-40dk lerp" hedefi bu fazda UYGULANMAZ (chrome'a dokunan kısmı kalıcı iptal — Superseded by 15).

## F · Icon / Glyph boundary (05 + 15)

- **Merkezi `Icon` wrapper** korunur; `IconSource` soyutlaması eklenir — Phase 1'de emoji tablosu davranışı DEĞİŞMEZ.
- `design-system/glyphs/` **klasör iskeleti** + `Glyph` tip sözleşmesi (planet/zodiac/moon-phase union'ları + zorunlu a11y label) — SVG içerikleri P2.
- **Emoji ve Unicode topluca BU FAZDA DEĞİŞTİRİLMEZ** — açık **P2 migration boundary**: P2'de yalnız `icon.tsx` iç temsili + `PLANET_GLYPH` fallback'e iner; sızıntılar (🌿/♥/⚠) P3 component işlerinde temizlenir.

## G · Component contracts (15 §11-14)

Phase 1'de **contract düzeyinde** tanımlanır (tip + props + token bağları + dev-gallery örneği; production ekran entegrasyonu sonraki fazlar):

1. **AppText** — rol-tabanlı variant API (B).
2. **Surface** — variant taksonomisi (C).
3. **ScreenShell** — `ScreenVisualSpec` alır; background/padding/sectionGap'i tek noktadan uygular; `visualPanels` renklerini background olarak REDDEDER.
4. **VisualPanel** — koyuluğun izinli TEK taşıyıcısı; scrim zorunlu; `maxAnimatedElements` bütçesine katılır.
5. **ProTeaser** — 15 §14 `ProTeaserProps` + `proTeaser` tokenları; ilk anlamlı sonuç free, tamamı kilitlenemez, viewport başına maks 1, sahte blur yok. **Production paywall ekranı bu fazda YAPILMAZ.**
6. **SymbolicReferenceNotice** — "Tarihsel / sembolik referans — Kullanım önerisi değildir" (15 §11).
7. **HealthInformationNotice** — 15 §12 izinli dil çerçevesi; yasak dil listesi contract'a gömülür.
8. **AstrologyInterpretationNotice** — 15 §13 "kesin öngörü değildir" çerçevesi.

## H · Dev gallery

`dev-gallery` genişletilir; Phase 1 görsel kabul yüzeyi olarak şunları gösterir:

- dört ana tab spec'i (homeSpec/exploreSpec/gardenSpec/chatSpec render önizlemesi),
- alt ekran spec örnekleri (mood/cycle/skinCare/journal/plants/astrology/rituals),
- font rolleri (Fraunces/Lora/Caveat/Playfair/System — TR karakter satırıyla),
- open chrome paleti (chrome/botanical/celestial),
- **visual-panel-only darkness** örneği (koyu panel + scrim; açık krom sabitken),
- motion limit örneği (1.00→1.02 ambient + 0.98 press; sayaçlı maxAnimatedElements),
- Free/Pro teaser örneği,
- safety notice örnekleri (symbolic/health/astrology),
- reduced-motion görünümü (ambient'lerin tamamen durduğu hal).

## I · Testler (jest-expo — ONAYLI)

Minimum test seti:

1. **token integrity** — tokens.json→generated çıkış tutarlılığı + chrome/visualPanels HEX'lerinin 15 §4 ile birebirliği.
2. **screen spec integrity** — 11 spec'in `ScreenVisualSpec` tipine ve 15 §7-8 değerlerine uygunluğu.
3. **panel dark colors not usable as screen backgrounds** — ScreenShell/gate reddi.
4. **typography role mapping** — eski role→yeni variant alias tablosu.
5. **Turkish locale** — `text-tr.ts` (İ/ı ve i/İ dönüşümleri dahil).
6. **Turkish font characters** — yüklü font ailelerinde TR glyph varlığı.
7. **reduced motion resolver** — reduced-motion'da ambient=durur, içerik/işlev kaybolmaz.
8. **max animated elements constraint** — motionLimits ihlal tespiti.
9. **toxic plant exclusion helper/policy** — dışlanan tür listesi envanter/öneri/collectible yollarına giremez.
10. **Pro teaser contract** — props/token bağları + "tamamı kilitlenemez" kuralı.
11. **Home B1–B6 preservation characterization** — pickDailyHerb/pickThemeLine/pickDailyQuote determinizmi + checkin aynı-gün-güncelleme (saf fonksiyonlar; HOME_B1_B6_PRESERVATION_MAP sözleşmesi).

## 7 · Bağımlılıklar (kesin liste)

| Paket | Durum | Not |
|---|---|---|
| @expo-google-fonts/fraunces | **ONAYLI (P1)** | display rolü |
| @expo-google-fonts/lora | **ONAYLI (P1)** | reading rolü |
| @expo-google-fonts/caveat | **ONAYLI (P1)** | quote rolü (sınırlı kullanım) |
| @expo-google-fonts/playfair-display | **ONAYLI (P1)** | ceremonial rolü |
| jest-expo | **ONAYLI (P1)** | test altyapısı (§I) |
| react-native-svg | KOŞULLU | P1 mimari ihtiyaca göre eklenebilir; native modül → **yeni EAS dev build gerekir, açıkça raporlanır** (2.2A linear-gradient dersi) |
| lucide-react-native | KOŞULLU | react-native-svg'ye bağlı; gerçek glyph migration P2 |
| System sans | — | yeni paket GEREKMEZ |
| expo-blur | **EKLENMEZ** | glass = tint fallback |
| @shopify/flash-list | **EKLENMEZ** | virtualizasyon ihtiyacı büyüme günü yeniden değerlendirilir |
| yeni animation library | **EKLENMEZ** | Reanimated 4.5 mevcut ve yeterli |
| yeni state library | **EKLENMEZ** | mevcut desen yeterli |
| expo-glass-effect | Kaldırma adayı | kaldırılmadan önce kullanım TEKRAR doğrulanır; ayrı onay |

Font asset maliyeti: 4 aile × ~2-4 kesim; OTA boyutu artışı raporlanır (splash süresi +~200-400ms bütçe içi).

## 8 · Dosya listesi (Phase 1'de değişecek/eklenecek KESİN set)

DEĞİŞİR: `tokens.json`, `generate-tokens.mjs`, `check-tokens.mjs` (+fontWeight/borderWidth/shadow/panel-bg yasağı), `theme/{semantic,typography,motion,theme-provider}.ts`, `primitives/{text,surface,icon,stack,spacer,divider}.tsx`, `constants/theme.ts` (köprü), `app/_layout.tsx` (font+provider), `app/dev-gallery.tsx`, `package.json` (yalnız onaylı bağımlılıklar).
EKLENİR: `theme/atmosphere-provider.tsx`, `tokens/screen-specs.ts`, `tokens/gradients.ts` (15 §3 sınırı içinde), `primitives/app-text.tsx` (veya text.tsx evrimi), `primitives/screen-shell.tsx`, `components/visual-panel.tsx`, `components/pro-teaser.tsx` (contract), `components/notices/{symbolic-reference,health-information,astrology-interpretation}-notice.tsx` (contract), `design-system/glyphs/` iskeleti, `lib/text-tr.ts`, test dosyaları (§I), `THIRD_PARTY_NOTICES.md`.
DOKUNULMAZ: `app/(tabs)/*` ekran gövdeleri ve route yapısı, `lib/*` (text-tr.ts ekleme hariç — yeni dosya, mevcut modüllere dokunulmaz), `content/*`, `domain-ui/*` davranışları, kök DB şema/seed.

## 9 · Koruma sınırları (düzeltme + Phase 1 boyunca)

Home gövdesi yeniden tasarlanmaz · B1-B6 selector/store/storage key/iş kuralları değişmez · `lib/` mevcut modüllerine dokunulmaz · navigation route'ları değişmez · ana tab eklenmez/kaldırılmaz · production botanical asset eklenmez · kök DB schema/seed değişmez · toxic plant content envantere taşınmaz · tıbbi veya deterministik astrolojik copy üretilmez · **commit/push yapılmaz** (onay sonrası, faz kapanışında ayrı karar).

## 10 · Riskler

- Font yükleme splash süresi (+~200-400ms) — bütçe içinde; 4 aile Inter'li plana göre daha fazla kesim taşıyabilir → kesim sayısı minimumda tutulur (rol başına 1-2).
- Caveat/Playfair'in TR karakter kapsaması font dosyasına bağlı — TR render testi P1 giriş kriteri; eksik glyph çıkarsa rol için fallback kararı kullanıcıya raporlanır.
- Deprecated-alias katmanı çift API dönemi yaratır (bilinçli, iki fazlık ömür).
- react-native-svg P1'e alınırsa **yeni dev build** zorunluluğu: cihaz testleri için EAS build slotu planlanmalı; alınmazsa P2 başında alınır.
- Panel-only dark mimarisi yeni gate kuralı ister — kural yanlış yazılırsa false-positive'lerle geliştirme yavaşlar; allowlist'li başlanır.
- ProTeaser/notice contract'ları üründe henüz tüketilmiyor — "ölü kod" görünümü normaldir; dev-gallery tek tüketici olarak kalır (bilinçli).
