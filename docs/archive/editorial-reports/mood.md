# Rapor — mood.json

## Düzenlenen alanlar (10)
- `emotions[3].label_tr` — "ilhamlı" → doğal Türkçe "ilham dolu".
- `factors[6].ad` — "Hava" (hava/air olarak da okunuyordu) → "Hava durumu".
- `regulation[0]` (Duyguyu Adlandırma) — "spesifik kelime" jargonu doğallaştırıldı; 'name it to tame it' için Türkçe karşılık eklendi ("adını koy, yatışsın"); adımlardaki "(granülerlik)" tasarım jargonu kullanıcı metninden çıkarıldı; "ruminasyon" terimi Türkçe açıklamayla korundu.
- `regulation[2]` (Kabul) — "(en güçlü olumlu ilişki)" kullanıcı için anlaşılmaz araştırma notuydu, açık cümleyle yazıldı; "≠" sembollü not doğal cümleye çevrildi.
- `regulation[3]` (Davranışsal Aktivasyon) — "Düşük mood'da" anglicismi ve "(depresif çöküşte etkili)" klinik tınısı yumuşatıldı; bilimsel çerçeve ve etki iddiası büyütülmeden korundu.
- `regulation[5]` (Öz-Şefkat) — "distres" jargonu → "iç sıkıntısı".

## Değiştirilmeyenler
- `meta`, `evidence_levels`, `emotion_model`, tüm `id`, `valence`/`arousal`, `evidence_level` ve `evidence_urls` alanları korundu (otomatik karşılaştırma ile doğrulandı).
- `safety` bloğu: içerik kullanıcı ekran metni değil, uygulama davranış talimatı niteliğinde; CLAUDE.md'nin "güvenlik alanlarına dokunma" kuralı gereği aynen korundu. Kriz yönlendirme içeriği eksiltilmedi.
- `ne_zaman` alanları görünürlüğünden emin olunamadığı için değiştirilmedi.
- Duygu etiketlerinin geri kalanı doğal olduğundan korundu; "hayal kırıklığına uğramış" uzun ama doğru ve doğal, ince ayrım (granülerlik) ilkesi gereği bırakıldı.

## Güvenlik
- Klinik/tanı dili eklenmedi; mevcut klinik tınılı iki ifade yumuşatıldı, bilimsel çerçeve korundu.
- Duygular romantize edilmedi, küçümsenmedi.

## JSON doğrulama
- `json.load`: **GEÇERLİ** — yapı/korumalı alan karşılaştırması: **TEMİZ**
