// visibility.mjs — Görünürlük duvarının FAIL-CLOSED çekirdeği (D2.4).
//
// Tek doğruluk kaynağı: bir kaynağın/chunk'ın visibility değeri geçerli
// 'user' değilse KULLANICIYA GÖRÜNMEZ. Eksik/boş/bilinmeyen/yanlış-tip →
// otomatik 'agent_only' (en kısıtlı). Bu, DB tarafındaki
// "not null default 'agent_only'" varsayılanının kod-tarafı ikizidir
// (defense-in-depth: aynı kural iki katmanda).

export const VALID_VISIBILITY = ['user', 'agent_only', 'excluded'];

/**
 * Ham visibility değerini güvenli bir değere indirger.
 * Kural: sadece tam olarak 'user' | 'agent_only' | 'excluded' kabul edilir;
 * geri kalan her şey (undefined, null, '', sayı, yazım hatası) → 'agent_only'.
 */
export function normalizeVisibility(raw) {
  if (typeof raw === 'string' && VALID_VISIBILITY.includes(raw)) {
    return raw;
  }
  return 'agent_only'; // FAIL-CLOSED
}

/** Kullanıcıya gösterilebilir mi? Yalnız normalize sonucu 'user' ise true. */
export function isUserVisible(source) {
  return normalizeVisibility(source?.visibility) === 'user';
}

/** Kullanıcı-yolu filtresi: yalnız 'user' görünürlüklü kaynakları döndürür. */
export function filterUserVisible(sources) {
  return sources.filter(isUserVisible);
}
