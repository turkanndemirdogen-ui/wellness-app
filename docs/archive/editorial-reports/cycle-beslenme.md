# Rapor — cycle-beslenme.json

## Düzenlenen alanlar (8)
- "alan açmak" kalıbı (5 yerde) — `_meta`'nın istediği davetkâr, kısıtlamasız dil korunarak doğal Türkçe eşdeğerlerle değiştirildi: "sofranda yer vermek", "yer vermek", "yönelmek". Kısıtlama/emir dili eklenmedi; işlev aynı kaldı.
- `fazlar.kis.sembolik` — emir kipindeki "Kendine nazik ol" kalıbı, davet tonuna çevrildi ("hiçbir şeye yetişmek zorunda değilsin").
- `fazlar.yaz.sembolik` — "öz-güvenin" → "özgüvenin" (yazım); "doğal bir alan olabilir" ifadesi akıcılaştırıldı.
- `fazlar.sonbahar.sembolik` — "sindirim zamanı" tek başına organ/işlev çağrışımı yapabiliyordu, "hasadı sindirme" metaforuna bağlandı; emir kipindeki "Kendine karşı ekstra şefkatli ol" davet cümlesine çevrildi.

## Değiştirilmeyenler
- `_meta` (kaynak ayrımı, beden-nötr güvenlik kuralları, sabit kapanış metni), `klinik`, `gunler`, `kanit` etiketleri, blok yapısı (sembolik/araştırma/ayurveda/GÇT ayrımı) korundu (otomatik karşılaştırma ile doğrulandı).
- Ayurveda ve GÇT metinlerindeki "geleneğinde... anılır / geleneksel bir yaklaşımdır" çerçevesi aynen korundu; gelenek bilimsel gerçek gibi sunulmuyor.
- Sabit kapanış `_meta.sabit_kapanis` içinde; dokunulmadı.

## Güvenlik
- Kesin talimat ("şunu ye", "kaçın", "mutlaka") yok; kalori/gram/porsiyon dili eklenmedi.
- Tıbbi iddia yok; araştırma bloklarındaki temkinli kipler ("desteklenir", "artabilir", "incelenmiştir") aynen korundu.
- Yeme davranışı hassasiyeti gözetildi; davet tonu güçlendirildi.

## JSON doğrulama
- `json.load`: **GEÇERLİ** — yapı/korumalı alan karşılaştırması: **TEMİZ**
