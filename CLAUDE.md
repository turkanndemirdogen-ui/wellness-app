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
- Design: `docs/design/PRODUCT_DESIGN_SYSTEM_MASTER.md`
- Editorial: `docs/editorial/EDITORIAL_MASTER_SPEC.md`
- Safety: `docs/safety/SAFETY_MASTER_SPEC.md`

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
