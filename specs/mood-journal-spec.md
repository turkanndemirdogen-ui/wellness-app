# Mood + Journal — Ekran & Akış Spec v1.1 (5 Temmuz 2026)

Ana Sayfa stack modülleri (AS-1 hub-and-spoke). Sohbet/haftalık-bakış veri kaynağı.
**Kilitli:** H1=b (katmanlı mood) · H2=a (serbest journal + opsiyonel AM/PM ritüel) · M-1=b (kademeli tek akış) · M-2=b (enerji + opsiyonel duygu-sözlüğü).

## 0 · Temel ilke
Mood ve Journal iki ekran değil, **tek bir günlük ritüelin kademeleridir.** Çekirdek her zaman 2 saniye (tek dokunuş); derinlik daima opsiyonel. Kural: derinliği zorunlu yapan hiçbir adım yok — Daylio'nun kazandığı yerde (sürtünmesiz giriş) kaybetmemek için.

## 1 · Akış şeması (kademeli)
```
[Ana Sayfa: "Bugün nasılsın?" kartı]
        ↓ tek dokunuş
KADEME 1 — ENERJİ (zorunlu, 1 dokunuş)  → burada BİTİREBİLİR
        ↓ opsiyonel "biraz daha?"
KADEME 2 — DUYGU SÖZLÜĞÜ (opsiyonel, 1-2 dokunuş) → burada BİTİREBİLİR
        ↓ opsiyonel "bağlam ekle"
KADEME 3 — BAĞLAM ÇİPLERİ (opsiyonel) → burada BİTİREBİLİR
        ↓ nazik davet: "Bunu biraz açmak ister misin?"
KADEME 4 — JOURNAL (opsiyonel, serbest yazı / AM-PM ritüel modu)
        ↓
[Kapanış: herbaryum eylemi tetiklenir + tek satır şefkatli kapanış]
```
Her kademe sonunda görünür "bitir" çıkışı var; kullanıcı istediği derinlikte durur.

## 2 · Veri modeli
### Kademe 1 — Enerji (yargısız eksen — KRİTİK)
- **"İyi/kötü" ekseni YOK** (beden-nötr/şefkat ihlali olurdu). Yerine yargısız hal ekseni:
  `çok yorgun · yorgun · dingin · canlı · çok canlı` (5 nokta) — bu bir "kötü→iyi" değil, bir enerji-durumu tanımı.
- Görsel: yatay, yumuşak gradyan bir bar (pudra tonları); tek dokunuşla seçim.
- Zorunlu tek alan budur.

### Kademe 2 — Duygu sözlüğü (opsiyonel)
- How We Feel'in dört-bölge mantığından esinlenip **yargısızlaştırıldı**: enerji (düşük/yüksek) × ton (huzurlu/gergin) — ama "hoş/nahoş" etiketi kullanılmaz.
- 4 nazik küme, her kümede 5-6 kelime (kullanıcı ince ayar için):
  - *Dingin-huzurlu:* sakin, huzurlu, minnettar, umutlu, sevecen, hafiflemiş
  - *Canlı-huzurlu:* neşeli, heyecanlı, ilhamlı, meraklı, güçlü, sevinçli
  - *Düşük-gergin:* yorgun, hüzünlü, boşlukta, yalnız, isteksiz, ağır
  - *Yüksek-gergin:* kaygılı, gergin, öfkeli, bunalmış, huzursuz, dağınık
- Çoklu seçim serbest (en fazla 3). Kümeler "iyi/kötü" diye sıralanmaz; renk-nötr sunulur.

### Kademe 3 — Bağlam çipleri (opsiyonel)
- Tek dokunuşluk etiketler: uyku, iş, sosyal, beden, aile, para, sağlık, hava, döngü(varsa cycle modülü aktif).
- Çoklu seçim. Haftalık-bakış deseninin ana kaynağı bu + duygu etiketleri.

### Kademe 4 — Journal
- **Serbest mod (varsayılan):** boş sayfa + tek nazik prompt-placeholder ("Bugün aklında ne var?").
- **AM/PM ritüel modu (opsiyonel toggle):**
  - Sabah: "Bugüne hangi niyetle başlıyorsun?" + "Bugün sana ne iyi gelir?"
  - Akşam: "Bugün seni ne yordu, ne besledi?" + "Yarına ne bırakıyorsun?"
  - Prompt'lar botanik/mevsim imgeli, davetkar (marka tonu).
- **"Geçen yıl bugün":** aynı tarihli eski kayıt varsa nazik hatıra kartı (hassas-işaretli kayıt gösterilmez — güvenlik filtresi).

