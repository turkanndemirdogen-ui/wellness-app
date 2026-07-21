# 06 — BOTANICAL & CELESTIAL ART DIRECTION

**Durum:** CANONICAL SUPPORTING SPECIFICATION  
**Sürüm:** 1.0 — V1 için kilitli

## 1. Ana yön

Görsel dil:

> Bilimsel botanik doğruluğu, çağdaş editoryal doğa estetiği ve kontrollü kozmik atmosfer.

Dağılım:

- %40 botanik editoryal gerçekçilik
- %25 çağdaş dijital doğa fotoğrafçılığı
- %20 bilimsel botanik illüstrasyon
- %10 kozmik soyutlama
- %5 fantastik ışık

## 2. Botanik asset sınıfları

### Scientific Botanical

- Tür tanımaya uygun
- Morfolojik doğruluk öncelikli
- Yaprak, çiçek, gövde ve büyüme biçimi doğru
- Bilimsel içerik ve taxonomy alanlarında kullanılır

### Editorial Botanical

- Gerçek tür görünümünü korur
- Kompozisyon, ışık ve atmosfer eklenebilir
- Hero, feature card ve Garden için kullanılır

### Symbolic Botanical

- Tarihsel, mitolojik veya sembolik anlatı için
- Tür kimliğiyle karıştırılmaz
- Production metadata içinde `symbolic` olarak işaretlenir

## 3. Bitki veri zorunlulukları

Her önemli bitki için:

- Türkçe ortak ad
- İngilizce ortak ad
- Kabul edilmiş bilimsel ad
- Familya
- Kullanılan bölüm
- Görsel türü
- Morfoloji doğrulama durumu
- Görsel kaynak/lisans
- Toksisite durumu
- Sembolik kullanım durumu

## 4. Kart üzerinde zorunlu metin

Küçük kart:

```text
Papatya
Matricaria chamomilla
```

Detay ekranı:

```text
Papatya
Matricaria chamomilla
ASTERACEAE
Kullanılan bölüm: Çiçek
```

## 5. Görsel doğruluk kuralları

- Gerçek çiçek rengi korunur.
- Yaprak formu doğru olmalıdır.
- Aynı generik çiçek farklı bitkilere atanmaz.
- AI görseli botanik doğrulamadan production’a alınmaz.
- Görsel yoksa yanlış görsel yerine silhouette/typographic placeholder kullanılır.
- Toksik bitkiler sevimli wellness bitkisi gibi sunulmaz.
- Bitkinin farmakolojik kullanım iddiası görsel dekorasyonla güçlendirilmez.

## 6. Renk ilişkisi

Bitki UI paletine uyarlanmaz; UI bitkinin gerçek rengine uyarlanır.

Örnekler:

- Calendula → turuncu/altın
- Borage → mavi
- Hypericum → sarı
- Rosemary → koyu yeşil / açık mavi
- Artemisia → gümüşi yeşil
- Saffron → mor çiçek / kırmızı stigma
- Chamomile → beyaz / sarı / yeşil

## 7. Garden art direction

Garden:

- Çocuk oyunu bahçesi değildir.
- Gerçek bitki çeşitliliği içerir.
- Yollar, gölgeler, su, taş, toprak ve mevsim dokusu bulunur.
- Collectible ve bakım öğeleri sınırlı glow ile gösterilir.
- Bitkiler gerçek ölçek ilişkisini tamamen kaybetmez.
- Gün döngüsüne göre ışık değişir.
- Peri figürü, kawaii mantar veya oyuncak dekor kullanılmaz.

## 8. Celestial art direction

Celestial katman:

- Gerçek veri ile decorative atmosfer ayrılır.
- Planet orbit animasyonu gerçek veri iddiası taşımıyorsa `ambient` olarak etiketlenir.
- Natal chart ve transit chart temiz, veri odaklıdır.
- Nebula, star field ve halo düşük opaklıkta kullanılır.
- Kozmik görseller botanik içeriği bastırmaz.

## 9. Görsel yoğunluk

- Utility: dekorasyon minimum
- Editorial: tek güçlü botanik vurgu
- Immersive: katmanlı hero
- Ceremonial: kısa süreli reveal

## 10. Asset oranları

Önerilen oranlar:

- Hero landscape: `16:10`
- Feature card: `4:3`
- Plant card portrait: `4:5`
- Plant thumbnail: `1:1`
- Journal image: `3:2`
- Garden wide scene: `16:9`
- Ritual cover: `4:5`

## 11. Crop kuralları

- Tür tanımlayıcı özellik crop dışında kalmaz.
- Bitkinin bilimsel detayını kapatan decorative overlay kullanılmaz.
- İnsan eli/nesne varsa bitkiyi gizlemez.
- Hero crop küçük ekranda ayrıca QA edilir.

## 12. Dynamic art

Allowed:

- Yaprakta mikro nefes
- Hafif ışık geçişi
- Orbit on tap
- Dusk ambience
- Ritual reveal
- Water refraction
- Seasonal garden variation

Not allowed:

- Sürekli sallanan tüm bitkiler
- Her ekranda particle yağmuru
- Sürekli dönen tüm gezegenler
- Çiçek patlaması
- Confetti
- Hızlı zoom/parallax

## 13. Asset metadata

```json
{
  "assetId": "plant-matricaria-chamomilla-editorial-01",
  "scientificName": "Matricaria chamomilla",
  "commonNameTr": "Papatya",
  "family": "Asteraceae",
  "assetType": "editorial-botanical",
  "morphologyVerified": true,
  "plantPartsShown": ["flower", "leaf", "stem"],
  "colorAccuracy": "verified",
  "toxicityContext": "none",
  "sourceStatus": "licensed",
  "symbolicEnhancement": false
}
```

## 14. Yasaklar

- Tüm bitkileri mor/pembe yapmak
- Generik mor çiçek kullanmak
- Tür adı olmadan önemli bitki kartı
- AI botanik görselini doğrulamadan kullanmak
- Çocuk kitabı peri estetiği
- Her görselde kristal
- Her görselde iksir şişesi
- Data chart arkasında yoğun nebula
- Görsel ve gerçek veri arasında belirsizlik

## 15. Kilitlenen karar

V1 art direction: **scientifically grounded botanical realism + restrained celestial atmosphere**.
