# Kozmos — Astro-Herbalizm Motoru & Deneyim Spec v1.0 (5 Temmuz 2026)

Projenin çekirdek farklılaştırıcısı. Ayrı sekme DEĞİL — dört-sekme kilidi korunur; Kozmos, iki sekmeye dağılan bir MOTOR KATMANIDIR:
- **Keşif sekmesi** = dışa dönük "bugünün göğü + bitki keşfi" (KS-1=b: motor free, natal-derinlik pro).
- **Ana Sayfa "Günlük Pusula"** = kişisel "senin göğün bugün" (natal-bazlı günlük kart).
Kozmos bu iki yüzü besleyen motordur.

**Kilitli:** KZ-0=dağıtık motor (ayrı sekme değil) · KZ-1=b tam doğum verisi (saat-esnek) · KZ-2=b üç ayrı katman.
**Altyapı hazır:** motor-tablo (37 bitki), cip-turetme-kurallari, engine-rules (40 kural), engine-config.

## 0 · EN KRİTİK GÜVENLİK DUVARI — agent_only içerik
- 46 kaynağın 7'si `agent_only` (Hill patoloji/beden-tipleri, Heindel astro-teşhis, Millard vaka notları, Paracelsus sempatik şifa, astrology-of-depression, astrology-of-weight-loss).
- Bu metinler motoru KALİBRE eder (agent "ne söylememesi gerektiğini" öğrenir) ama kullanıcıya **ASLA** çıkmaz.
- **Fail-closed kural:** visibility alanı eksik/belirsiz kaynak → agent_only varsayılır.
- Kozmos deneyimi bu duvarın üstünde durur: hiçbir çıktı hastalık-astrolojisi, beden-teşhisi, "şu gezegen şu hastalığı getirir" içeriği üretmez. Bu, medikal-astroloji tuzağından yapısal kaçış.

