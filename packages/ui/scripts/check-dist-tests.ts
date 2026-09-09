/**
 * Keeps in-source tests out of the published build. `src/helpers/*.ts` and a
 * few internals carry `if (import.meta.vitest) { describe(...) }` blocks; the
 * `define` in `vite.config.ts` folds them away at pack time, and this script
 * fails when any `dist/**\/*.mjs` still contains `import.meta.vitest` or a
 * top-level `describe(` / `it(` / `test(` call. Runs as part of
 * `check:package`, so it needs `dist/` to exist.
 *
 *   node scripts/check-dist-tests.ts
 */
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST_DIR = fileURLToPath(new URL('../dist', import.meta.url));

// `.describe(` (zod) は除外し、裸の呼び出しだけを拾う。
const TEST_CALL = /(?<![\w$.])(?:describe|it|test)\(/u;

const entries = await readdir(DIST_DIR, {
  recursive: true,
  withFileTypes: true,
});
const modules = entries
  .filter((entry) => entry.isFile() && entry.name.endsWith('.mjs'))
  .map((entry) => path.join(entry.parentPath, entry.name))
  .toSorted();

if (modules.length === 0) {
  console.error(
    'dist/ に .mjs がありません。先に pnpm build を実行してください。',
  );
  process.exit(1);
}

const sources = await Promise.all(
  modules.map((file) => readFile(file, 'utf8')),
);
const leaked = modules
  .filter((_, i) => {
    const source = sources[i] ?? '';
    return source.includes('import.meta.vitest') || TEST_CALL.test(source);
  })
  .map((file) => path.relative(DIST_DIR, file));

if (leaked.length > 0) {
  console.error(
    [
      'dist にインソーステストが残っています。vite.config.ts の pack.define を確認してください。',
      ...leaked.map((file) => `  dist/${file}`),
    ].join('\n'),
  );
  process.exit(1);
}

console.warn(`${modules.length} modules in dist/ carry no in-source tests.`);
