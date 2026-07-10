---
id: daath-medical-astrology-rapor
kaynak_dosya: daath-medical-astrology-rapor.md
baslik: "Medical Astrology (Heinrich Daath) — Doğrulayıcı Melothesia + Yönetim Tablosu"
tema: [medikal-astroloji]
guven_tier: ""   # TASLAK
riskli_madde: []
orijinal_format: md
---

# Medical Astrology (Heinrich Daath) — Doğrulayıcı Melothesia + Yönetim Tablosu

> **Eser:** *Medical Astrology* — Heinrich Daath (1914)
> **Modül:** 🌿 Herbalizm/medikal-astroloji kasası — melothesia + gezegen yönetimi katmanı.
> **Değeri:** Klasik, sistematik (vaka değil). Ağırlıklı **doğrulayıcı** — kasadaki melothesia ve gezegen yönetimlerini teyit eder; temiz bir geleneksel **yönetim (rulership) tablosu** ve gezegen-eylem anahtar sözcükleri sağlar.
> **⚠️ Sınır:** "Zodiaco-planetary hastalık sinopsisi" (burç/gezegen→hastalık) ve teşhis çerçevesi ("we may diagnose...") app'e **girmez.** OCR kısmen bozuk.

## 1. Anatomik melothesia (doğrulayıcı)

Kasadaki Raphael/Ebû Maşer/Sepharial/Heindel/Ebertin ile **birebir tutarlı.**

| Burç | Beden bölgesi (Daath) |
|---|---|
| Koç | Baş |
| Boğa | Boyun, boğaz |
| İkizler | Kollar, akciğerler |
| Yengeç | Göğüs boşluğu, göğüsler |
| Aslan | Kalp, sırt |
| Başak | Karın, umbilikal bölge |
| Terazi | Böbrekler, bel (lumbar) |
| Akrep | Üreme organları |
| Yay | Kalçalar, uyluklar |
| Oğlak | Dizler |
| Kova | Baldırlar, ayak bilekleri |
| Balık | Ayaklar, parmaklar |

> Daath bu dizilimi "zodyak ilerleyişi baştan ayağa" olarak betimler — app'in eğitici içeriği için temiz bir anlatım.

## 2. Geleneksel gezegen yönetimi (temiz tablo, chart mantığı için)

App'in natal-chart hesaplama mantığında kullanılabilecek standart **swakshetra** (yönetim) tablosu:

| Gezegen | Yönettiği burç(lar) |
|---|---|
| Güneş | Aslan |
| Ay | Yengeç |
| Merkür | İkizler, Başak |
| Venüs | Boğa, Terazi |
| Mars | Koç, Akrep |
| Jüpiter | Yay (+ Balık, geleneksel) |
| Satürn | Oğlak (+ Kova, geleneksel) |
| Uranüs | Kova |
| Neptün | Balık |

## 3. Gezegen-eylem anahtar nitelikleri

Daath her gezegene bir "eylem niteliği" verir — app'in gezegen-temalı içerik tonunu zenginleştirir.

| Gezegen | Eylem niteliği |
|---|---|
| Güneş | Vital (yaşamsal) |
| Ay | Lenfatik |
| Satürn | Kronik |
| Jüpiter | Besleyici (nutritive) |
| Mars | İnflamatuar |
| Uranüs | Spazmodik |

