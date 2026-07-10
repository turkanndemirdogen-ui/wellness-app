---
id: millard-casenotes-rapor
kaynak_dosya: millard-casenotes-rapor.md
baslik: "Casenotes of a Medical Astrologer (Millard) — Sınır (Fence-off) Raporu"
tema: [medikal-astroloji]
guven_tier: ""   # TASLAK
riskli_madde: []
orijinal_format: md
---

# Casenotes of a Medical Astrologer (Millard) — Sınır (Fence-off) Raporu

> **Eser:** *Casenotes of a Medical Astrologer* — Margaret Millard
> **Modül:** ⚠ App DIŞI. Kullanılabilir sistematik veri yok.
> **Dürüst not:** Bu kaynak, pratisyen bir medikal astroloğun **gerçek hasta vaka öykülerinden** oluşur (kanser, ameliyat, ölüm). Çerçevesi "horoskoptan hastalık teşhisi/prognozu." Şimdiye kadarki en riskli ve en az kullanılabilir kaynak. Bu rapor bir **sınır belgesidir.**

## 1. ⚠ Neden app dışı

| İçerik | Neden dışarıda |
|---|---|
| **Gerçek hasta vaka öyküleri** | Kanser/ameliyat/ölüm içeren hassas kişisel tıbbi anlatılar; app içeriğine dönüşmez |
| **Teşhis/prognoz çerçevesi** | "Hastalık haritada görülür"; haritadan kanser/ölüm yordaması — yanlış ve zarar verici; app **asla** yapmaz |
| **Kanser/ölüm prognozu** | En tehlikeli kesişim; kullanıcıya korku/yanlış inanç yaratır |
| **Ameliyat zamanlaması (paranlar, Ay burcu)** | App tıbbi prosedür zamanlaması önermez |
| **OCR bozuk (glyphless)** | Güvenilir veri çıkarımı zaten mümkün değil |

> Hiçbir içerik yeniden paketlenmedi. Tüm kaynak `app_safe: false`.

## 2. Kullanılabilir sistematik veri: yok

Kitap kendisi "burç-hastalık listelerini vermeyeceğim, vaka-temelliyim" der. Sistematik melothesia/gezegen-bitki tablosu sunmaz. İçerdiği standart melothesia parçaları zaten kasada **çok-kaynaklı doğrulanmış** (Raphael, Ebû Maşer, Sepharial, Heindel, Ebertin) — bu kaynak yeni veri katmaz.

## 3. Tek soyut not (yeniden çerçeveli)

Girişteki tek genel fikir, "bedenin enerjilerini **dengeleyemeyen** kişi" temasıdır — bu, kasada zaten var olan **denge ilkesiyle** örtüşür (eksik karşıt enerjiyi nazikçe ekle). App'te yalnız beden-nötr öz-bakım olarak; teşhis/prognoz olarak değil. Yeni bir şey katmaz.

## 4. Öneri

Bu kaynağı **içerik üretiminde kullanma.** Vault'a alınacaksa yalnızca "işlendi, app dışı" kaydı olarak; referans değeri yok.

---

## Veri Katmanı (makine-okur)

```yaml
meta:
  rapor_id: millard-casenotes
  eser: "Casenotes of a Medical Astrologer"
  yazar: "Margaret Millard"
  modul: app_disi
  herbalizm_verisi: yok
  sistematik_veri: yok
  ocr_kalitesi: bozuk_glyphless
  durust_not: "en riskli/en az kullanılabilir kaynak; tümüyle fence-off"

app_disi:   # app_safe: false — yeniden paketlenmedi
  app_safe: false
  - gercek_hasta_vaka_oykuleri   # kanser/ameliyat/ölüm; hassas
  - teshis_prognoz_cercevesi
  - kanser_olum_prognozu
  - ameliyat_zamanlamasi_paran_ay_burcu

kullanilabilir_veri: none
melothesia_notu: "yeni veri yok; kasada zaten çok-kaynaklı doğrulanmış"
tek_soyut_not: "denge ilkesi (zaten kasada var); yalnız beden-nötr öz-bakım, teşhis değil"
oneri: "içerik üretiminde KULLANMA; yalnız 'işlendi, app dışı' kaydı"
```
