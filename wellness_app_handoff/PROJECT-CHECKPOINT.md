# Wellness App — Project Checkpoint

**Son güncelleme:** 2026-07-22

## Current repository state
- Root repository: `wellness-app/` — tasarım arşiv temizliği `1a8a121` (superseded
  tasarım belgeleri + design-prova → `docs/archive/design-tarihce/`; kalıcı telif
  dosyası `docs/legal/ASSET-LICENSES.md` oluşturuldu)
- Mobile repository: `wellness-app/mobile/`
- Active mobile branch: `master` (feat/p1-foundations merge'lendi)
- Latest merged master: `189a380` — Görsel Kimlik P1 foundations (PR #4, squash)
- Önceki kilometre taşları: Sprint 2.2A `bacfadf` · Phase 1 `657a30d` · Home B1–B6 `5268064`
- Current Sprint: **Görsel Kimlik P1 (foundations) MERGE'LENDİ (2026-07-22, PR #4)** ·
  Sprint 2.2A kapandı (2026-07-18) · ACG paket yerleşimi + guncelleme-bloklari
  uygulaması tamam (2026-07-19, ADR §14) — sıradaki iş: Adım 6 (aşağıda)

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
10. **Görsel Kimlik P1 sonrası kalanlar (13 faz planı, P2+):** ekran/bileşen
    migrasyonu P1 kapsamı DIŞINDA kaldı (foundations yalnız temel katman;
    ekranlar hâlâ legacy `Spacing`/tema yolunda) · UI ikon kütüphanesi kararı
    (audit önerisi Lucide RN + react-native-svg; karar verilince lisans kaydı
    `docs/legal/ASSET-LICENSES.md`'ye işlenir) · ay fazı 8 SVG asset'i (4→8 faz
    veri genişlemesi astro sağlayıcı sözleşmesine dokunur — Adım 6 ile koordine) ·
    production paywall ekranı (`ProTeaser` yalnız contract).
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
