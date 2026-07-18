# Wellness App — Project Checkpoint

**Son güncelleme:** 2026-07-18

## Current repository state
- Root repository: `wellness-app/`
- Mobile repository: `wellness-app/mobile/`
- Active mobile branch: `master` (sprint branch'i kapandı)
- Latest merged master: `bacfadf` — Sprint 2.2A (PR #3, squash)
- Önceki kilometre taşları: Phase 1 `657a30d` · Home B1–B6 `5268064`
- Current Sprint: **Sprint 2.2A KAPANDI (2026-07-18)** — sıradaki iş: ACG paketi (aşağıda)

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

## Next work (sıra, ürün sahibi talimatı 2026-07-18)
1. **ACG paketi:** `acg-uygulama-paketi.zip` aç; iki spec → `specs/`;
   "added-specialties and new module astrocartography" klasörüyle karşılaştır
   ve klasörü arşivle; `ACG-UYGULAMA-NOTU.md` + `guncelleme-bloklari.md` köke.
   `guncelleme-bloklari.md` ONAY OLMADAN UYGULANMAZ.
2. `ARCHITECTURE_DECISIONS.md` ve `KALINAN-YER.md` konum/halef raporu.
3. **plant-safety zip'i yalnız ürün sahibi "başla" deyince açılır.**
