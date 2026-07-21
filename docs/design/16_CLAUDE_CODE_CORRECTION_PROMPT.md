# CLAUDE CODE — CANONICAL CORRECTION PROMPT

Proje köküne şu belgeyi ekle:

`docs/design/15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md`

Bu belge artık `docs/design/00–14` dosyalarının üzerinde en yüksek öncelikli kaynaktır.

Önce dosyayı tamamen oku. Ardından mevcut audit ve Phase 1 planını buna göre düzelt.

## İptal edilen önceki kararlar

1. 5 tab önerisi
2. Mood/Journal/Plants’in ana tab olması
3. `Fraunces + Inter only`
4. Genel UI’ın akşam tamamen koyulaşması
5. Toksik bitkilerin metadata ile ürün envanterinde kalabilmesi

## Yeni kilitler

- Yalnızca 4 ana tab: Ana Sayfa, Keşif, Bahçe, Sohbet
- Mood, Cycle, Skin Care, Journal, Astrology, Rituals ve Plants alt ekran
- Ana UI açık krem-pudra
- Koyuluk yalnız görsel panellerde
- Fraunces/Lora/Caveat/Playfair + System UI font rolleri
- WCAG AA ve minimum 44px touch target
- Ekran başına 1–2 animasyonlu öğe, scale maksimum 1.02
- Reduced Motion’da ambient animasyonlar tamamen durur
- Toksik bitkiler yalnız estetik/tarihsel/sembolik referans
- Tıbbi iddia/doz/tanı/garanti yok
- Astrolojide kesin kader dili yok
- İlk anlamlı sonuç free; Pro yalnız derinlik ve gelişmiş özellik açar

## Implementation öncesi güncelle

1. `VISUAL_AUDIT_REPORT.md`
2. `MIGRATION_FILE_MAP.md`
3. `PHASE_1_IMPLEMENTATION_PROPOSAL.md`
4. `14_CLAUDE_CODE_MASTER_INSTRUCTION.md`

`14` numaralı belgede öncelik sırasına `15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` dosyasını en üste ekle.

00–14 belgelerindeki çelişkili metinleri topluca silme; `15` belgesinin override ettiğini not et.

## Çıktı

Bana şunları bildir:

1. Güncellenen audit dosyaları
2. 4 tab mimarisine etkiler
3. Font dependency düzeltmesi
4. Atmosphere/chrome düzeltmesi
5. Toxic plant exclusion etkisi
6. Free/Pro teaser component ihtiyacı
7. Phase 1 değişen kesin dosya listesi
8. Yeni riskler
9. Phase 1 GO/NO-GO

Bu düzeltme tamamlanmadan Phase 1 implementation’a başlama. Commit veya push yapma.
