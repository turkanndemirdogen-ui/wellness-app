# KD-01 — KAPSAM DEĞİŞİKLİĞİ: Modül Kaldırma

**Tarih:** 2026-07-13 · **Karar sahibi:** Türkan · **Durum:** Onaylandı
**Uygulayıcı:** Claude Code · **Kaynak-of-truth:** Bu dosya, eski "13 modül" referanslarının önüne geçer.

---

## 1 · Karar

**Meditasyon · Yoga · Nefes · Neurogames** modülleri uygulamadan **tamamen kaldırıldı** (v1 kapsam dışı).

**Kalan modüller (9 — kanonik sayımı KALINAN-YER ile doğrula):**
Kozmos (astro-herbalizm + bitki kartları) · Mood · Günlük · Cilt bakımı · Döngü-beslenme · Akış (odak/alışkanlık) · Günün sözü/afirmasyon · Arketip quiz · Sohbet

**Etki:** Video/ses streaming altyapı ihtiyacı (Mux/Cloudflare Stream değerlendirmesi) tamamen düşer. Stok video/müzik/seslendirme tedarik yükü kalkar. "Claude Code AI-video üretemez" blokeri konu dışı kalır.

---

## 2 · Doküman güncellemeleri (yerinde/surgical edit — tam yeniden yazım YOK)

Satır numarası değil **arama-çapası** kullan; eşleşme bulunamazsa dur ve raporla, tahmin etme.

### 2.1 SPEC
- Ara: `🧘 Zihin: meditasyon` → satırı **sil**. Zihin kümesi kalkıyor; küme sayısına atıf varsa uyarla (4 küme → 3).
- FREE→PRO listesinden şu maddeleri **sil**:
  - Ara: `Meditasyon: temel kütüphane` (devam satırıyla birlikte)
  - Ara: `Yoga: örnek akışlar` (devam satırıyla birlikte)
  - Ara: `Nöroplastisite: yazılı + video`

### 2.2 KALINAN-YER.md
- Ara: `13 modül bu sekmelerin İÇİNDE` → listeden `neurogames, nefes, yoga, meditasyon` çıkar; **"13 modül" → "9 modül"** (sayımı doğrula).
- Ara: `Medya modülleri (build'i bloklamaz)` → maddeyi **tamamen sil** (Nefes=kod-animasyon / Yoga=stok video / Meditasyon=stok+müzik+seslendirme notu).
- Oturum kaydına ekle: `KD-01: Nefes·Yoga·Meditasyon·Neurogames kaldırıldı → bkz. KD-01-modul-kaldirma.md`

### 2.3 ARCHITECTURE_DECISIONS.md
- **Karar 9 (Medya katmanı ayrıdır):** silme — başına `[İPTAL — KD-01]` etiketi koy (karar tarihçesi korunur).
- Modül durumu tablosunda ara: `Nefes/meditasyon/neurogames/yoga` → **satırı sil**.
- Faz/dosya haritasında ara: `Nefes/meditasyon/neurogames/yoga — en son` → **maddeyi sil**.
- Sıradaki karar numarasıyla **yeni karar ekle:**
  > **Kapsam daraltma (KD-01):** Nefes, Yoga, Meditasyon, Neurogames v1 kapsamından çıkarıldı. Medya-streaming altyapı ihtiyacı düştü. Genel metin önerileri (yoga/nefes geçişleri) içerikte kalır; modül ekranı/deep-link kalamaz. [Karar: Türkan, 2026-07-13]

### 2.4 module-content-standard.md
- `dogrulanmis_cekirdek` örnek listesinden **breathwork** kelimesini çıkar.
- Kontrendikasyon tablosunda ara: `Breathwork | kontrendikasyon` → **satırı sil**.

### 2.5 Wellness_Agent_Kaynak_Listesi.md
- "Terapötik Yoga" bölümü + Chakra Yoga vb. yoga/meditasyon kitap maddeleri: `[KAPSAM DIŞI — KD-01]` etiketiyle **işaretle** (silme — manifest.json'a hiç ingest edilmediler, çelişki riski yok; ileride yanlışlıkla ingest edilmesin diye etiket yeterli).

### 2.6 sifa-bahcesi-veri-kontrati.md — KARAR KİLİTLİ: A
`balancing_set: {besin, renk, ses, hareket, nefes}` içindeki `nefes` alanı **KALIR** — modül değil, vault'tan gelen genel metin önerisi ("yavaş nefes al" gibi). **Bu dosyada değişiklik yapma.**

### 2.7 cycle-guidance.json — KARAR KİLİTLİ: A
`"nazik hareket (yoga, yürüyüş)"` ifadesi **KALIR** (genel yaşam önerisi, modül linki değil). **Bu dosyada değişiklik yapma.**

---

## 3 · Kod tarafı (Expo app)

Adım 5 = shell; muhtemelen bu modüllere ait ekran henüz yok. Yine de doğrula:

```bash
grep -rin -E "nefes|yoga|meditasyon|meditation|neurogame|breath" app/ src/ components/ 2>/dev/null
```

- Bulunan route/ekran/komponent/placeholder/menü girişini **sil**.
- Keşif veya Ana Sayfa hub'ında bu modüllere kart/link planlandıysa çıkar.
- **Tab yapısı DEĞİŞMEZ:** Ana Sayfa · Keşif · Bahçe · Sohbet (locked).

---

## 4 · DB / seed tarafı

```bash
grep -rin -E "nefes|yoga|meditasyon|neurogame|breath" supabase/ migrations/ seeds/ 2>/dev/null
```

- Bu modüllere özel tablo/seed/engine_rules kaydı **varsa**: yeni bir kaldırma migration'ı yaz (eski migration'ı düzenleme).
- **Yoksa**: rapora "DB temiz" notu düş.
- Supabase Storage'da bu modüller için bucket/klasör açıldıysa sil.

---

## 5 · DOKUNMA (kapsam dışı)

- **46 RAG kaynak raporu** + `html-raporlari-veri-katmani.md` içindeki "nefes çalışması" vb. içerik geçişleri — bunlar kaynak metni, modül değil.
- `agent_only` güvenlik duvarı, `match_chunks_user()` / `match_chunks_agent()`, RLS.
- `contraindications.json` ("nörotoksik" eşleşmesi false-positive, bitki güvenlik verisi).
- Pudra tema / font token sistemi, tab yapısı, auth iskeleti.

---

## 6 · Kabul kriterleri

1. 2. bölümdeki hedef satırlar güncellendi; başka satır değişmedi (`git diff` ile doğrula).
2. `grep -rin "neurogame" .` → app kodu + aktif spec dokümanlarında **0 sonuç** (kaynak raporları hariç).
3. ADR'de yeni KD-01 kaydı + Karar 9'da `[İPTAL — KD-01]` etiketi var.
4. KALINAN-YER modül sayısı ve listesi tutarlı.
5. 2.6 / 2.7 dosyalarına dokunulmadı (Karar A kilitli: genel yoga/nefes metin geçişleri kalır).
6. Değişiklik tek commit: `KD-01: nefes/yoga/meditasyon/neurogames kapsam dışı`

---

## 7 · Kazanım & risk

**Kazanım:** Video/ses altyapı maliyeti ve içerik tedarik yükü sıfırlanır; build sırası sadeleşir; v1 odağı Kozmos + veri modüllerine kayar.
**Risk:** Eski oturum çıktılarında "13 modül" ve "Zihin kümesi" referansları dolaşabilir → çelişki durumunda **bu dosya geçerlidir**.
