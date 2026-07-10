// content-cache.mjs — derived_content_cache YAZMA (rag-base-spec §2 Faz 1).
//
// Sunucu-tarafı içerik-üretim pipeline'ının (cron/edge) çıktısını kullanıcı ×
// gün × içerik-tipi anahtarıyla saklar. PK (user_id, date, content_type) →
// upsert idempotenttir: aynı anahtar ikinci kez yazılınca çift satır olmaz,
// payload güncellenir.
//
// service_role ile çağrılır (RLS baypas); KULLANICI İSTEĞİNE BAĞLI DEĞİL.

export async function upsertDerivedContent(client, { user_id, date, content_type, payload }) {
  if (!user_id || !date || !content_type) {
    throw new Error('upsertDerivedContent: user_id, date, content_type zorunlu.');
  }
  const { data, error } = await client
    .from('derived_content_cache')
    .upsert(
      { user_id, date, content_type, payload },
      { onConflict: 'user_id,date,content_type' },
    )
    .select();
  if (error) throw new Error(`derived_content_cache upsert: ${error.message}`);
  return data;
}
