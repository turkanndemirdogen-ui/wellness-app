# Rapor — quiz-ay4-element.json

## Düzenlenen alanlar (5)
- `sonuc_sablonu` — "(Bitkin: ...)" ifadesi "yorgun" anlamına çekilebiliyordu; koleksiyon köprüsündeki yerleşik kalıba uygun olarak "(Senin bitkin: ...)" yapıldı. Yer tutucular ({A}, {A_glif}, {A_bitki}) aynen korundu.
- `arketipler.toprak.tek_satir` — "insanların bastığı güvenli zemin" → "insanların güvenle bastığı zemin" (akıcılık).
- `arketipler.toprak.derin_ek` — "değişime de toprağını aç" muğlaktı; toprak metaforu içinde fikir taşıyan bir cümleyle değiştirildi.
- `arketipler.su.kisa` — "arındırırsın" (sağlık/şifa çağrışımlı fiil) yerine nötr "yumuşatırsın".
- `arketipler.su.derin_ek` — "her duyguyu emmek" ifadesi doğallaştırıldı (sünger imgesi açık yazıldı).

## Değiştirilmeyenler
- `_meta`, `glif` sembolleri, `bitki` kodları, `p`/`s` puanlama, soru/seçenek sırası ve JSON yapısı korundu (otomatik karşılaştırma ile doğrulandı).
- Soru ve seçenek metinleri kısa, canlı ve doğal olduğundan dokunulmadı.

## Güvenlik
- "Kalıp değil ayna" açılışı korunuyor; elementler sembolik çerçevede kalıyor.
- Kişiye "arındırma" gibi sağaltım fiilleri yüklenmesi kaldırıldı.

## JSON doğrulama
- `json.load`: **GEÇERLİ** — yapı/korumalı alan karşılaştırması: **TEMİZ**
