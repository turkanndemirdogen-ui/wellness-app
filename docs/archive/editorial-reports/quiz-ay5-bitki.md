# Rapor — quiz-ay5-bitki.json

## Düzenlenen alanlar (4)
- `arketipler.papatya.kisa` — "yatıştırmaktır" (papatyanın bilinen sağaltıcı işlevini yankılıyordu) yerine karakter dili: "sükûnettir".
- `arketipler.lavanta.kisa` — "Sakinleştirir, düzenler, ferahlatırsın" üçlüsü lavantanın sağlık işlevlerini çağrıştırıyordu; duygusal tema diliyle yeniden yazıldı.
- `arketipler.isirgan.kisa` — "en besleyici yeşilliktir" tüketim/besin çağrışımı taşıyordu; "cömert bir dosttur" yapıldı (brif: ay 5'te tüketim dili yok).
- `sorular[6].secenekler[1].metin` — "durultur um" yazım hatası düzeltildi, cümle doğallaştırıldı.

## Değiştirilmeyenler
- `_meta` (motor tablo eşleşmeleri, gezegen temsili), `glif` değerleri, arketip anahtarları, `p`/`s` puanlama ve JSON yapısı korundu (otomatik karşılaştırma ile doğrulandı).
- Bitki→gezegen eşleşmelerine dokunulmadı; sonuç metinleri karakter/sembol/duygu çerçevesinde kaldı.

## Güvenlik (Ay 5 özel kuralları)
- Bitkilere sağlık/şifa özelliği yükleyen üç ifade kaldırıldı; organ, semptom, işlev, tüketim dili çıktıda yok.
- Doz/kullanım önerisi içeren hiçbir metin yok; "kalıp değil ayna" açılışı korunuyor.

## JSON doğrulama
- `json.load`: **GEÇERLİ** — yapı/korumalı alan karşılaştırması: **TEMİZ**
