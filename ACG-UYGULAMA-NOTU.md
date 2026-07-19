# ASTRO/ACG — UYGULAMA NOTU (Claude Code'a ver)

Tarih: 2026-07-18 · Paket = 2 spec + 1 güncelleme dosyası + bu not.
Otorite sırası: bu not (yerleşim/sıra) → spec dosyalarının kendi içeriği.

## 0 · Kapsam
Bu paket yalnız DOKÜMAN ekler; kod/DB değişikliği YOK. Adım 6/7
implementasyonu ayrı oturumda, aşağıdaki başlangıç komutlarıyla başlar.

## 1 · Yerleşim — canlı yapıyı TESPİT ET, varsayma
- `specs/astro-engine-spec.md` ve `specs/acg-spec.md` → canlı repoda mevcut
  spec dosyalarının (kesif-spec.md, kozmos-motor-spec.md vb.) bulunduğu
  klasöre koy (snapshot'ta `Archive/specs/` idi; canlı repo farklı olabilir).
- `guncelleme-bloklari.md` geçici çalışma dosyasıdır → repo köküne koy;
  uygulandıktan sonra `arsiv/` klasörüne taşınabilir.

## 2 · Uygulama sırası
1. `guncelleme-bloklari.md`'deki bloklarla `ARCHITECTURE_DECISIONS.md` ve
   `KALINAN-YER.md`'yi CERRAHİ güncelle (yerinde düzenleme, tam yeniden
   yazım değil).
   - A1/B1'deki ESKİ satırlar birebir bulunamazsa (dosyalar 15 Tem'dan sonra
     değişmiş olabilir): en yakın eşleşen satırı GÖSTER ve onay iste —
     tahminle değiştirme.
2. Yalnız docs commit'i at (kod yok). Push AYRI açık onay ister.
3. DUR. Adım 6'ya ancak Türkan'ın komutuyla başla:
   > "Adım 6'ya geç: astro-engine-spec.md'yi oku ve uygula — ortak astro-core +
   > in-house natal/transit motoru + LLM context builder. Plan mode'da önce
   > planı sun, onayımı bekle. Golden fixture'lar geçmeden Sohbet
   > entegrasyonuna geçme."

## 3 · Kilitli sıra — hatırlatma
- Adım 6 golden fixture'ları YEŞİL olmadan Adım 7'ye (ACG) BAŞLANMAZ.
  Adım 7 komutu acg-spec §8 sonunda yazılı.
- Plant safety v2 patch'i bu paketten BAĞIMSIZ ayrı bir iştir — ikisini aynı
  branch/commit'te karıştırma.
- `astro-engine-spec.md` başındaki not: teknik içerik 15 Tem oturum kaydından
  birebirdir; yalnız başlık satırları + K5 madde başı yeniden kurgulandı.
