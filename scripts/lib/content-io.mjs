// content-io.mjs — content/*.json okuyup DB'ye yüklenmeye hazır diziler üretir.
// Saf Node (fs), harici bağımlılık yok.

import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
export const ROOT = join(HERE, '..', '..');        // repo kökü
export const CONTENT = join(ROOT, 'content');
export const SOURCES = join(ROOT, 'sources');

const readJson = (p) => JSON.parse(readFileSync(p, 'utf8'));

// Motor tablo (37 bitki 4 parçada) + kart metinleri (editoryal final, tek dosya).
const MOTOR_FILES = [
  'motor-tablo-pilot.json',
  'motor-tablo-parti1.json',
  'motor-tablo-parti2.json',
  'motor-tablo-parti3.json',
];
const CARD_FILES = [
  'bitki-kartlari-master.json',
];

// Quiz başlıkları (ekran görünümü için; TR polisaj launch checklist'te).
const QUIZ_TITLES = {
  1: 'Dişil Estetik Arketipin',
  2: 'İçindeki Tanrıça',
  3: 'Kişilik Pusulan',
  4: 'Elementin',
  5: 'Ruh Bitkin',
  6: 'Ay Fazın',
  7: 'İç Hayvanın',
  8: 'İç Kahramanın',
  9: 'İç Mevsimin',
  10: 'Cadı Türün',
  11: 'Aura Rengin',
  12: 'Değerler Pusulan',
};

/** 37 bitki: motor tablo alanları + kart metni (tek_satir/story/ritual) birleşik. */
export function loadHerbs() {
  const byId = new Map();
  for (const f of MOTOR_FILES) {
    const doc = readJson(join(CONTENT, f));
    for (const b of doc.bitkiler ?? []) {
      if (!b?.herb_id) continue;
      byId.set(b.herb_id, { ...b });
    }
  }
  let cardMatched = 0;
  for (const f of CARD_FILES) {
    const doc = readJson(join(CONTENT, f));
    for (const k of doc.kartlar ?? []) {
      const herb = byId.get(k?.herb_id);
      if (!herb) continue;
      herb.tek_satir = k.tek_satir ?? null;
      herb.story_narrative = k.story_narrative ?? null;
      herb.ritual = k.ritual ?? null;
      cardMatched++;
    }
  }
  const herbs = [...byId.values()];
  return { herbs, cardMatched };
}

/** 12 aylık quiz: quiz_id + ay + title + tam içerik. */
export function loadQuizzes() {
  const files = readdirSync(CONTENT)
    .filter((f) => /^quiz-ay\d+-.*\.json$/.test(f))
    .sort((a, b) => quizAy(a) - quizAy(b));
  return files.map((f) => {
    const doc = readJson(join(CONTENT, f));
    const ay = quizAy(f);
    const slug = f.replace(/^quiz-/, '').replace(/\.json$/, '');   // ay1-disil-estetik
    return {
      quiz_id: slug,
      ay,
      title: QUIZ_TITLES[ay] ?? slug,
      data: doc,
    };
  });
}

function quizAy(filename) {
  const m = filename.match(/^quiz-ay(\d+)-/);
  return m ? Number(m[1]) : 999;
}

/** 46 kaynak: manifest.json kaynaklar[] (visibility duvarının kayıt-düzeyi). */
export function loadSources() {
  const manifest = readJson(join(SOURCES, 'manifest.json'));
  return manifest.kaynaklar ?? [];
}