> (OCR'dan okunabilen kısım; Venüs/Merkür/Neptün nitelikleri bozuk çıktı, eklenmedi.)

## 4. Sempati / antipati ilkesi

Daath, tedavi mantığında **sempati** (zayıf gezegeni kendi enerjisiyle destekle) ve **antipati** (aşırı gezegeni karşıt enerjiyle dengele) ilkesini kullanır — kasadaki Raphael/Ebû Maşer ile aynı denge mantığı. App'in "eksik karşıt enerjiyi ekle" çerçevesiyle tutarlı.

## 5. ⚠️ Çizgi dışı

| İçerik | Neden |
|---|---|
| Burç/gezegen → hastalık sinopsisi | App hastalık teşhis/atfetmez; tablo olarak üretilmedi |
| Teşhis çerçevesi ("we may diagnose...") | App haritadan teşhis yapmaz |
| Toksik/ağır tıbbi atıflar | Filtreli; app dışı |

## 6. App entegrasyonu & sınırlar

| Modül | Bağlantı |
|---|---|
| Astro-semptom | Melothesia doğrulama (sembolik) |
| Chart mantığı | Temiz geleneksel yönetim tablosu |
| İçerik | Gezegen-eylem nitelikleri + "baştan ayağa" anlatım |

| Sınırlama | Not |
|---|---|
| Çoğunlukla doğrulayıcı | Yeni katman yok; teyit değeri |
| OCR bozuk | Bazı bölümler güvenilir çıkmadı |
| Hastalık sinopsisi | Fence-off |
| Klinik | Tanı/tedavi değil; sembolik |

---

## Veri Katmanı (makine-okur)

```yaml
meta:
  rapor_id: daath-medical-astrology
  eser: "Medical Astrology"
  yazar: "Heinrich Daath"
  yil: 1914
  modul: herbalizm_kasasi
  rol: dogrulayici + yonetim_tablosu
  ocr_kalitesi: kismen_bozuk

melothesia:   # app_safe: true, doğrulayıcı
  app_safe: true
  etiket: gelenek
  - { burc: koc, bolge: [bas] }
  - { burc: boga, bolge: [boyun, bogaz] }
  - { burc: ikizler, bolge: [kollar, akcigerler] }
  - { burc: yengec, bolge: [gogus, gogusler] }
  - { burc: aslan, bolge: [kalp, sirt] }
  - { burc: basak, bolge: [karin, umbilikal] }
  - { burc: terazi, bolge: [bobrekler, bel] }
  - { burc: akrep, bolge: [ureme] }
  - { burc: yay, bolge: [kalcalar, uyluklar] }
  - { burc: oglak, bolge: [dizler] }
  - { burc: kova, bolge: [baldirlar, ayak_bilekleri] }
  - { burc: balik, bolge: [ayaklar, parmaklar] }
  not: "kasadaki diğer melothesia kaynaklarıyla birebir tutarlı"

gezegen_yonetimi:   # app_safe: true, chart mantığı
  app_safe: true
  - { gezegen: gunes, burc: [aslan] }
  - { gezegen: ay, burc: [yengec] }
  - { gezegen: merkur, burc: [ikizler, basak] }
  - { gezegen: venus, burc: [boga, terazi] }
  - { gezegen: mars, burc: [koc, akrep] }
  - { gezegen: jupiter, burc: [yay, balik] }
  - { gezegen: saturn, burc: [oglak, kova] }
  - { gezegen: uranus, burc: [kova] }
  - { gezegen: neptun, burc: [balik] }

gezegen_eylem_niteligi:   # OCR'dan okunabilen
  - { gezegen: gunes, nitelik: vital }
  - { gezegen: ay, nitelik: lenfatik }
  - { gezegen: saturn, nitelik: kronik }
  - { gezegen: jupiter, nitelik: besleyici }
  - { gezegen: mars, nitelik: inflamatuar }
  - { gezegen: uranus, nitelik: spazmodik }

sempati_antipati: "sempati=zayıf gezegeni destekle; antipati=aşırı gezegeni karşıtla dengele (kasayla tutarlı)"

app_disi:   # app_safe: false
  app_safe: false
  - burc_gezegen_hastalik_sinopsisi
  - teshis_cercevesi

sinirlamalar:
  rol: "çoğunlukla doğrulayıcı; yeni katman yok"
  ocr: "bazı bölümler güvenilir çıkmadı"
  klinik: "tanı/tedavi değil; sembolik"
```