## 1 · Girdi akışı (KZ-1=b, saat-esnek)
```
[Onboarding / Kozmos girişi]
 1. Doğum TARİHİ (zorunlu) → güneş burcu + temel çalışır
 2. Doğum SAATİ (opsiyonel — "saati bilmiyorum" seçeneği belirgin)
 3. Doğum YERİ (saat girildiyse) → tam natal harita
```
- ⚠ **Onboarding riski çözümü (KRİTİK):** Türkiye'de doğum saatini bilmeyen oranı yüksek (cüzdanda yok). Saat ZORUNLU DEĞİL. "Saati bilmiyorum" → güneş-bazlı deneyim çalışır; saat gerektiren katmanlar (Asc, ev, Ay-derece açıları) nazikçe kilitli kalır + "saatini öğrenirsen daha kişisel olur" nazik notu. Tam natal HEDEF ama GİRİŞ ENGELİ DEĞİL.
- Hesap: Swiss Ephemeris (K4-3=b, kendi hesap; fizibilite Claude Code'da). Doğum verisi izole tutulur (D1.2, KVKK, Frankfurt).
- Veri gizliliği: doğum verisi hassas → ayrı tablo, şifreli; kullanıcı silebilir.

## 2 · İşleme (motor)
- Natal harita + günlük transit → engine-config kuralları (açı/orb) → aktif engine-rules kuralları.
- Kural tetiklenince → user_text_variants (sembolik metin) + ilgili gezegen → motor-tablo → o gezegenin bitkileri.
- Saat yoksa: yalnız güneş + yavaş transitlerin güneşe açısı (Katman-2 kısmi) çalışır; Ay-derece açıları (Katman-1b) ve Asc kuralları beklemede.

## 3 · Çıktı — ÜÇ AYRI KATMAN (KZ-2=b, sözde-tıbbi nedensellik YASAK)
Günün kartı, görsel olarak AYRI ama tek kompozisyonda akan üç blok:

**🌙 Blok 1 — Bugünün Göğü (sembolik)**
- Gökyüzü metin motorundan (engine-rules user_text_variants). Davetkar, kader-dilsiz.
- Örnek: "Ay bugün Yengeç'te — iç dünyana ve sana iyi gelenlere alan açabilirsin."

**🌿 Blok 2 — Gök/Mevsim Bitkisi (geleneksel çerçeve)**
- O günün baskın gezegeninin/mevsiminin bitkisi (motor-tablo + mevsim parlama).
- Dil: "geleneksel olarak ... ile ilişkilendirilir". Doz/tüketim YOK. Herbaryum kartına köprü.
- Örnek: "Bugünün müttefiki: Papatya — geleneksel olarak dinginlikle ilişkilendirilir."

**📖 Blok 3 — Kanıt Notu (varsa, ayrı)**
- YALNIZCA kanıtı olan bitkilerde; kanıt-düzeyli, ayrı blok. Yoksa blok görünmez.
- Sembolik ve kanıt AKIŞI ASLA BİRLEŞMEZ (marka kuralı + senin en katı ilken).

**❌ YASAK (yapısal):** "Satürn karaciğerini etkiliyor, o yüzden şu bitkiyi kullan" gibi gök→beden→bitki NEDENSEL köprü. Bloklar yan yana durur; nedensel bağı kullanıcı kendi kurar (dürüst olan). "Bu gezegen bu hastalığı/organı etkiler" dili YOK (agent_only duvarı).

## 4 · Keşif ↔ Ana Sayfa dağılımı
- **Ana Sayfa (Günlük Pusula):** yukarıdaki 3-blok günün kartı, kişisel (natal-bazlı). Kısa, tek ekran.
- **Keşif:** aynı motor, keşif modu — bugünün göğü + mevsimin bitkileri + filtreyle gezinme (gezegen/element/beden-bölge filtreleri, cip-turetme-kurallari). Natal-derinlik (senin haritan bu bitkiyle nasıl ilişkileniyor) = pro.
- Tek motor, iki bağlam: "bana özel bugün" (Ana Sayfa) vs "keşfedilecek gök" (Keşif).

## 5 · Free / Pro
- **Free:** güneş-bazlı günlük gök + mevsim bitkisi + Keşif motoru/filtreler (KS-1=b).
- **Pro:** tam natal derinlik (transit→natal açı yorumları, Katman-1b/2 kişisel) + natal-bitki ilişki katmanı + geçmiş/gelecek transit takibi.
- Saat yoksa pro bile güneş-sınırlı (veri kısıtı, gating değil — dürüst iletilir).

## 6 · Güvenlik & ton
- agent_only duvarı (§0) merkezi.
- Sembolik çerçeve: "öne çıkarabilir", kader-kesinliği yok.
- Bitki: "geleneksel olarak ilişkilendirilir", doz yok.
- Sözde-tıbbi nedensellik yasağı (§3).
- Hassas kapanış (bitki/beden değinilen kartlarda): "Bu içerik bilgilendirme amaçlıdır, tıbbi tavsiye yerine geçmez."
- Marka tonu; emoji yok; blok ikonları (🌙🌿📖) yalnız spec-içi işaret, UI'da botanik motif.

## 7 · Kabul kriterleri
- K1 Doğum saati ZORUNLU DEĞİL; "saati bilmiyorum" ile güneş-bazlı deneyim tam çalışır.
- K2 Çıktı üç ayrı blok; sembolik ve kanıt akışı aynı blokta birleşmez.
- K3 Gök→beden→bitki nedensel köprü hiçbir çıktıda kurulmaz (lint + inceleme).
- K4 agent_only kaynak içeriği hiçbir kullanıcı çıktısına sızmaz; visibility eksik → agent_only.
- K5 Hastalık adı / beden-teşhisi / "gezegen X organını etkiler" dili yok.
- K6 Doğum verisi izole tabloda, şifreli, silinebilir (KVKK).
- K7 Saat yoksa saat-gerektiren katmanlar kilitli + nazik bilgilendirme (ceza-dili değil).
- K8 Bitki bloğu herbaryum kartına köprü verir; doz/tüketim dili yok.

## 8 · Açık işler / Claude Code
- Swiss Ephemeris fizibilite + natal/transit hesap (K4-3=b, mevcut açık iş).
- engine-rules ↔ motor-tablo ↔ mevsim-haritasi entegrasyon motoru.
- agent_only duvarının RAG katmanında teknik uygulaması (visibility filtresi, fail-closed).
- Onboarding "saati bilmiyorum" akışı tasarımı.

## 9 · Açık mikro-kararlar (varsayılanla ilerlenir)
- Saat yoksa Asc yerine "güneş burcu yükselen gibi" yaklaşımı mı (varsayılan: hayır, dürüstçe kilitli tut — sahte veri üretme).
- Günlük kartta 3 blok hep mi görünür yoksa kanıt-bloğu koşullu mu (varsayılan: kanıt bloğu koşullu, diğer ikisi hep).
- Natal-bitki ilişki katmanı v1'de mi v1.1'de mi (varsayılan: v1.1, önce günlük kart).

## EK · Senkron
```
KARAR (kozmos sohbeti, 5 Tem):
· KZ-0=dağıtık motor (ayrı sekme DEĞİL; Keşif + Ana Sayfa'ya dağılır, 4-sekme kilidi korunur).
· KZ-1=b tam natal ama SAAT-ESNEK ("saati bilmiyorum" → güneş-bazlı; onboarding engeli değil).
· KZ-2=b üç ayrı katman (sembolik / bitki / kanıt); gök→beden→bitki NEDENSEL köprü YASAK.
· agent_only duvarı merkezi: 7 kaynak kullanıcıya asla çıkmaz; visibility eksik → agent_only (fail-closed).
· Motor: Swiss Ephemeris (K4-3=b). Doğum verisi izole/şifreli (D1.2 KVKK).
· Kaynak: kozmos-motor-spec.md v1.0 + motor-tablo + engine-rules + cip-turetme-kurallari
```
