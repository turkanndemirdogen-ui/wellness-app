# CLAUDE.md — PROJECT ENTRY POINT

Bu dosya repository kökünde bulunur.

## Başlangıç

Her görevden önce:

1. `docs/governance/GOVERNANCE_MASTER.md` dosyasını oku.
2. Governance’ın görev türü için belirttiği kanonik belgeleri oku.
3. İlgili kodu veya veriyi incele.
4. Yalnızca görev kapsamındaki değişiklikleri yap.

## Kanonik belgeler

- Architecture: `docs/architecture/ARCHITECTURE_DECISIONS.md`
- Design: `docs/design/` kanon paketi (öncelik: `15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` > `00`–`14`; `16` uygulama talimatı). Eski `PRODUCT_DESIGN_SYSTEM_MASTER.md` arşiv/tarihsel referanstır.
- Editorial: `docs/editorial/EDITORIAL_MASTER_SPEC.md`
- Safety: `docs/safety/SAFETY_MASTER_SPEC.md`

## Görünür sonuç kuralı (kalıcı çalışma ilkesi, 2026-09-01)

- Her iş bloğu telefonda görülebilir bir ekran veya ekran parçasıyla biter.
- Soyut ara çıktılar (token listesi, kontak sayfası, sözleşme dosyası) tek başına
  teslim sayılmaz.
- Sistem kurma işleri (altyapı, kanon, asset) mümkün olan en kısa yoldan ekrana
  bağlanır; ekranı bekletmez.
- Eksikler placeholder ile geçilir, sonra doldurulur.
- Mükemmel çıktı beklemek yerine erken göster; ürün sahibi yönlendirsin.
- Gerekçe: 2026 Temmuz–Ağustos'ta üç ay altyapı/asset fazında kalındı, ürün
  sahibi uygulamayı hiç göremedi; tek bir bitki görseli için 10 tura kadar
  çıkıldı. Bu sıralama tersine çevrildi.

## Temel sınırlar

- `docs/archive/` aktif otorite değildir.
- Nested repository olan `mobile/` kendi Git sınırını korur.
- Belirsiz veya çelişkili kararı kendin çözme; raporla.
- Kalıcı silme varsayılan olarak yasaktır.
- `.env` commit edilmez.
- JSON değişikliklerinde parse doğrulaması çalıştırılır.
- Kod değişikliklerinde ilgili lint/typecheck/test/build çalıştırılır.

## Mobile repo

`mobile/CLAUDE.md`, yalnızca mobile repository’nin teknik çalışma kurallarında geçerlidir. Kök Governance, Design, Editorial ve Safety otoriteleriyle çelişemez.

## Cleanup görevi

Repository cleanup yapılacaksa:

- `docs/operations/REPOSITORY_CLEANUP_TASK.md` dosyasını uygula,
- mevcut `PROJECT-INVENTORY.md` ve `CLEANUP-PLAN.md` dosyalarını incele,
- her taşıma ve arşiv işlemini raporla.
