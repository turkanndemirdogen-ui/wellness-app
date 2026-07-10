# Söz Havuzu — Üretim Kuralları (v1.0 · 5 Tem 2026)

Bu dosya, `soz-havuzu.json`'u büyütecek HER oturum için bağlayıcıdır (bu sohbet, Claude Code veya başka oturum). Karar kaynağı: soz-havuzu v0.2 meta + Türkan onayları (5 Tem).

## 1 · Kaynak kuralı
- YALNIZ kamu malı yazarlar (ölüm + 70 yıl geçmiş). Beyaz liste (genişletilebilir, ekleme = Türkan onayı):
  Mevlânâ · Yunus Emre · Ömer Hayyam · Sâdî · Marcus Aurelius · Seneca · Epiktetos · Lao Tzu · Montaigne · Nietzsche · Schopenhauer · Tolstoy · Dostoyevski · Halil Cibran · Tagor · Rilke · Emily Dickinson
- Aforizma-tarzı eserler öncelikli (Avare Kuşlar, Kum ve Köpük, Düşünceler, divanlar, rubailer). Roman cümlesi bağlam ister; ancak tek başına ayakta duran cümleler alınır.
- Modern telifli kitaplar (kişisel gelişim / roman / yaşayan yazarlar) KAPSAM DIŞI — telif + intihal + marka riski (5 Tem kararı).

## 2 · Çeviri kuralı
- Yayımlı Türkçe çeviriden KOPYALAMA (çevirmen telifi). Orijinalden kendi yalın çevirimiz yapılır; iç kayda "(kendi çeviri)" yazılır.
- Yunus Emre gibi öz-Türkçe metinlerde hafif günümüzleme serbest.

## 3 · Doğrulama kuralı (en kritik)
- Satırın eserde gerçekten var olduğundan emin değilsen ALMA. "İnternette meşhur" olması kanıt değildir.
- Bilinen yasaklılar (aidiyet tartışmalı / telifli kaynak): "Yara, ışığın sana girdiği yerdir" · "Gel, ne olursan ol yine gel" (tartışmalı aidiyet) · "Şems'in 40 kuralı" (Elif Şafak romanı, TELİFLİ) · doğrulanamayan tüm "Rumi/Nietzsche internet sözleri".
- Nüsha farkı olan geleneklerde (Hayyam rubaileri) iç kayda "nüsha farkları var" notu düş.

## 4 · Atıf kuralı
- Ekranda atıf GÖRÜNMEZ (proje kuralı: kaynak atfı ekranda yok).
- Her satırın `ic_kaynak` alanı ZORUNLU: {tip: "pd"|"ozgun", eser: "Yazar, Eser, bölüm (kendi çeviri)"}.

## 5 · Özgün satır kuralı
- Meşhur satırların taklidi/yakın-çeşitlemesi yasak; özgün imge kur.
- Damar: paradoks, dönüşüm, yokluk-varlık, doğa/botanik imgesi. Teselli-düzlüğü RED (v0.1 arşivdeki düzlük hatası tekrarlanmaz).
- Marka kuralları geçerli: emir kipi yok, tıbbi iddia yok, kader iddiası yok, emoji yok.

## 6 · Format & parti akışı
- Şema: {"id","tema","metin","ic_kaynak"} — tema sözlüğü (11): sukunet, cesaret, dongu, birakma, baslangic, sabir, sefkat, denge, donusum, varolus, sevgi.
- Parti boyutu: +25–40 söz; her parti mevcut havuza karşı tekrar/benzerlik kontrolünden geçer.
- Statü: TASLAK-ONAYLI; yayın öncesi Türkan TR polisajı zorunlu (launch checklist).
- Hedef mimari: yayında ~120 söz + kod tarafında "son 90 günde tekrar yok" seçim kuralı + tema/mevsim etiketli seçim (b+c modeli — ONAYLI, 5 Tem). 365'e kademeli büyüme.

## 7 · Görev devri (5 Tem kararı)
Havuz büyütme görevi Claude Code'a devredildi. Her üretim partisi bu dosyaya bağlıdır; parti sonunda Türkan onayı alınır. Seçim mantığı (90-gün tekrar-yok, tema/mevsim ağırlığı, pro kişisel seçim) kod tarafında uygulanır.
