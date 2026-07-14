# Rapor — bitki-kartlari-master.json

## Düzenlenen alanlar (40 alan, 26 kart)
Brifin zorunlu güvenlik kuralı ("tüm organ, semptom, işlev ve kullanım çağrışımlarını çıkar") dosya genelinde uygulandı:

### Çıkarılan organ/beden sözcükleri
- **mide, nefes** (rezene) · **karaciğer** (karahindiba, devedikeni, hindiba) · **sindirim, nefes** (nane, anason) · **kalp** (biberiye) · **kan** (ısırgan) · **sinir, nefes** (lavanta) · **boğaz, ses** (adaçayı) · **kemik, iskelet, mineral** (atkuyruğu) · **cilt** (aynısefa) · **soluk** (kekik) · **sinir, uyku** (kediotu) · **uyku** (lavanta, ıhlamur, marul, şerbetçiotu).

### Çıkarılan işlev fiilleri/sıfatları
- "yatıştıran/yatıştırıcı" (papatya, hatmi, marul, ıhlamur) · "arındıran/arınma" (karahindiba, adaçayı, maydanoz, hindiba) · "sakinleştiren" (melisa) · "besleyici/beslemek" (ısırgan) · "serinletici, yumuşatıcı" (menekşe) · "ferahlatıcı" (anason) · "canlandıran" (fesleğen) · "temizleyici" (hindiba ritüeli) · "etkileşken" (sarı kantaron).

### Çıkarılan kullanım/tüketim izleri
- "gül suyu" (gül) · "yastık dolguları" (şerbetçiotu) · "acı tadı" (hindiba) · "sofraya" (marul, fesleğen).

### Ayrıca
- "esen olmak" sağlık etimolojisi (adaçayı) çıkarıldı; "yer aç" klişesi (gül ritüeli) "zaman ayır" yapıldı.
- Tüm kartlar gezegen, element, kültürel sembol, karakter ve duygu üzerinden anlatılmaya devam ediyor; her kartın özgün duygusal rengi (cesaret, tevazu, tatlı hüzün, sabır, neşe...) korundu veya netleştirildi.

## Değiştirilmeyenler
- `_meta`, tüm `herb_id` değerleri, kart sırası ve JSON yapısı birebir korundu (otomatik karşılaştırma: 37 kart, yapı TEMİZ).
- Adaçayı, sarı kantaron, sığırkuyruğu, meşe, aslanpençesi kartlarındaki "güvenlik notu vardır" yönlendirmeleri aynen korundu.
- Zencefil, civanperçemi, sarımsak, tarçın, ceviz, mürver, nilüfer, söğüt, sığırkuyruğu, meşe, aslanpençesi kartları zaten sembolik/karakter dilinde olduğundan dokunulmadı (11 kart değişiksiz).
- Ritüellerdeki "üç yavaş nefes al" gibi ifadeler kullanıcının kendi nefes egzersizidir, bitkiye işlev yüklemez; korundu. Hiçbir ritüelde bitki tüketimi/hazırlığı yok (koklama ve hayal etme dahil değil).
- Mitolojik/tarihsel atıflar (Akhilleus, gündönümü, meşale, simyacılar) mevcut ihtiyatlı çerçevede bırakıldı; yeni bilgi eklenmedi.

## Doğrulama tarama sonucu
- Yasaklı terim taraması (grep) çıktı üzerinde çalıştırıldı; kalan tüm eşleşmeler yanlış pozitif ("yaprakları"→"arın", "koruyucu"→"uyucu" gibi) veya kullanıcı nefes egzersizleri.

## JSON doğrulama
- `json.load`: **GEÇERLİ** — yapı/korumalı alan karşılaştırması: **TEMİZ**
