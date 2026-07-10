---
id: heindel-astro-diagnosis-rapor
kaynak_dosya: heindel-astro-diagnosis-rapor.md
baslik: "Astro-Diagnosis (Heindel) — Melothesia Katmanı & Teşhis Çerçevesi Sınırı"
tema: [medikal-astroloji]
guven_tier: ""   # TASLAK
riskli_madde: []
orijinal_format: md
---

# Astro-Diagnosis (Heindel) — Melothesia Katmanı & Teşhis Çerçevesi Sınırı

> **Eser:** *Astro-Diagnosis: A Guide to Healing* — Max Heindel & Augusta Foss Heindel (Rosicrucian Fellowship)
> **Modül:** 🌿 Herbalizm/medikal-astroloji kasası — yalnız **melothesia (burç→beden bölgesi)** katmanı için. Mood için nazik öz-bakım çerçevesi.
> **⚠️ Kritik:** Kitabın çekirdek amacı "**horoskoptan hastalık teşhisi**". Bu çerçeve ve burçlara **özgül hastalık atıfları** (frengi, cüzzam vb.) app'e **girmez.** Kullanılabilir olan yalnız beden-bölgesi korelasyonu ve nazik mizaç→öz-bakım yeniden çerçevesidir.

## 1. ⚠️ Neden teşhis çerçevesi app'e girmez

| İçerik | Neden dışarıda |
|---|---|
| "Horoskoptan hastalık teşhisi" (kitabın amacı) | App **asla** natal haritadan hastalık teşhis/yordamaz; tıbbi tanı değil |
| Burç → özgül hastalık (frengi, cüzzam, verem, kalp hastalığı...) | Damgalayıcı, korkutucu, geçersiz; kullanıcıya "burcun şu hastalığa yatkın" denmez — **tablo olarak yeniden üretilmedi** |
| Rosicrucian "şifa departmanı" / uzaktan-absent healing | Tıbbi tedavi olarak app'e girmez |
| İlaçsız/tıp-karşıtı ima | App tıbbi bakımdan caydırmaz |

> Hastalık-atıf tablosu YAML'da yalnız "var olduğu" not edilerek `app_safe: false` ile işaretlendi; **burç→hastalık eşlemesi olarak çıkarılmadı.**

## 2. Kullanılabilen: Melothesia (burç → beden bölgesi)

Standart melothesia; kasadaki Raphael/Ebû Maşer/Sepharial raporlarıyla **tutarlı** ve onları doğruluyor. App'in astro-semptom özelliğinde **sembolik beden-farkındalık** katmanı olarak kullanılır (tanı değil, `gelenek`).

| Burç | Beden bölgesi (Heindel) |
|---|---|
| Koç | Baş, beyin (serebral hemisferler), üst çene, gözler, yüz |
| Boğa | Boyun, kulaklar, gırtlak, bademcik, tiroid, ses telleri, karotis/juguler |
| İkizler | Kollar, eller, omuzlar, akciğerler, timus, bronşlar, kanın oksijenlenmesi |
| Yengeç | Mide, diyafram, göğüsler, karaciğer üst lobu, pankreas, kanın serumu |
| Aslan | Kalp, sırt (dorsal omurga), omurilik, aort |
| Başak | Karın bölgesi, ince/kalın bağırsak, karaciğer alt lobu, dalak, sempatik sinir sistemi |
| Terazi | Böbrekler, adrenaller, bel (lumbar), cilt, üreterler, vazomotor sistem |
| Akrep | Mesane, üretra, üreme organları, rektum, burun |
| Yay | Kalçalar, uyluklar, femur, sakral omurga, siyatik sinir, iliak arterler |
| Oğlak | Dizler, cilt, eklemler, saç |
| Kova | Alt bacaklar, ayak bilekleri, dolaşım |
| Balık | Ayaklar, parmaklar, kanın fibrini |

## 3. Kullanılabilen: mizaç → nazik öz-bakım (yeniden çerçeve)

Kitap her burç için mizaç/eğilim verir. Bunlar **tanı değil**, nazik öz-farkındalık olarak çerçevelenebilir (mood modülü).

| Burç eğilimi (Heindel) | Beden-nötr öz-bakım reframe |
|---|---|
| Oğlak: "hüzün/karamsarlık eğilimi sağlığı etkiler" | Nazik ruh-hali farkındalığı; kapanma yerine bağlantı (yargısız) |
| Kova: "sinirlilik, sınırını aşana dek zorlanma" | Dinlenme/sınır koyma nudge'ı; aşırı yüklenmeyi fark etme |
| Koç: "enerji, aşırılık, ısı" | Keyifli hareket + hidrasyon; aşırı tempoyu dengeleme |
| Yengeç/su: "düşük vitalite, hassasiyet" | Besleyici rutin, duygusal şefkat |

