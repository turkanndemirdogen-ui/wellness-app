# CURRENT TOKEN INVENTORY — Phase 0

**Tarih:** 2026-07-20 · **Revizyon:** 2026-07-21 (`15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` override'ına göre düzeltildi; çelişen 02/03 hedefleri için Superseded by 15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md where conflicting) · Kaynak: `mobile/src/design-system/tokens/tokens.json` (W3C, TEK KAYNAK) → `primitive.generated.ts` (`npm run tokens`, commit'lenir) → `theme/semantic.ts` → `useTheme()`. Gate: `scripts/check-tokens.mjs` (5 kural + 2 allowlist).

Karar sütunu: **K**=korunmalı · **D**=dönüştürülmeli · **X**=kaldırılmalı (yeni kanon: **15** > 02/03/04/07/09).

| Token grubu | Dosya/satır | Mevcut içerik | Kanon uyumu | Karar |
|---|---|---|---|---|
| `color.light` (9 renk) | tokens.json:6-14 | Pudra paleti: text #3A2E37, background #FBF6F3, backgroundElement #F1E4E1, backgroundSelected #E7D3D0, textSecondary #B29AA4, accent #C98B99, danger #C98B8B | 15 §4 `chrome` sözlüğü kesin HEX'lerle ana kromu kilitler (background #F8F2EC, surface #FFFDFC, powder #EFD9DD, parchment #F6EEE4, text #2E2926…) — mevcut pudra ailesi kavramsal olarak yakın, değerler değişir. Hex'ler zaten "GEÇİCİ" işaretli | **D** → 15 §4 `chrome` + `botanical` + `celestial` sözlükleri (02'nin çelişmeyen aileleri korunur) |
| `color.dark` (8 renk) | tokens.json:15-23 | Üretiliyor, runtime'da hiç kullanılmıyor (light-first LOCKED) | 15 §3-4: genel dark theme YOK; koyu renkler yalnız `visualPanels` sözlüğü (dusk #3F4A5D, night #222B38, ritual #31303D, astrology #293346, gardenNight #26392F) olarak var olabilir ve **ana screen background olarak KULLANILAMAZ** | **X** → mevcut dark seti temizlenir; yerine **panel-only** `visualPanels` tokenları gelir (gate kuralıyla korunur) |
| `color.ambient` (4 dilim) | tokens.json:24-30 | morning/day/evening/night — yalnız canvas+wash tonlar | 15 §3 override: saat bilgisi ana kromu DEĞİŞTİRMEZ; yalnız panel/hero atmosfer varyantı üretir. 02'nin "night'ta yüzey koyulaşması" okuması iptal | **D** → panel/hero atmosfer varyant tokenları (chrome sabit kalır) |
| `space` s2…s96 | tokens.json:32-47 | 4pt uyumlu ölçek | 07 spacing'i (0/4/8/12/16/20/24/32/40/48/56/64/80) ile değer düzeyinde birebir uyumlu | **K** (yeniden adlandırma: `spacing[N]`) |
| `radius` xs…full | tokens.json:48-57 | xs/sm/md/lg/full | 04 §8: 6/10/12/16/20/24/28/pill — mevcut sette xl/2xl/3xl yok | **D** → 04 seti (genişletme) |
| `typography` rampası | tokens.json:58-78 + theme/typography.ts (12 rol) | display.xl/l, heading.xl/l/m/s, body.l/m/s, label, caption, overline; aileler sistem fontu (serif/sans Platform.select) | 15 §5 fontRoles: display=Fraunces, reading=Lora, quote=Caveat (≤32 kelime/2 satır), ceremonial=Playfair Display (ekran başına maks 1), ui=System sans. `Fraunces+Inter only` (03) İPTAL; Inter kod uyumluluğu için kalabilir, canonical body fontu olamaz. TR karakter + tr-TR locale zorunlu | **D** → 15 rol sistemi + 03'ün çelişmeyen ölçeği + `AppText` variant API |
| `size.icon` sm16/md22/lg44/xl56 | tokens.json:79-87 | 4 boyut | 05: xs14/sm16/md20/lg24/xl32/2xl48 + glyph.hero | **D** |
| `duration` | tokens.json:88-97 | component/hero vb. bantlar | 09: instant80/fast140/normal220/slow360/reveal600/ceremonial/ambient | **D** (eşleme kolay) |
| `easing` | tokens.json:98-104 + motion.ts | standard/decelerate/accelerate | 09 bezier'leri farklı değerler, aynı yapı | **D** |
| `opacity` | tokens.json:105-111 | inactive/pressed vb. | Uyumlu | **K** |
| `borderWidth` | tokens.json:112-117 | thin1/focus2 | 04 §7.2: none/hairline0.5/thin1/medium1.5/focus2 | **D** (genişletme) |
| `motionDistance` | tokens.json:118-122 | paralaks s24 vb. | 09 ile uyumlu kavram | **K** |
| `elevation` level0-4 | tokens.json:123-131 | Android dp; iOS shadow YOK | 04 §9: iOS shadow token'ları (soft/card/elevated) + Android elevation birlikte | **D** → `lightShadows/darkShadows` |
| — glass/blur | YOK | expo-blur bağımlılığı da yok | 04 §5 Glass seviyeleri; **expo-blur onay dışı (15 düzeltme talimatı §8)** → yalnız tint fallback tokenları | **YENİ** (tint-only; gerçek blur belirsiz süreyle yok) |
| — gradientler | YOK (tek kullanım AmbientBackground, semantic renkli) | 02 §13 sözlükleri, 15 §3 sınırı içinde (ana krom koyulaşmaz) | **YENİ** |
| — glow | YOK | 04 §10 glows sözlüğü | **YENİ** (sınırlı) |
| — scrim | YOK | 02 §14 + 04 §16; 15 §10: koyu visual panel üstünde scrim ZORUNLU | **YENİ** |
| — planet/zodiac/mood/cycle renkleri | YOK (PLANET_GLYPH yalnız sembol) | 02 §6/§7/§10 | **YENİ** |
| — **chrome tokenları** | YOK (pudra seti yakın akraba) | 15 §4 `chrome` (11 kesin HEX: background/backgroundAlt/surface/surfaceTint/powder/parchment/stone/border/textPrimary/textSecondary/textMuted) | **YENİ** (Phase 1 çekirdeği) |
| — **panel-only dark tokenları** | YOK | 15 §4 `visualPanels` (5 HEX) — **yalnız visual panel içinde kullanılabilir; screen background YASAK** (gate kuralı + test ile korunur) | **YENİ** |
| — **screen-level visual specs** | YOK | 15 §6-8: `ScreenVisualSpec` tipi + homeSpec/exploreSpec/gardenSpec/chatSpec + 7 alt ekran spec'i (mood/cycle/skinCare/journal/plants/astrology/rituals) | **YENİ** (Phase 1; her ekran açık HEX+spacing sözleşmesi taşır) |
| — **motion limit tokenları** | motion.ts'te duration/easing var; limit yok | 15 §9 `motionLimits`: maxScale 1.02, pressScale 0.98, maxAnimatedElementsPerScreen 2; ambient 8-16sn, responsive 160-300ms, ceremonial 3-5sn | **YENİ** (Phase 1; test ile doğrulanır) |
| — **Free/Pro teaser tokenları** | YOK | 15 §14 `proTeaser` (backgroundHex/accentHex/borderHex/lockedPanelHex/radius/padding/gap) + `ProTeaserProps` contract | **YENİ** (Phase 1 contract; production paywall YOK) |
| Semantic katman | theme/semantic.ts | surface/ambient/text/border/action/navigation; saatle yalnız canvas+wash değişir | 04 surface taksonomisi + 15 §3 kilidi: navigation/form/journal/settings/legal/uzun-okuma yüzeyleri hiçbir zaman koyulaşmaz | **D** → yeni Surface variant sözleşmesi (chrome sabit; panel varyantları ayrı) |
| Legacy köprü | constants/theme.ts | Colors/Fonts/Typography/Spacing(half…six)/Radius/BorderWidth/MinTouchTarget/BottomTabInset/MaxContentWidth | Çift adlandırma borcu (bkz. VISUAL_TECH_DEBT §2d); MinTouchTarget=48, 15 §6 touchTarget=44 minimumunun üstünde — uyumlu | **D** → tek kanonik sözlük (15 §6 `layout` değerleriyle); MinTouchTarget **K** |
| timeOfDay provider | theme/theme-provider.tsx | 4 dilim, AppState tazeleme, forceTimeOfDay | 15 §3 override: AtmosphereProvider ana kromu DARKLAŞTIRMAZ; saat bilgisine göre yalnız panel/hero atmosfer varyantı üretir; reduced motion + fixed light tercih API'si sunar | **D** → AtmosphereProvider (chrome-sabit; geriye uyumlu sarmalayıcı ile) |
| Token gate | scripts/check-tokens.mjs | 5 kural | Kanon "inline yasakları"nın alt kümesi | **K** + genişlet (fontWeight/borderWidth/shadow + **visualPanels-ekran-background yasağı**) |

## Korunan güçlü altyapı (kanonla uyumlu, aynen kalır)
- tokens.json → generate → gate hattı (kanonun "merkezi token" şartının hazır taşıyıcısı)
- `useTheme()` erişim deseni ve semantic katman fikri
- `useReducedMotion`/`useMotionScale` köprüsü (09 §8'in temeli; motionScale 0/1 → ileride kademeli olabilir)
- `useWidthClass` (08 compact padding kuralıyla uyumlu)
- Skeleton `textRole→lineHeight` sözleşmesi (07 §12 ile birebir)
