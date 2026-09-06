/**
 * Keeps `docs/references/helpers.md` honest: every `### name` heading under
 * "Helper functions" must match the exports of `src/helpers/index.ts`, in the
 * same order, and nothing may be missing or extra. The prose is hand-written,
 * so there is nothing to regenerate — this only checks, in both
 * `generate:props` and `check:props`.
 *
 *   node scripts/check-helpers-md.ts
 */
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const DOC_PATH = fileURLToPath(
  new URL('../docs/references/helpers.md', import.meta.url),
);
const INDEX_PATH = fileURLToPath(
  new URL('../src/helpers/index.ts', import.meta.url),
);

const [doc, index] = await Promise.all([
  readFile(DOC_PATH, 'utf8'),
  readFile(INDEX_PATH, 'utf8'),
]);

const exported = [...index.matchAll(/^export \{ (\w+) \} from '/gmu)].map(
  (m) => m[1] ?? '',
);

const sectionStart = doc.indexOf('\n## Helper functions');
if (sectionStart === -1) {
  console.error(
    'docs/references/helpers.md に "## Helper functions" の節がありません。',
  );
  process.exit(1);
}
const sectionBody = doc
  .slice(sectionStart + 1)
  .split('\n')
  .slice(1);
const nextSection = sectionBody.findIndex((line) => line.startsWith('## '));
const section = (
  nextSection === -1 ? sectionBody : sectionBody.slice(0, nextSection)
).join('\n');
const documented = [...section.matchAll(/^### (\S+)/gmu)].map(
  (m) => m[1] ?? '',
);

const missing = exported.filter((name) => !documented.includes(name));
const extra = documented.filter((name) => !exported.includes(name));
const sameOrder =
  missing.length === 0 &&
  extra.length === 0 &&
  exported.every((name, i) => documented[i] === name);

if (!sameOrder) {
  const lines = [
    'docs/references/helpers.md の "Helper functions" が src/helpers/index.ts の export と一致しません。',
    `  index.ts の export: ${exported.join(', ')}`,
    `  helpers.md の見出し: ${documented.join(', ')}`,
  ];
  if (missing.length > 0) lines.push(`  未記載: ${missing.join(', ')}`);
  if (extra.length > 0)
    lines.push(`  export されていない: ${extra.join(', ')}`);
  if (missing.length === 0 && extra.length === 0) {
    lines.push('  並び順が index.ts と異なります。');
  }
  console.error(lines.join('\n'));
  process.exit(1);
}

console.warn(
  `docs/references/helpers.md documents all ${exported.length} helpers.`,
);