> İlke: gezegen/burç mizacı yalnız **içerik tonu + nazik öz-bakım** seçer; "şu hastalığa yatkınsın" demez.

## 4. App entegrasyonu

| Modül | Bağlantı | Guardrail |
|---|---|---|
| Astro-semptom (herbalizm) | Melothesia beden-bölgesi katmanını doğrular/zenginleştirir | Sembolik; tanı yok |
| Mood | Mizaç→nazik öz-bakım reframe | Yargısız; tanı yok |
| İçerik | Burç beden-bölgesi temalı eğitici içerik | "Hastalık yatkınlığı" dili yok |

## 5. Sınırlamalar

| Konu | Not |
|---|---|
| Teşhis çerçevesi | Kitabın amacı app'e uygun değil; fence-off |
| Hastalık atıfları | Damgalayıcı/korkutucu; tablo olarak üretilmedi |
| Ezoterik şifa | Rosicrucian absent-healing tıbbi tedavi değil; app dışı |
| Melothesia | Kasadaki diğer raporlarla tutarlı; doğrulayıcı değer |
| Klinik | Tanı/tedavi değil; sembolik beden-farkındalık düzeyi |

---

## Veri Katmanı (makine-okur)

```yaml
meta:
  rapor_id: heindel-astro-diagnosis
  eser: "Astro-Diagnosis: A Guide to Healing"
  yazar: "Max Heindel & Augusta Foss Heindel"
  gelenek: rosicrucian_medikal_astroloji
  modul: herbalizm_kasasi_melothesia
  hassasiyet: orta_yuksek
  durust_not: "kitabın çekirdeği 'horoskoptan teşhis'; o çerçeve ve hastalık atıfları app dışı"

app_disi:   # app_safe: false
  app_safe: false
  - horoskoptan_hastalik_teshisi_cercevesi
  - burc_ozgul_hastalik_atiflari   # frengi/cüzzam/verem vb. — eşleme olarak ÜRETİLMEDİ
  - rosicrucian_absent_healing_tibbi_tedavi
  - ilacsiz_tip_karsiti_ima
  not: "burç→hastalık tablosu kasıtlı olarak çıkarılmadı"

melothesia:   # app_safe: true, sembolik beden-farkındalık (tanı değil)
  app_safe: true
  etiket: gelenek
  - { burc: koc,    bolge: [bas, beyin, ust_cene, gozler, yuz] }
  - { burc: boga,   bolge: [boyun, kulaklar, girtlak, bademcik, tiroid, ses_telleri] }
  - { burc: ikizler, bolge: [kollar, eller, omuzlar, akcigerler, timus, bronslar] }
  - { burc: yengec, bolge: [mide, diyafram, gogusler, karaciger_ust_lob, pankreas] }
  - { burc: aslan,  bolge: [kalp, dorsal_omurga, omurilik, aort] }
  - { burc: basak,  bolge: [karin, bagirsaklar, karaciger_alt_lob, dalak, sempatik_sinir] }
  - { burc: terazi, bolge: [bobrekler, adrenaller, bel, cilt, ureterler, vazomotor] }
  - { burc: akrep,  bolge: [mesane, uretra, ureme, rektum, burun] }
  - { burc: yay,    bolge: [kalcalar, uyluklar, femur, sakral_omurga, siyatik] }
  - { burc: oglak,  bolge: [dizler, cilt, eklemler, sac] }
  - { burc: kova,   bolge: [alt_bacaklar, ayak_bilekleri, dolasim] }
  - { burc: balik,  bolge: [ayaklar, parmaklar, kan_fibrini] }
  not: "kasadaki Raphael/Ebû Maşer/Sepharial melothesia'sıyla tutarlı — doğrulayıcı"

mizac_oz_bakim_reframe:   # app_safe: true, mood; tanı değil
  app_safe: true
  - { burc: oglak, egilim: "hüzün/karamsarlık eğilimi", reframe: "nazik ruh-hali farkındalığı; kapanma yerine bağlantı" }
  - { burc: kova,  egilim: "sinirlilik, aşırı zorlanma", reframe: "dinlenme/sınır; aşırı yüklenmeyi fark etme" }
  - { burc: koc,   egilim: "enerji, aşırılık, ısı",     reframe: "keyifli hareket + hidrasyon; tempo dengesi" }
  - { burc: yengec, egilim: "düşük vitalite, hassasiyet", reframe: "besleyici rutin, duygusal şefkat" }

app_entegrasyon:
  astro_semptom: "melothesia beden-bölgesi doğrulama/zenginleştirme (sembolik)"
  mood: "mizaç→nazik öz-bakım reframe (yargısız)"
  icerik: "burç beden-bölgesi temalı eğitici içerik; 'hastalık yatkınlığı' dili yok"
```
