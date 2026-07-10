// chunk.mjs — Yapısal chunk'layıcı (rag-base-spec §4.2: sabit boyut DEĞİL,
// markdown başlık/bölüm birimi). Stabil chunk_id = kaynak + içerik hash'i
// (idempotent: içerik değişmezse aynı id).

import { createHash } from 'node:crypto';

const MAX_CHARS = 4000;   // çok uzun bölümü paragrafla böl
const MIN_CHARS = 20;     // anlamsız kısa parçayı at

function hash8(s) {
  return createHash('sha1').update(s).digest('hex').slice(0, 8);
}

/** YAML frontmatter'ı (baştaki --- ... --- bloğu) ayıklar. */
function stripFrontmatter(md) {
  if (md.startsWith('---')) {
    const end = md.indexOf('\n---', 3);
    if (end !== -1) {
      const after = md.indexOf('\n', end + 1);
      return after !== -1 ? md.slice(after + 1) : '';
    }
  }
  return md;
}

/** Uzun metni paragraf sınırında ~MAX_CHARS parçalara böler. */
function splitLong(text) {
  if (text.length <= MAX_CHARS) return [text];
  const paras = text.split(/\n\s*\n/);
  const parts = [];
  let buf = '';
  for (const p of paras) {
    if (buf && (buf.length + p.length) > MAX_CHARS) {
      parts.push(buf.trim());
      buf = '';
    }
    buf += (buf ? '\n\n' : '') + p;
  }
  if (buf.trim()) parts.push(buf.trim());
  return parts;
}

/**
 * Markdown'ı başlık (#, ##, ###) bölümlerine ayırır.
 * @returns {{ chunk_id, bolum, text }[]}
 */
export function chunkMarkdown(sourceId, rawMd) {
  const md = stripFrontmatter(rawMd);
  const lines = md.split(/\r?\n/);

  const sections = [];
  let current = { bolum: '(giriş)', body: [] };
  for (const line of lines) {
    const m = line.match(/^(#{1,3})\s+(.*)$/);
    if (m) {
      if (current.body.join('\n').trim()) sections.push(current);
      current = { bolum: m[2].trim(), body: [line] };
    } else {
      current.body.push(line);
    }
  }
  if (current.body.join('\n').trim()) sections.push(current);

  const chunks = [];
  for (const s of sections) {
    const text = s.body.join('\n').trim();
    if (text.length < MIN_CHARS) continue;
    for (const part of splitLong(text)) {
      if (part.length < MIN_CHARS) continue;
      chunks.push({
        chunk_id: `${sourceId}--${hash8(s.bolum + '|' + part)}`,
        bolum: s.bolum,
        text: part,
      });
    }
  }
  return chunks;
}
