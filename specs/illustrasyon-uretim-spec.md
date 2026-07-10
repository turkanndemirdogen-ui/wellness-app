# İllüstrasyon Üretim — Spec v1.0 (5 Temmuz 2026)

Kartlar + modül görselleri + UI botanik motiflerinin tek-elden üretim hattı. Görsel Tasarım Kiti'ni genişletir.
**Kilitli kararlar:** B (AI üretim) · B1 (kendi LoRA, SD/FLUX; Claude Code kurar) · öncelik: dengeli.

## 1 · Neden LoRA (düz AI değil)
- Düz style-reference (Midjourney --sref) "benzer ama tutarlı değil" verir; renk/çizgi kayar → kitin "7 modülde tek çizgi" kuralını tutmaz.
- Markaya özel LoRA (15–20 görselle eğitilmiş) uzun projelerde en yüksek tutarlılığın kanıtlı yoludur. Tutarlılık = R1.3 vitrini ve koleksiyon estetiği için zorunlu.

## 2 · Botanik doğruluk çözümü (kritik, markaya özgü)
- AI türü karıştırabilir → "sağlam zemin" ilkesiyle çelişir.
- **Çözüm:** LoRA eğitim setine public-domain **botanik gravürler** karıştır (Köhler's Medicinal Plants, 1887, telif dolmuş; benzeri herbaria). Model hem pudra stilini hem doğru botanik formu öğrenir.
- ⚠ Doğrulanacak: 37 bitkinin kaçının Köhler's/benzeri arşivde bulunduğu tek tek kontrol edilmeli (çoğu tıbbi bitki mevcut, garanti değil). Eksikler için alternatif public-domain herbaria taranır.
- Bu, reddedilen C yolunun en değerli parçasını (gravür botanik doğruluğu) B'nin içine taşır — B+C sentezi.

## 3 · Boru hattı
1. **Stil çekirdeği** (bir defalık): 15–20 referans görsel — pudra palet (#CADBC8/#C9D8E4/#EBD3D6/#F6D9C2/#D6C9E0 + metin-erik #4A3B52) + ince çizgi + botanik gravür karışımı → tek estetik dil.
2. **Marka LoRA eğitimi** (FLUX veya SD taban, ComfyUI): stil çekirdeğiyle eğit. Bu "tek stil" garantisi.
3. **Kart üretimi:** sabit prompt şablonu (yalnız bitki adı/formu değişir) + LoRA → 37 kart aynı dilde.
4. **Silüet hali** (R1.3 vitrini): tam görselden **programatik türetme** (kod tarafı — eşikleme/alpha maske), 37 ayrı silüet çizdirme YOK. Tek illüstrasyon-durum sistemi.
5. **Modül görselleri + UI motifleri:** aynı LoRA, aynı şablon dili → 7 modülde tutarlılık otomatik.

## 4 · Prompt şablonu (taslak — Claude Code kalibre eder)
```
<marka_lora> botanical illustration of {bitki_latince}, single sprig,
fine delicate linework, soft powder palette (sage green, powder blue,
dusty rose, apricot, lilac), pale airy background, ample negative space,
elegant, calm, hand-drawn feel, no text, centered
--no dark colors, harsh geometry, clutter, stock-corporate look, photorealism
```
- Değişken: yalnız `{bitki_latince}` (+ gerekiyorsa form notu: çiçek/yaprak/kök).
- Sabit: stil, palet, kompozisyon → tutarlılık prompt düzeyinde de kilitli.

## 5 · Marka & güvenlik kuralları
- Görsel Tasarım Kiti bağlayıcı: pudra palet, ince çizgi, yuvarlatılmış his, bol nefes alanı; koyu/yoğun renk yok, keskin geometri yok, stok-kurumsal görünüm yok.
- Kart görseli = ön yüz varlığı; paylaşımda yalnız ön yüz render edilir (bahce-spec R1.5).
- Görsel metni engellemez: kartta illüstrasyon merkezde/çerçevede, metin alanı temiz.
- ⚠ **Telif (yayın öncesi hukuki kontrol maddesi):** AI görsel çıktısının telif/ticari-kullanım durumu yargı bölgesine göre değişir; Türkiye + KVKK bağlamı doğrulanamadı (veri yok). Açık kaynak taban (SD/FLUX) + public-domain eğitim verisi en temiz zemini verir ama bağımsız hukuki teyit launch checklist'te.

## 6 · Açık işler / Claude Code görevleri
- Köhler's + herbaria kapsam taraması (37 bitki eşleşmesi).
- Stil çekirdeği görsellerinin üretimi + LoRA eğitimi (GPU/ComfyUI kurulumu).
- Programatik silüet türetme fonksiyonu.
- Prompt şablonu kalibrasyonu (3–5 test bitkisiyle tutarlılık kontrolü).
- Telif hukuki teyit (Türkan / danışman).

## EK · Senkron
```
KARAR (illüstrasyon sohbeti, 5 Tem 2026):
· B · AI üretim; B1 · kendi LoRA (SD/FLUX, Claude Code kurar); öncelik dengeli.
· Botanik doğruluk = LoRA'ya public-domain gravür (Köhler's vb.) karıştır → B+C sentezi.
· Silüet = tam görselden programatik türetme (kod).
· Kapsam: kartlar + silüetler + modül görselleri + UI motifleri, tek LoRA.
· Telif ticari-kullanım teyidi = launch checklist (Türkiye/KVKK, veri yok).
· Kaynak: illustrasyon-uretim-spec.md v1.0
```
