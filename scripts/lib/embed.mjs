// embed.mjs — Embedding SOYUTLAMA katmanı (C-light, rag-base-spec §1).
//
// Tek arayüz: embed(texts) -> vectors. Sağlayıcı/model/boyut CONFIG'ten gelir;
// ileride değişirse yalnız burası + env değişir. Vektör boyutu şemada sabit
// (1536) — model değişirse yeniden-embed gerekir.
//
// KVKK notu: runtime'da kullanıcı sorgusu da bu katmandan OpenAI'a gider →
// kullanıcı metni 3. tarafa çıkar. Aydınlatma/rıza Faz 7; burada işaretli.

export const EMBED_CONFIG = {
  provider: process.env.EMBED_PROVIDER || 'openai',
  model: process.env.EMBED_MODEL || 'text-embedding-3-large',
  dimensions: Number(process.env.EMBED_DIMENSIONS || 1536),
  batchSize: Number(process.env.EMBED_BATCH || 96),
};

/**
 * Metin dizisini vektör dizisine çevirir. Sıra korunur.
 * Sağlayıcı değiştirilebilir (abstraction): şimdilik yalnız 'openai'.
 */
export async function embed(texts) {
  if (!Array.isArray(texts)) throw new Error('embed(texts): dizi bekleniyor');
  if (texts.length === 0) return [];
  switch (EMBED_CONFIG.provider) {
    case 'openai':
      return embedOpenAI(texts);
    default:
      throw new Error(`Bilinmeyen embedding sağlayıcısı: ${EMBED_CONFIG.provider}`);
  }
}

async function embedOpenAI(texts) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error(
      'OPENAI_API_KEY yok. .env veya ortam değişkenine ekle (embedding için gerekli).',
    );
  }
  const out = [];
  for (let i = 0; i < texts.length; i += EMBED_CONFIG.batchSize) {
    const batch = texts.slice(i, i + EMBED_CONFIG.batchSize);
    const res = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: EMBED_CONFIG.model,
        input: batch,
        dimensions: EMBED_CONFIG.dimensions,
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => '');
      throw new Error(`OpenAI embeddings ${res.status}: ${body.slice(0, 400)}`);
    }
    const json = await res.json();
    // data sırayı korur ama index'e göre güvenceye al.
    const sorted = json.data.sort((a, b) => a.index - b.index);
    for (const d of sorted) out.push(d.embedding);
    console.log(`[embed] ${Math.min(i + batch.length, texts.length)}/${texts.length}`);
  }
  return out;
}