## 3 · Ekran bölümleri (yerleşim)
- **Giriş kartı (Ana Sayfa'da):** "Bugün nasılsın?" + o günkü enerji seçilmişse mini-özet rozeti.
- **Kademe ekranları:** her biri tek odak (bir soru), bol boşluk, alt kısımda "bitir" + "biraz daha" ikili buton. Kart tabanlı, yuvarlatılmış köşe.
- **Journal ekranı:** üstte küçük bağlam (o günkü enerji/duygu rozeti — yazarken hatırlatır), altında yazı alanı, isteğe bağlı AM/PM toggle.
- **Kapanış:** tek satır şefkatli kapanış (analiz/yorum YOK — analiz haftalık bakışın işi) + herbaryum kazanım mikro-animasyonu.
- **Geçmiş görünümü:** takvim + duygu-renk noktaları (Daylio benzeri) — pro'da uzun-dönem örüntü grafiği.

## 4 · Köprüler
- **Herbaryum:** mood kaydı VE journal kaydı ayrı ayrı `earn_action` (herbaryum-spec §3). Aynı gün ilki kart, sonrası tohum dönüşümü.
- **Haftalık bakış:** enerji dağılımı + duygu etiketleri + bağlam çipleri → weekly_context.kayit_ozeti (haftalik-bakis-spec §2). Ham journal metni GİTMEZ (gizlilik); yalnız yapılandırılmış etiketler.
- **Cycle (varsa):** döngü fazı aktifse bağlam çipine "döngü" otomatik eklenebilir (kullanıcı onayıyla).

## 5 · Free / Pro
- Free: tüm giriş + geçmiş takvim + temel duygu-renk görünümü + journal (sınırsız).
- Pro: uzun-dönem örüntü grafikleri + "geçen yıl bugün" arşiv derinliği + haftalık bakış (SB-1=b).

## 6 · Güvenlik & ton
- Kapanışta ASLA yorum/teşhis yok ("bugün kaygılıydın çünkü..." YASAK — nedensellik kurma, haftalık-bakış SB-3=b kuralıyla aynı).
- Duygu kümeleri değer-yargısız; "negatif duygu" dili yok.
- Kriz sinyali (journal'da) → Sohbet kriz katmanına devir (bu spec'in dışında); kriz-kaynaklari-tr.json.
- Beden-nötr: enerji ekseni performans/başarı değil hal-tanımı.
- Tüm metinler marka tonu; emoji yok, botanik motif yeterli.

## 7 · Kabul kriterleri
- K1 Kademe 1 tek dokunuşta biter; kullanıcı diğer kademeleri atlayabilir.
- K2 Hiçbir kademe bir sonrakini zorunlu kılmaz ("bitir" her ekranda var).
- K3 Enerji ekseninde "iyi/kötü" etiketi bulunmaz (yargısız hal-tanımı).
- K4 Kapanış metni yorum/nedensellik içermez.
- K5 Journal ham metni haftalık-bakış payload'ına girmez (yalnız etiketler).
- K6 Hassas-işaretli eski kayıt "geçen yıl bugün"de gösterilmez.
- K7 Mood ve journal ayrı earn_action tetikler; günde 1 yeni-gün kartı sınırı korunur.

## 8 · Açık mikro-kararlar (varsayılanla ilerlenir)
- Enerji ekseni 5 nokta mı 3 mü (varsayılan 5).
- Duygu kümesi kelime sayısı (varsayılan 5-6/küme; TR polisajda ince ayar).
- "Geçen yıl bugün" pro-only mu yoksa free'de sınırlı mı (varsayılan: free son 1 ay, pro tam arşiv).


## 9 · PRO — Transit-bazli Icsel Kesif Sorulari (J-1=c, J-2=c)
Journal'in pro katmani: gokyuzu motoruna bagli, zihin acici icsel-kesif sorulari. AM/PM rituel modunun yaninda ucuncu bir mod.
- Uretim: hibrit — content/journal-transit-sorulari.json elle-yazilmis ton-garantili havuz; LLM yalniz aktif transite uygun temayi SECER + kullanicinin son journal temasina gore HAFIF cerceveler (yeni iddia/kehanet uretmez).
- Kapsam: donemsel (Saturn/Jupiter/Mars x natal nokta — derin) + gunluk (Ay acilari — hafif). transit_key, engine-rules trigger'iyla eslesir.
- Ton (KRITIK): her soru DAVET, asla kehanet. Format: '[transit] bu donem [tema] one cikarabilir; [acik uclu soru]'. Kesin kader dili YASAK.
- Gizlilik: LLM cerceveleme icin yalniz son journal TEMA ETIKETINI alir, ham metni degil. Soru secimi client-side de yapilabilir.
- Akis: kullanici journal'a girdiginde aktif transit varsa nazik oneri -> dokununca transit-sorusu prompt olarak acilir. Zorunlu degil.
- Gating: PRO-only.

## EK · Senkron
```
KARAR (mood+journal sohbeti, 5 Tem):
· M-1=b kademeli tek akış · M-2=b enerji(yargısız)+opsiyonel duygu-sözlüğü.
· Enerji ekseni 'iyi/kötü' DEĞİL, yargısız hal-tanımı (beden-nötr).
· Duygu sözlüğü How We Feel 4-bölge mantığından esinli, yargısızlaştırılmış.
· Mood+Journal ayrı earn_action; haftalık-bakışa yalnız etiket (ham metin değil).
· Kaynak: mood-journal-spec.md v1.0
```
