# Wellness App — Project Checkpoint

**Son güncelleme:** 2026-07-27

## Current repository state
- Root repository: `wellness-app/` — tasarım arşiv temizliği `1a8a121` (superseded
  tasarım belgeleri + design-prova → `docs/archive/design-tarihce/`; kalıcı telif
  dosyası `docs/legal/ASSET-LICENSES.md` oluşturuldu)
- Mobile repository: `wellness-app/mobile/`
- Active mobile branch: `master` (feat/phase-3-core-components merge'lendi)
- Latest merged master: `1ee4019` — Görsel Kimlik P3 core components (PR #6, lokal
  squash — **push bekliyor**, ürün sahibi kendi komutuyla)
- Önceki: `6d8aa43` — Görsel Kimlik P2 glyph sistemi (PR #5, squash)
- Önceki kilometre taşları: P1 foundations `189a380` · Sprint 2.2A `bacfadf` ·
  Phase 1 `657a30d` · Home B1–B6 `5268064`
- Aktif dev build: EAS `d86c16fa` (commit 3f4739c; react-native-svg +
  lucide-react-native native dahil) — P2 sonrası native değişiklik yok,
  build geçerli
- Current Sprint: **Görsel Kimlik P3 (core components) MERGE'LENDİ (2026-07-27,
  PR #6)** · P2 glyph sistemi merge'lendi (PR #5) · P1 foundations merge'lendi
  (PR #4) · Sprint 2.2A kapandı (2026-07-18) · ACG paket yerleşimi tamam
  (2026-07-19, ADR §14) — sıradaki iş: Adım 6 (aşağıda) · paralel iş kolu:
  A0 asset üretimi (Batch-1, aşağıda madde 11)

## Completed
1. Phase 1 foundation T1–T15 + fiziksel cihaz kabulü
2. App shell, tokens, theme, primitives, dört sekmeli navigasyon
3. Günlük Pusula B1–B6 (`5268064`)
4. **Sprint 2.2A — Home Premium UI Refinement (`bacfadf`):**
   B3 hero mimarisi + gömülü Papatya açılış kartı · ambient arka plan ·
   haptics · iskeletler/sabit yükseklikler · MoonPhaseGlyph · B5 kaydet/paylaş ·
   Living World A5 dilimi · bileşen kontratları (docs/components/)
5. Sprint 2.2A fiziksel cihaz kabulü (2 tur, 2026-07-18): yeni dev build
   (expo-haptics + expo-linear-gradient) ile; 1. tur ambient bulgusu →
   GEÇİCİ ambient tonları derinleştirildi → 2. tur 9-10-11 GEÇTİ.
   Detay: `mobile/docs/HOME-DAILY-COMPASS-NOTES.md`
6. **Görsel Kimlik P1 — foundations (`189a380`, PR #4, 2026-07-22):**
   15 kilitleri altında token temeli (`tokens.json` + generated) · tipografi
   sistemi (Fraunces/Lora/Caveat/Playfair + system sans; `AppText` rol API'si,
   `text-tr` locale helper, `THIRD_PARTY_NOTICES.md` OFL kayıtları) ·
   surface/panel sistemi (`VisualPanel` — koyuluk yalnız panelde) ·
   `ScreenShell` + `screen-specs` · `AtmosphereProvider` · sözleşme
   bileşenleri (`ProTeaser`, `SymbolicReferenceNotice`, `HealthInformationNotice`,
   `AstrologyInterpretationNotice`) · `plant-safety` filtresi · glyphs ·
   12 test suite + `check-tokens` script'i · dev-gallery.
   **dev-gallery ürün sahibi kabulü (2026-07-22): fontlar Türkçe temiz, panel
   koyuluğu yalnız panelde / krom krem, sözleşme bileşenleri yerinde — GEÇTİ.**
7. **Görsel Kimlik P2 — glyph sistemi (`6d8aa43`, PR #5, 2026-07-22):**
   30 monoline SVG (05 §5 kilitli ağaç: 10 planet + 12 zodiac + 8 ay fazı) ·
   `GlyphSvg` tabanı (viewBox 24, stroke 1.5, currentColor, a11y sözleşmesi) ·
   dispatcher'lar (PlanetGlyph 02 §6 renkleri, ZodiacGlyph 3 mod,
   MoonPhaseDataGlyph) · `fourPhaseToGlyph` 4→8 köprüsü ·
   `resolveGlyphBreath` (1.012 ≤ maxScale 1.02; reduced-motion'da statik) ·
   02 §6-7 planet/zodiac token'ları · dev-gallery P2 vitrini + native yetenek
   kapısı (eski client teşhis ekranı — çökme dersi) · 8 yeni test suite
   (gerçek-SVG sanity dahil; toplam 19 suite / 159 test / 30 snapshot) ·
   bağımlılık: react-native-svg 15.15.4 (MIT) + lucide-react-native 1.25.0
   (ISC, kullanım Phase 3) — lisanslar THIRD_PARTY_NOTICES + ASSET-LICENSES §2b.
   **dev-gallery ürün sahibi kabulü (2026-07-22): 30 glyph doğru render — GEÇTİ.
   Karakter kararı: glyph'ler işlevsel monoline simge olarak KALIR; illüstratif
   zenginlik asset katmanının işidir (sanat-yönü kilidi).**
8. **Görsel Kimlik P3 — core components (`1ee4019`, PR #6, 2026-07-27):**
   Icon primitive emoji → Lucide SVG geçişi (`ICON_SOURCE='svg'`, API değişmedi,
   yeni native build gerekmedi; 14 UI ikonu, crystalBall→Orbit ürün kararı) ·
   AppHeader/BackButton/HeaderAction · SectionHeader · TabItem · Field iskeleti +
   TextField/TextArea/SearchField (04 §18 durum matrisi) · FilterChip ·
   InlineNotice (4 ton) · PlantCard (4 varyant, bilimsel ad kilidi 07 §6) ·
   LoadingState · 3 yeni test suite (toplam 22 suite / 183 test / 30 snapshot) ·
   dev-gallery P3 vitrini.
   **dev-gallery ürün sahibi kabulü (2026-07-27): tüm bileşenler + etkileşimler
   çalışıyor — GEÇTİ.**

## Open items
1. **TalkBack kabul turu (madde 12)** — ertelendi; sonraki cihaz turunda.
2. **`public.quotes` tablosu + seed (launch-blocker #3):** `content/soz-havuzu.json`
   kök seed pipeline'ına eklenecek; mobil B5 kod yolu hazır, tablo gelince
   kendiliğinden açılır. Söz mikro-eylem cihaz testi (madde 7) buna bağlı.
3. **Haptic his ayarı → Görsel Kimlik (Faz 6):** titreşim çalışıyor ama çok
   minimal bulundu; şiddet/his ayarı Görsel Kimlik sprintinde.
4. **Türkçe metin cilası → Görsel Kimlik sprintiyle birlikte:** ana sayfa
   cümle düşüklükleri (`mobile/src/content/home-copy.ts`).
5. **Nihai ambient/palet tonları Faz 6'da** (bugünkü hex'ler GEÇİCİ);
   timeOfDay saat dilimleri de GEÇİCİ (theme-provider).
6. Favoriler liste ekranı · R1.5 görsel söz paylaşım şablonu · çevirmeli
   kart (GS-1=b) — ayrı onaylı iş kalemleri.
10. **Görsel Kimlik P3 sonrası kalanlar (13 faz planı, P4+):** ekran/bileşen
    migrasyonu hâlâ açık (ekranlar legacy `Spacing`/tema yolunda; glyph'lerin ve
    P3 bileşenlerinin ekran adaptasyonu Phase 4 Home retrofit'inde —
    `domain-ui/moon-phase-glyph` ve `PLANET_GLYPH` Unicode'u o zamana dek
    yerinde) · ~~UI ikon geçişi~~ TAMAM (P3, `1ee4019`) · **ay fazı: 8 SVG
    HAZIR (P2, `6d8aa43`); veri genişlemesi (4→8 faz) Adım 6 astro-core'da —
    `fourPhaseToGlyph` köprüsü o güne dek arayüzü 4 doğru fazda tutar** ·
    production paywall ekranı (`ProTeaser` yalnız contract).
11. **A0 asset üretimi — Batch-1 (2026-07-27):** fal hesabı 2026-07-25'ten beri
    kilitli ("Exhausted balance", destek yanıtı bekleniyor) → üretim
    **Replicate'e taşındı** (`fofr/sdxl-multi-controlnet-lora`, KarrasDPM,
    edge_canny 0.25, seed 666; fal script'leri duruyor, kilit açılırsa geri
    dönülebilir). ControlNet ağırlığı farklı (union → dedike canny) →
    mini-kalibrasyon partisi olarak üretildi. **12/12 üretildi (~$0.20):
    9 PASS (melisa/adaçayı/kantaron şerhli) · 3 REVİZE (zencefil rizom
    morfolojisi — form kararı ürün sahibinde; aynısefa seyrek petal;
    atkuyruğu iğnemsi halka dallar eksik).** Kontak sayfası sunuldu; PASS
    onayı + revize turu sonrası kalan 24 bitkiye geçilecek. Çıktılar çalışma
    klasöründe, repoya girmedi (A0 brief §10).
    **Güncelleme 2026-08-27/28 (rekonstrüksiyon):** Batch-1 çıktıları Temp
    temizliğinde kaybolmuştu; kalıcı staging `Yedekler\wellness-assets\`
    (A0 §13) kurulup 12/12 yeniden üretildi ve ürün sahibi imzasıyla mühürlendi
    (`owner-signoff`). Zencefil REV4: Naturalis/Bernecker CC0 suluboya referansı,
    seed 333 · cond 0.45 (§12.1c rizom şerhi geçerli). Karahindiba: REV3 Köhler
    yan-profil kırpım seed 222 seçildi; REV4 CC0 fotoğraf denemesi (Beechview)
    seri diline uygun kazanan vermedi — karar gerekçesi metadata `reviewNote`.
    Aşama 2 (bucket `botanicals` + `image_path/image_version`, migration 0007
    canlı) yükleme adımı ürün sahibinde; Aşama 3 `HerbImage` mobil PR #7.
    **Yöntem değişikliği (2026-08-28, ürün sahibi):** zencefil + karahindiba
    için AI üretimi bırakıldı; CC0 kaynak doğrudan işlenir (`process-direct.py`,
    ASSET-LICENSES §4d, `aiGenerated:false`). Karahindiba: Beechview 02 (CC0
    fotoğraf) işlenmiş sürüm **onaylı** (3/4 açı kabul edilmiş sınır). Zencefil:
    CC0 yetişen-bitki fotoğrafı bulunamadı (Commons 2 tur + Commons-dışı 1 tur),
    Naturalis suluboya adayı seri diline uymadı → **yayında değil, 10 §11 yer
    tutucu**. Batch-1 **11/12 kartla KAPANDI (2026-08-28):** bucket `botanicals`
    public, `herbs.image_path/image_version` 11 satır canlı, `npm run
    db:check:images` GEÇTİ; ASSET-LICENSES §4 `approvedBy` mühürlü,
    `content/bitki-gorselleri.json` 11 kayıt. Aşama 3 (`HerbImage` + dev-gallery
    gerçek kartlar) mobil PR #7; kök script/doküman PR #1 — ikisi merge bekliyor.
    **AÇIK KALEM — zencefil görseli:** kalan 25 bitkiyle birlikte yeniden ele
    alınır; hedef CC0/PD fotoğraf (yeşil kamışsı sap + iki sıralı mızrak yaprak),
    doğrudan işleme hattından geçer. İşlenmiş suluboya adayı staging'de saklı.
7. **Adım 6/7 sırası KİLİTLİ:** önce astro-core+motor, golden fixture'lar
   yeşil, SONRA ACG (Adım 7 komutu acg-spec §8 sonunda).
8. **MapTiler:** Free plan ticari kullanım için DEĞİL → lansman öncesi Flex
   plana geçiş + attribution kontrolü (acg-spec §5; ADR §14 kalıcı kısıt).
9. **KVKK/GDPR:** doğum verisi + Claude API yurt dışı aktarımı için nitelikli
   avukat onayı yayın-öncesi listede (rapor RQ7; ADR §14 kalıcı kısıt).

## Yayın öncesi (launch-checklist eki — ana liste: roadmap Phase 9)
- KVKK aydınlatma + açık rıza metni (doğum verisi, yurt dışı aktarım) — avukat teyidi
- App Store 4.3(b) riski: fark anlatısı hazır olsun (bütünsel wellness ≠ salt astroloji);
  web-app fallback planı çekmecede
- MapTiler ticari plan + harita attribution kontrolü
- (Roadmap Phase 9'daki mevcut kalemler: TR metin polisajı, "esinlenmiştir"
  görünürlüğü, kriz kaynakları teyidi, disclaimer denetimi, AI-görsel lisans teyidi)

## Next work (sıra, ürün sahibi talimatı 2026-07-18/19)
1. **Adım 6 — Astro-core + in-house natal/transit motoru + LLM context builder.**
   Spec: `specs/astro-engine-spec.md`. Claude Code'a komut (plan mode):
   > "Adım 6'ya geç: astro-engine-spec.md'yi oku ve uygula — ortak astro-core +
   > in-house natal/transit motoru + LLM context builder. Plan mode'da önce
   > planı sun, onayımı bekle. Golden fixture'lar geçmeden Sohbet
   > entegrasyonuna geçme."
2. **Adım 7 — Astrokartografi modülü** (Adım 6 fixture'ları yeşil OLMADAN başlama).
   Spec: `specs/acg-spec.md`. Claude Code'a komut (plan mode):
   > "Adım 7'ye geç: acg-spec.md'yi oku ve uygula. Plan mode'da planı sun,
   > onayımı bekle. 12 kenar-durum fixture'ı geçmeden harita katmanına geçme."
3. **plant-safety zip'i yalnız ürün sahibi "başla" deyince açılır** (Adım 6/7'den
   bağımsız ayrı iş — aynı branch/commit'te karıştırılmaz).
