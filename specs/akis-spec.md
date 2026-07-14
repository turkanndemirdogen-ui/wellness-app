# Akış — Ritüel & Alışkanlık Spec v1.0 (5 Temmuz 2026)

Ana Sayfa stack modülü. Finch modelinden esinli ama mimariye uyarlanmış.
**Kilitli:** A-1=c (hafif tracker + herbaryum bağı) · A-2=b (ritüel dili + botanik geri bildirim). Bağlam: R1 tek çekirdek döngü = Herbaryum (korunur).

## 0 · Temel ilke — Finch'in duygusu, ayrı döngü değil
Finch'in gücü "eylemim bir şeyi büyütüyor" duygusudur (görev→pet). Bu duyguyu koruyoruz ama **teknik uygulamayı (ayrı pet + streak) almıyoruz** — çünkü R1 tek-döngü kararıyla çelişir. Sende görev→pet değil, görev→bahçe büyür. Akış = ritüellerini tanımladığın + tamamladığın yer; tamamlama herbaryumu besler (mevcut earn_action). Ayrı ödül/pet yok; büyüme koleksiyonda görünür.

⚠ **c'nin güvenli sınırı (kritik):** "Hafif tracker"ın tamamlama görünümü VAR ama **kaçırma-cezası / seri-bozulması YOK**. "Bugün ne yaptın" aynası, "kaç gündür yapıyorsun, bozma" baskısı DEĞİL. Bu sınır olmadan ikinci döngü doğar (tek-döngü kilidi delinir) → sınır zorunlu.

## 1 · Ritüel tanımlama
- Kullanıcı kendi ritüellerini/alışkanlıklarını ekler ("sabah su", "akşam esneme", "5 dk nefes"...).
- **Ritüel dili (A-2=b):** görevler "ritüel" olarak sunulur. Ekleme akışı: "Sabah ritüeline bir adım ekle" / "Akşam ritüelin ne olsun?". Liste-taskmaster dili YOK.
- Opsiyonel zaman-grubu: sabah / gün / akşam ritüelleri (esnek, zorunlu değil).
- Opsiyonel hatırlatma: kullanıcı seçerse nazik push (bildirim envanterine tabi).

## 2 · Tamamlama & geri bildirim
- Ritüeli "yaptım" olarak işaretle → **botanik mikro-an:** yaprak açılır / tomurcuk belirir (Finch'in duygusal geri bildirimi, bizim estetikte). Görsel kit: yumuşak animasyon.
- Tamamlama görünümü: o günkü ritüellerin durumu (yapıldı/bekliyor) — basit, sakin.
- **Kaçırma davranışı (marka-kritik):** yapılmayan ritüel için ceza/uyarı/kırmızı YOK. Sadece nötr "bekliyor" durumu. Ertesi gün temiz sayfa. Suçluluk üretmez (şefkat tonu + tek-döngü koruması).

## 3 · İlerleme aynası (seri DEĞİL)
- Baskısız geriye-dönük görünüm: "bu hafta/ay şu ritüellere alan açtın" — nötr ayna, hedef/streak değil.
- ⚠ "X gündür üst üste" sayacı YOK (seri baskısı = marka-dışı + ikinci döngü). Süreklilik herbaryum koleksiyonunda zaten görünür.
- Baskısız-ayna felsefesi: kendini görme, bozulacak bir şey yok. *(Önceki referans olan Neurogames modülü KD-01 ile kapsam dışı; felsefe bu spec için geçerliliğini korur.)*

## 4 · Herbaryum entegrasyonu (A-3 — çift sayım çözümü)
- Ritüel tamamlama `earn_action` havuzuna katılır (herbaryum-spec §3 genişletme).
- **Çift sayım önleme:** kullanıcı-ritüelleri + sabit modül-eylemleri (mood/journal...) aynı gün yapılsa bile **günlük tek-kart tavanı korunur** (herbaryum-spec: günün ilk eylemi kart, sonrası tohum dönüşümü). Yani ritüel earn_action'a katılır ama ekstra kart üretmez — tek-döngü matematiği bozulmaz.
- Bu, earn_actions v1.1 genişletmesinin parçası (ARCH'ta kayıtlı açık iş).

## 5 · Free / Pro
- Free: sınırlı sayıda aktif ritüel (örn. 3) + tamamlama + botanik geri bildirim + ayna.
- Pro: sınırsız ritüel + ritüel şablon kütüphanesi (hazır "sabah rutini", "akşam yavaşlama" setleri) + detaylı aylık ayna + (opsiyonel) ritüel-mood korelasyonu.
- Not: 3 ritüel free sınırı hook-sentez'de belirtilmişti; çekirdek deneyim free, ölçek pro.

## 6 · Güvenlik & ton
- Kaçırma-cezası yok (şefkat tonu + disordered/aşırı-disiplin tetikleyici dilden kaçınma).
- Ritüel dili davetkar ("alan aç"), emir değil.
- Sağlık-ritüeli tanımlanırsa (ilaç, egzersiz) tıbbi iddia üretme; sadece kullanıcının kendi tanımını takip et.
- Botanik geri bildirim; emoji yok.
- Marka tonu tüm metinlerde.

## 7 · Kabul kriterleri
- K1 Ritüel tamamlama botanik mikro-an tetikler.
- K2 Yapılmayan ritüel için ceza/uyarı/seri-bozulması GÖSTERİLMEZ (nötr bekliyor).
- K3 "X gün üst üste" seri sayacı YOK; yalnız baskısız ayna.
- K4 Ritüel tamamlama earn_action'a katılır AMA günlük tek-kart tavanını bozmaz (çift sayım yok).
- K5 Free ritüel limiti uygulanır; pro sınırsız + şablonlar.
- K6 Ritüel dili "ritüel/alan aç" çerçevesinde; checklist-taskmaster dili yok.

## 8 · Açık mikro-kararlar (varsayılanla ilerlenir)
- Free ritüel limiti: 3 (hook-sentez varsayılanı) vs 5.
- Zaman-grubu (sabah/gün/akşam) zorunlu mu opsiyonel mi (varsayılan: opsiyonel).
- Ritüel-mood korelasyonu pro özelliği v1'de mi v2'de mi (varsayılan: v2, önce temel).

## EK · Senkron
```
KARAR (akış sohbeti, 5 Tem):
· A-1=c hafif tracker + herbaryum bağı (GÜVENLİ SINIR: kaçırma-cezası/seri YOK) · A-2=b ritüel dili + botanik geri bildirim.
· Finch duygusu (eylem→büyüme) korunur; ayrı pet/streak ALINMAZ (R1 tek-döngü kilidi).
· Ritüel tamamlama earn_action'a katılır ama günlük tek-kart tavanını bozmaz (çift sayım çözümü, A-3).
· İlerleme = baskısız ayna, seri sayacı DEĞİL. Süreklilik herbaryumda.
· Free ~3 ritüel · Pro sınırsız + şablon kütüphanesi.
· Kaynak: akis-spec.md v1.0
```
