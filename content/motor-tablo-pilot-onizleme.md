# Motor Tablo Pilot — Önizleme & Açılış Kartı (v0.1)

**Tarih:** 2026-07-05 · **Kapsam:** 12 bitki pilot · **Kaynak dosya:** `content/motor-tablo-pilot.json`
**Kararlar:** P1 = çoğunluk + çelişki notu + veto · P2 = birincil raf = botanik kimlik

> ⚠ **Üç dürüstlük işareti (build öncesi kapanmalı):**
> 1. **Gezegen atamaları** frekans + kimlik yorumundan türedi — FİNAL DEĞİL, veto içindir.
> 2. **`mevsim` alanı** 46 astrolojik kaynakta yok; genel bahçıvanlık bilgisiyle geçici (`dogrulanamadi_vault_disi`). Botanik kaynak doğrulaması şart.
> 3. **`enerjetik/tat/beden`** yalnız kaynakta görünürse dolduruldu; kalanı `provisional`.

---

## Raf yerleşim tablosu

| Bitki | Raf (birincil) | İkincil | Beden | Güvenlik | Kaynak | Durum |
|---|---|---|---|---|---|---|
| Papatya ⭐ | **Ay** | Mars | mide, sinir-uyku | temiz¹ | 17 | çelişki notu (eşitlik) |
| Rezene | **Merkür** | Ay, Venüs | sindirim, nefes | temiz¹ | 18 | net |
| Zencefil | **Mars** | Satürn | sindirim, dolaşım | temiz¹ | 18 | çelişki notu |
| Karahindiba | **Jüpiter** | Satürn | karaciğer, böbrek | temiz¹ | 16 | net |
| Nane | **Merkür** | Mars | sinir, nefes, sindirim | temiz¹ | 16 | ⚠ kırılgan (Mars frekansı yüksek) |
| Biberiye | **Güneş** | Satürn, Mars | kalp, sinir | temiz¹ | 15 | net |
| Isırgan | **Mars** | Satürn | kan, kas-eklem | temiz¹ | 15 | net |
| Melisa | **Merkür** | Ay | sinir, sindirim | temiz¹ | 14 | çelişki notu (Ay güçlü) |
| Lavanta | **Merkür** | Satürn | sinir, nefes | temiz¹ | 13 | net |
| Adaçayı | **Jüpiter** | Merkür, Güneş | nefes, karaciğer | **T3** ⚠ | 13 | ⚠⚠ EN KIRILGAN (üçe bölünmüş) |
| Atkuyruğu | **Satürn** | — | kas-eklem, böbrek | temiz¹ | 9 | net (tek güçlü Satürn) |
| Sarı Kantaron | **Güneş** | Satürn | sinir, deri | **T2** ⚠ | 9 | net + 🌙 kozmik |

¹ "temiz" = contraindications.json T-listesinde kayıt yok → `app_safe=true`. **Listede yok ≠ sıfır risk** (ör. papatya-ragweed alerjisi, zencefil-antikoagülan etkileşimi vault'ta yok; eklenmesi senin kararın).

---

## Veto masası — öncelikli 4 karar

**1. Adaçayı → Jüpiter mi?** (en zayıf) Kaynaklar Jüpiter (karaciğer-kan) / Merkür (solunum-sinir) / Güneş (kalp) diye üçe bölünmüş. Jüpiter'e "fazlalık giderici" bağlamıyla ince üstünlük verdim ama zayıf. **Alternatifler:** Merkür (solunum kimliği) · Güneş.

**2. Nane → Merkür mi Mars mı?** Ham frekans Mars (20) diyor ama kaynaklar naneyi sinir-sistemi için Merkür grubuna yazıyor. Kimlik yorumu Merkür seçti; frekans yorumu Mars derdi. Senin çağrın.

**3. Papatya → Ay** (açılış kartı) Mars=Ay eşit; Mars ilişkisel (serinletici) olduğu için Ay'a gitti. Onaylıyor musun?

**4. Melisa → Merkür** Ay ikincil çok güçlü. Duygusal-yatıştırma kimliğini öne alırsan Ay'a çevrilebilir.

**Kozmik bonus:** Sarı Kantaron gündönümünde açar → `kozmik_olay: gundonumu`. İlk "Gece Açanlar" nadir kartı. Onaylıyor musun?

---

## ⭐ AÇILIŞ KARTI — Papatya (tam metin örneği)

Bu, `herb_detail` ekranının bahce-spec alanlarıyla doldurulmuş halidir. Tonu kalibre etmek için — beğenirsen bu şablonla 12'yi de yazarım. **Türkçe son polisaj senin.**

### Ön yüz (kompakt kart · paylaşılabilir yüzey)
- **İsim:** Papatya
- **Glif/raf:** ☾ Ay Rafı
- **tek_satir:** *"Ay'ın yatıştıran nefesi; telaşı yavaşlatmaya çağıran çiçek."*
  *(sembolik, davetkar, iddiasız — paylaşım görselinde görünen tek metin budur)*

### Arka yüz / detay (`herb_detail`)

**story_narrative:**
> Papatya, geleneksel bitki kültüründe Ay'ın çevresinde toplanan yatıştırıcı bitkiler arasında anılır — akşamın, dinlenmenin ve suların bitkisi. Küçük ve sade görünür; telaşın karşısına sessiz bir duruşla çıkar.
>
> Eski metinlerde, aşırı ısınmış ve gerilmiş bir doğayı serinletmeye çağrılan bir bitki olarak da geçer; bu yönüyle hem yumuşaklığın hem de dengelemenin sembolü sayılmıştır.

**ritual** *(niyet/gözlem/bakım — tüketim/hazırlama ASLA):*
> Akşam, papatya illüstrasyonuna bakarken üç yavaş nefes al. Günün taşıdığın telaşını, her nefes verişte biraz daha bırakmaya niyet et. İstersen bir papatyayı pencere kenarında büyüt; ona bakışın, güne verdiğin küçük bir molanın işareti olsun.

**guvenlik_etiketi:** *(papatya T-listesinde olmadığı için çip yok; yalnız genel hatırlatma)*
- Detay ekranı sonu sabit satır: *"Bu içerik bilgilendirme amaçlıdır, tıbbi tavsiye yerine geçmez."*

**kanit_koprusu (pro · ayrı blok):** — pilot aşamada boş; kanıt akışı sembolik metinle asla aynı blokta olmayacak (kilitli kural). Doldurulursa "geleneksel kullanım / kanıt düzeyi belirsiz" çerçevesinde.

---

### Ton kontrol (kendi çıktımın öz-denetimi)
- ✅ "tedavi eder / iyileştirir" yok · doz/hazırlama yok · hastalık adı yok
- ✅ "geleneksel olarak anılır" çerçevesi · sembolik-davetkar
- ✅ ritual = gözlem/niyet/bakım (çay yapma değil)
- ✅ paylaşılan yüzeyde yalnız iddiasız tek_satir
- ⚠ Kişisel not: papatya-ragweed alerji uyarısı eklemek istersen, bu karta değil `guvenlik` alanına + detay çipine girer.
