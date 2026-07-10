# Skincare — Ekran & Akış Spec v1.0 (5 Temmuz 2026)

Ana Sayfa stack modülü. Veri: `skincare-ingredients.json` v2.1 (41 bileşen, kanıt-düzeyli, kürasyonlu).
**Kilitli:** S-1=c (hibrit: cilt-konusu ansiklopedi + rutin kurucu + bileşen sorgu) · S-2=a (kanıt-düzeyi rozeti, yargısız).

## 0 · Temel ilke — yargı değil şeffaflık
Yuka bir *yargı makinesidir* ("bu ürün kötü"). Bu modül bir *bilgi ve şeffaflık aracıdır* ("bu bileşenin kanıt düzeyi bu, cilt tipinle uyumu bu, şununla karıştırma"). Yargı vermek marka kuralını (teşhis/tavsiye yok) çiğnerdi; kanıt-şeffaflığı kuralın birebir uygulamasıdır — kullanıcı kendi kararını verir, modül eğitir, bağımlı kılmaz.

## 1 · Üç giriş (hibrit)
```
[Skincare ana ekran]
 ├── A· CİLT KONUSU → konu seç (akne/leke/kuruluk...) → ilgili bileşenler + rutin
 ├── B· RUTİN KURUCU → sabah/gece adımlarını kur, uyumsuzluk uyarısı al
 └── C· BİLEŞEN SORGU → tek bileşen ara ("retinol") → kartını gör
```
⚠ Not (tasarım düzeltmesi): C = TEK BİLEŞEN arama, INCI-liste yapıştırma DEĞİL. 41-bileşenlik havuzla INCI eşleştirme çoğu üründe "eşleşme yok" verir → hayal kırıklığı. Tek-bileşen arama verinin gücünü tam kullanır, sıfır hayal kırıklığı.

## 2 · A · Cilt Konusu Ansiklopedisi
- Kullanıcı `skin_concerns`'ten seçer (11 konu: akne, leke, yaşlanma, kızarıklık, kuruluk, yağlılık, hassasiyet, bariyer, güneş koruması, gözenek, egzama).
- Ekran: o konuyu `treats` alanında içeren bileşenler listelenir, **kanıt düzeyine göre sıralı** (strong → moderate → limited).
- Her bileşen kartı:
  - İsim (TR; en/la yalnız iç eşleştirme, gösterilmez)
  - **Kanıt rozeti:** Güçlü / Orta / Sınırlı kanıt (renk-nötr etiket)
  - Çerçeve dili: "geleneksel/klinik olarak ... için tercih edilir" (yargı yok)
  - `mechanism` (nasıl çalışır, sade), `what_to_expect`, `timeline`
  - Güvenlik satırları (§4)
