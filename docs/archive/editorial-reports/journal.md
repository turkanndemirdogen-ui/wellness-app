# Rapor — journal.json

## Düzenlenen alanlar (8)
- `modes[0].ne` — "/" işaretli telegrafik ifade doğal cümleye; "artırır" → "destekler" (iddia ölçülü tutuldu).
- `modes[1].nasil` — brifin işaret ettiği "Dil bilgisini dert etme" ve "anlam-yapımı" jargonu doğal Türkçeye taşındı; anlam korundu.
- `modes[1].not` — "DİKKAT... = ruminasyon, faydasız" telegrafik güvenlik notu, içeriği eksiltilmeden sıcak ve açık bir dille yeniden yazıldı (geçici sıkıntı uyarısı + perspektif kaydırma önerisi duruyor).
- `prompts[2]` ve `prompts[4]` — "/" kalıbı ve "dil bilgisini dert etme" doğallaştırıldı.
- `practice_rules.sure/siklik/bicim` — Pro kullanıcıya görünen kural metinleri doğal cümlelere çevrildi; "daha uzun daha iyi DEĞİL" vurgusu anlam kaybı olmadan korundu.

## Değiştirilmeyenler
- `meta`, `evidence_levels`, `evidence_level`, `evidence_urls`, `kategori` anahtarları, `sure` (modes içindeki dakika değerleri) korundu (otomatik karşılaştırma ile doğrulandı).
- `practice_rules.anti_ruminasyon` uygulama yönlendirme talimatı niteliğinde; dokunulmadı.
- `safety` bloğu (travma, kriz, yönlendirme) uygulama davranış talimatı; CLAUDE.md güvenlik kuralı gereği aynen korundu.

## Güvenlik
- Terapi vaadi verilmedi; "iyi oluşu artırır" ifadesi "destekler"e yumuşatıldı.
- Travma/geçici sıkıntı uyarıları içerik kaybı olmadan duruyor; kullanıcı zorlayıcı yazmaya teşvik edilmiyor.

## JSON doğrulama
- `json.load`: **GEÇERLİ** — yapı/korumalı alan karşılaştırması: **TEMİZ**
