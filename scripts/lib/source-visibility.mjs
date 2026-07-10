// source-visibility.mjs — Kaynak-düzeyi ingest kararı (rag-base-spec §4.4).
//
// FAIL-CLOSED zincir:
//  1) manifest visibility_not "excluded" içeriyorsa (Millard prognoz/ameliyat,
//     Paracelsus hastalık-transferi/aşı-karşıtı) → TÜM kaynak ingest'ten ÇIKAR.
//     Base'de chunk-düzeyi ayıklama otomatik yapılmaz; güvenli taraf = kaynağı
//     hiç yükleme. (Türkan chunk-düzeyi promosyonu sonra onaylar.)
//  2) Diğer türlü visibility = normalizeVisibility(source.visibility)
//     (eksik/bozuk → agent_only).

import { normalizeVisibility } from './visibility.mjs';

export function decideSourceIngest(source) {
  const vn = String(source?.visibility_not ?? '').toLowerCase();
  if (vn.includes('excluded')) {
    return {
      ingest: false,
      visibility: 'excluded',
      reason: source.visibility_not,
    };
  }
  return {
    ingest: true,
    visibility: normalizeVisibility(source?.visibility),
    reason: null,
  };
}
