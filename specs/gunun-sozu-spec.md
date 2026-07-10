# Günün Sözü — Kart Mekaniği Spec v1.0 (5 Temmuz 2026)

Ana Sayfa "Daily Compass" bloğunun bir parçası. Veri: `soz-havuzu.json` (92 söz, temalı) + `soz-uretim-kurallari.json`.
**Kilitli:** H4=a tek kart · GS-1=b çevirmeli kart · GS-2=b paylaş+favori · GS-3=a atıfsız (kaynak görünmez) · seçim mimarisi 90-gün tekrar-yok + tema/mevsim (b+c, önceden onaylı).

## 0 · Temel ilke
Günün sözü küçük bir günlük ritüel: kapalı kartı açmak, tek nazik jest. "I am" modelinin özü — estetik-paylaşılabilir kart + kişisel koleksiyon. Amaç motivasyon-bombardımanı değil, sakin bir günlük dokunuş.

## 1 · Kart durumu & akış
```
[Ana Sayfa: kapalı kart — "Bugünün sözü seni bekliyor"]
        ↓ dokun
[Kart açılır/çevrilir (yumuşak animasyon) → söz belirir]
        ↓
[Açık kart: söz + 2 aksiyon (paylaş · favori) — O GÜN AÇIK KALIR]
        ↓ ertesi gün
[Yeni kapalı kart]
```
- **Tasarım düzeltmesi (bıkkınlık önleme):** kart bir kez açılınca o gün açık kalır (tekrar kapanmaz). Gün içinde Ana Sayfa'ya dönünce sözü açık görür. Ertesi gün yeni kapalı kart. Ritüel korunur, tekrar-açma sıkıcılığı önlenir.
- Animasyon: yumuşak flip/fade (görsel kit: yumuşak, sert geçiş yok). Kart arkası botanik motif (pudra palet).

## 2 · Söz seçimi (mimari hazır)
- **Seçim kuralı:** 90-gün tekrar-yok (son 90 günde gösterilen söz tekrar gelmez) + tema/mevsim ağırlığı. Otorite: soz-uretim-kurallari §6 + Claude Code seçim mantığı.
- **Free:** global günlük söz (herkese o gün aynı — sosyal paylaşımda "aynı söz" ortak deneyimi).
- **Pro:** tema-bazlı kişisel seçim (kullanıcı sevdiği temaları seçer: sükunet/cesaret/dönüşüm... → o temalardan ağırlıklı). + mevsim-duyarlı seçim.
- ⚠ Kaynak-tipi görünmez (GS-3=a): usta ve özgün sözler kullanıcıya AYNI görünür; `ic_kaynak` yalnız iç kayıt.

## 3 · Etkileşim (GS-2=b)
### Paylaş
- Kartı R1.5 paylaşım şablon hattında paylaş (story 9:16 + kare 1:1).
- **İçerik: YALNIZCA söz + app filigranı.** Kaynak/atıf GÖRÜNMEZ (GS-3=a, ekran-atıfsız kuralı). Usta sözü de özgün söz de atıfsız paylaşılır.
- Görsel: pudra palet, botanik motif, zarif serif — sosyal fabrika estetiğiyle birebir (Instagram çift kullanım).

### Favori (kaydet)
- "Favorilere ekle" → kullanıcının kişisel söz koleksiyonu.
- Favoriler ekranı: kaydedilen sözler listesi (kart görünümü), tekrar paylaşılabilir.
- Geri-dönüş sebebi: "bana dokunan sözler" arşivi.
- ⚠ Favori sayısı: free sınırlı mı (örn. son 20) yoksa sınırsız mı — mikro-karar (varsayılan: free sınırsız, basitlik; koleksiyon bir bağlılık aracı, kısıtlamak marka-dışı).

## 4 · Herbaryum & modül bağı
- Sözü açmak/okumak eylem DEĞİL (görüntüleme; herbaryum-spec §3 gereği). Favori/paylaşım da eylem değil (araç kullanımı).
- Not: mood/journal gibi "kazanım eylemleri"nden ayrı; günün sözü atmosfer/ritüel katmanı, retention çekirdeği değil.

## 5 · Free / Pro
- Free: günlük global söz + çevirmeli kart + paylaş + favori (sınırsız).
- Pro: tema-bazlı kişisel seçim + mevsim-duyarlılık + (opsiyonel) favori koleksiyonundan haftalık "senin temaların" özeti.

## 6 · Güvenlik & ton
- Sözler zaten havuz kurallarından geçmiş (marka tonu, iddia yok). Kart bağlamı ek metin üretmez.
- Motivasyon-baskısı yok: "bugün şunu yapmalısın" değil, sadece söz sunulur.
- Emoji yok; tek botanik motif yeterli (görsel kit).
- Paylaşım görselinde app filigranı; kaynak atfı yok.

## 7 · Kabul kriterleri
- K1 Kart kapalı gelir; dokununca açılır; o gün açık kalır; ertesi gün yeni kapalı kart.
- K2 Paylaşım görselinde YALNIZCA söz + filigran; kaynak/atıf görünmez.
- K3 Seçim 90-gün tekrar-yok kuralına uyar (son 90 günde gösterilen gelmez).
- K4 Free global günlük söz; pro tema-bazlı seçim.
- K5 Usta ve özgün sözler kullanıcıya ayırt edilmeden gösterilir (ic_kaynak gizli).
- K6 Sözü açmak/favori/paylaşım earn_action tetiklemez (görüntüleme/araç).
- K7 Favori eklenen söz kişisel koleksiyonda kalıcı; tekrar paylaşılabilir.

## 8 · Açık mikro-kararlar (varsayılanla ilerlenir)
- Favori limiti: free sınırsız (varsayılan) vs son-20.
- Kart açılış animasyonu: flip mi fade mi (varsayılan: yumuşak flip; TR/görsel testte netleşir).
- Günün sözü push'u: var mı (bildirim envanterinde "günlük cümle" zaten var — günün sözü ona bağlanabilir ya da ayrı; varsayılan: bağlan, ek push yok).

## EK · Senkron
```
KARAR (günün sözü sohbeti, 5 Tem):
· GS-1=b çevirmeli kart (bir kez açılır, o gün açık kalır) · GS-2=b paylaş+favori
  · GS-3=a atıfsız (kaynak/isim paylaşımda ve ekranda GÖRÜNMEZ).
· Seçim: 90-gün tekrar-yok + tema/mevsim (mimari hazır, Claude Code uygular).
· Free global günlük · Pro tema-bazlı kişisel + mevsim-duyarlı.
· Sözü açmak/favori/paylaşım earn_action DEĞİL (atmosfer katmanı, retention çekirdeği değil).
· Kaynak: gunun-sozu-spec.md v1.0 + soz-havuzu.json + soz-uretim-kurallari.json
```