- Alt: konu-bazlı rutin önerisi (routine_rules'tan).

## 3 · B · Rutin Kurucu
- Kullanıcı sabah/gece adımlarını seçer (bileşen kartlarından ekle).
- Motor kontrolü (routine_rules + do_not_mix):
  - Sıra kuralı: "Sabah: antioksidan → nemlendirici → SPF (son adım, şart). Gece: aktif (retinoid VEYA asit, ikisini birlikte değil) → nemlendirici."
  - ⚠ Uyumsuzluk uyarısı: iki bileşen `do_not_mix` ise nazik uyarı ("Retinol ve AHA'yı aynı gece kullanmak cildi zorlayabilir; farklı gecelere alabilirsin"). Yargı değil, bilgi.
  - `application_order` alanına göre otomatik sıralama önerisi.
- Çıktı: kullanıcının kişisel sabah/gece rutini (kaydedilir).

## 4 · Güvenlik entegrasyonu (kritik — veri zaten hazır)
Her bileşen kartında, ilgili alanlar varsa:
- **`pregnancy.status = avoid`** → belirgin uyarı çipi + `pregnancy.text` (ör. retinoidler: "Gebelik/emzirmede kaçın; alternatif: bakuchiol"). Bu güvenlik-kritik, gizlenmez.
- **`photosensitivity`** → "gündüz SPF şart / gece kullan" uyarısı.
- **`do_not_mix`** → karıştırma uyarısı (rutin kurucuda aktif).
- Sabit kapanış (hassas içerik): "Bu içerik bilgilendirme amaçlıdır, tıbbi tavsiye yerine geçmez. Cilt sorunu, gebelik veya ilaç durumunda dermatoloğa danışın." (meta.framing ile uyumlu)
- Belirti/hastalık dili YOK: "akne tedavi eder" değil "akne konusunda geleneksel/klinik olarak tercih edilir".

## 5 · Herbaryum köprüsü (özgün sinerji)
- Botanik kökenli bileşenler (bakuchiol, çay ağacı, centella, niacinamide değil ama bitkisel olanlar) `skincare-ingredients.json`'da işaretliyse → o bileşenin herbaryumda ilgili bitki kartı varsa nazik köprü ("Bu bileşen [bitki] kaynaklı — bahçende kartı var").
- ⚠ Doğrulanacak: skincare-ingredients ile motor-tablo bitki eşleşmesi haritalanmalı (kaç bileşen botanik + herbaryumda mevcut). Açık iş.

## 6 · Free / Pro
- Free: cilt-konusu ansiklopedi (tam) + bileşen sorgu + temel rutin kurucu.
- Pro: kaydedilen çoklu rutin + rutin geçmişi/takibi + (varsa) cilt-günlüğü ile mood korelasyonu + kişiselleştirilmiş bileşen önerisi.
- Not: çekirdek bilgi FREE (marka: eğitim bağımlı kılmaz); pro = kişiselleştirme/takip.

## 7 · Herbaryum eylem bağı
- Rutin işaretleme (sabah/gece "yaptım") = `earn_action` (herbaryum-spec §3). Ansiklopedi/sorgu okuma eylem DEĞİL (araç kullanımı).

## 8 · Güvenlik & ton
- Kanıt rozeti = şeffaflık, yargı değil ("sınırlı kanıt" damgalamak değil bilgilendirmektir).
- "iyi/kötü ürün", puan, sıralama-yargısı YOK.
- Gebelik/fotosensitivite uyarıları gizlenmez (güvenlik > estetik).
- Tüm görünür metin TR; marka tonu; emoji yok; botanik motif.
- evidence_urls yalnız iç referans (kullanıcıya gösterilmez, ama "kanıt düzeyi" onlardan türer — dürüstlük).

## 9 · Kabul kriterleri
- K1 Bileşen kanıt düzeyi rozetle gösterilir; sıralama kanıt düzeyine göre.
- K2 "tedavi eder/iyileştirir" dili hiçbir yerde yok (lint).
- K3 pregnancy.status=avoid bileşenlerde uyarı çipi zorunlu görünür.
- K4 do_not_mix çiftleri rutin kurucuda uyarı tetikler.
- K5 Bileşen sorgu = tek bileşen arama; INCI-liste yapıştırma yok.
- K6 en/la isimler kullanıcıya gösterilmez (yalnız iç eşleştirme).
- K7 Rutin işaretleme earn_action tetikler; okuma tetiklemez.
- K8 Her cilt-konusu ekranında sabit tıbbi-tavsiye hatırlatması.

## 10 · Açık işler
- skincare-ingredients ↔ motor-tablo botanik eşleştirme haritası (§5 köprü).
- pregnancy alanı olmayan bileşenlerin gözden geçirilmesi (dermatolog teyidi — launch checklist).
- TR polisaj (mekanizma metinleri sade mi).

## EK · Senkron
```
KARAR (skincare sohbeti, 5 Tem):
· S-1=c hibrit (cilt-konusu ansiklopedi + rutin kurucu + bileşen sorgu).
· S-2=a kanıt-düzeyi rozeti (yargısız; Yuka-puan modeli REDDEDİLDİ).
· Bileşen sorgu = TEK bileşen arama, INCI-yapıştırma DEĞİL (hayal kırıklığı önlendi).
· Güvenlik: pregnancy/photosensitivity/do_not_mix veride HAZIR, uyarı olarak gösterilir.
· Rutin işaretleme = earn_action. Çekirdek bilgi free, kişiselleştirme pro.
· Kaynak: skincare-spec.md v1.0 + skincare-ingredients.json v2.1
```
