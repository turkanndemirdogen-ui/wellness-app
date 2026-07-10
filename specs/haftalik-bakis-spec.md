# Haftalık Bakış — Spec v1.0 (5 Temmuz 2026)

Sohbet sekmesinin pro özelliği (SB-1=b). Bu belge sohbet-spec'i genişletir.
**Kilitli kararlar:** SB-2=b sabit 4 blok · SB-3=b betimsel + soru (nedensel iddia yasak) · SB-4=b kademeli eşik.

## 1 · Çalışma modeli
- Üretim zamanı: pazar akşamı (kullanıcının yerel saati, varsayılan 19:00; push envanterindeki "haftalık bakış hazır" bildirimi buna bağlanır).
- Üretici: Claude API (LLM). **Blok 4 hariç** — gökyüzü satırı motorun aktif Katman-2 kuralından hazır gelir, LLM aynen yerleştirir, yeniden yazamaz.
- Yalnız pro entitlement'ta üretilir (SB-1=b).

## 2 · Veri girdi kontratı (weekly_context)
```json
{
  "mod": "tam | kisa | mini",
  "hafta": {"baslangic": "YYYY-MM-DD", "bitis": "YYYY-MM-DD"},
  "kayit_ozeti": {
    "aktif_gun_sayisi": 0,
    "mood": {"toplam": 0, "dagilim": {"etiket": 0}, "gun_baskinlari": [{"gun": "pzt", "baskin": "sakin"}]},
    "journal": {"adet": 0, "tema_etiketleri": ["ornek-etiket"]},
    "eylemler": {"earn_action_gunleri": 0, "tamamlanan_ritueller": 0},
    "dongu_fazi": null
  },
  "gokyuzu_satiri": "motor Katman-2'den seçilmiş hazır metin",
  "onceki_hafta_sorusu": null,
  "kriz_sinyali": false
}
```
**Gizlilik kuralı (kritik):** Ham journal metni LLM'e GİTMEZ. v1'de desen kaynağı = yapılandırılmış etiketler (mood etiketleri + kullanıcının seçtiği tema çipleri). Serbest metin analizi ayrı bir v1.1 kararıdır (gizlilik + token gerekçesi — dürüst sınır: v1 desenleri etiket derinliğiyle sınırlıdır).
**Eşikler (config):** aktif_gun_sayisi ≥5 → tam · 2–4 → kisa · 0–1 → mini.

## 3 · Çıktı yapısı (sabit)
1. **Haftana bakış** — 2-3 cümle; yalnız context'teki gerçek sayılar/etiketler.
2. **Öne çıkan desen** — 2-3 cümle betimleme + bağlantıyı kullanıcıya soran TEK soru. (kisa modda bu blok ATLANIR — 2-4 kayıt desen değildir.)
3. **Haftaya bir soru** — tek yansıtıcı soru; onceki_hafta_sorusu varsa nazikçe bağlanabilir ("geçen hafta şunu sormuştuk…").
4. **Gökyüzü satırı** — gokyuzu_satiri alanı BİREBİR.
5. Sabit kapanış: "Bu içerik bilgilendirme amaçlıdır, tıbbi tavsiye yerine geçmez."
Uzunluk: toplam 90–130 kelime (mini mod: tek cümle + davet, ~25 kelime).

## 4 · LLM sistem prompt şablonu (TR — Claude API'ye gider)
```
Sen bir haftalık yansıtma yazarısın. Ses: şefkatli, sakin, zemini sağlam; botanik ve mevsim
imgeleri hafifçe kullanılabilir. Emir kipi yok, öneri dili var ("alan açabilirsin").

KURALLAR (ihlal edilemez):
1. YALNIZ sana verilen weekly_context verisini kullan. Veri dışında sayı, olay, örüntü üretme.
2. Nedensel iddia kurma. Yasak kalıplar: "çünkü", "bu yüzden", "…den kaynaklanıyor",
   "…e bağlı", "…in sonucu". Bağlantıyı yalnız SORU olarak kullanıcıya bırak.
3. Teşhis/etiket dili yasak: hastalık ve bozukluk adları, "tedavi", "iyileştirir",
   "depresyondasın" tarzı adlandırma. Kullanıcının kendi kullandığı kelimeler aynen
   yansıtılabilir, klinik etikete çevrilemez.
4. Kader dili yok ("olacak", "kaçınılmaz"); genelleme yok ("her zaman", "asla").
5. Blok 4'ü (gökyüzü satırı) sana verildiği gibi, kelimesi kelimesine yerleştir.
6. mod=kisa ise Blok 2'yi tamamen atla. mod=mini ise yalnız şu kalıbı doldur:
   "Bu hafta [X] kayıt var — az kayıt da kayıttır. Yeni hafta, tek küçük bir
   not için iyi bir başlangıç olabilir." Soru ve desen üretme.
7. kriz_sinyali=true ise: Blok 2 yerine tek paragraf yumuşak destek yaz (veri
   dökümü yapma, örüntü analiz etme); Blok 3'te soru yerine "bu hafta kendine
   nazik davranmak yeterli" tonunda tek cümle; profesyonel destek seçeneğini
   nazikçe hatırlat, kesinlik ve vaat kurmadan.
8. Format: 4 sabit blok başlığı + kapanış satırı. Toplam 90–130 kelime.
```

## 5 · Güvenlik notları
- kriz_sinyali tespiti bu spec'in DIŞINDA ayrı bir sistemdir (Sohbet'in genel kriz katmanı); burada yalnız raporun davranışı tanımlıdır.
- Kriz yönlendirme metnindeki kaynak listesi (Türkiye) app-config'te tutulur — içerik kararı Türkan'da, henüz belirlenmedi (açık iş).
- Rapor hassas içerik sınıfındadır → kapanış hatırlatma satırı zorunlu.

## 6 · Kabul kriterleri
- K1 Çıktıda yasak nedensel kalıplar lint'ten geçer (regex listesi config'te).
- K2 Blok 4 = gokyuzu_satiri birebir (diff testi).
- K3 Çıktıdaki tüm sayılar weekly_context ile birebir eşleşir; fazladan sayı yok.
- K4 mod=kisa'da Blok 2 yok; mod=mini'de yalnız mini kalıp.
- K5 kriz_sinyali=true'da desen dökümü ve analiz sorusu üretilmez; destek satırı vardır.
- K6 90–130 kelime sınırı (mini ~25).
- K7 Free entitlement'ta üretim tetiklenmez.
- K8 Ham journal metni API isteğinde bulunmaz (payload denetimi).

## 7 · Açık işler
- Kriz kaynak listesi → content/kriz-kaynaklari-tr.json (v0.1, 182 teyit bekliyor).
- v1.1: serbest metin tema çıkarımı (ayrı gizlilik kararı).
- Prompt'un gerçek çıktılarla kalibrasyonu — build sonrası 3-5 örnek haftayla test.
