// static と server の GUIDE は、どちらもインストールした側の node_modules から
// 読まれる文書なので、共通の節を両方に持つしかない。二重に持つ以上、片方だけ
// 直す事故は起きる。共通部分は docs/shared/<name>.md に 1 つだけ置き、両 GUIDE の
// <!-- shared:<name> --> … <!-- /shared:<name> --> をそれで書き換える。
// `--check` は書き換えずに差分があれば失敗する（CI 用）。
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const here = path.dirname(new URL(import.meta.url).pathname);
const sharedDir = path.resolve(here, '../docs/shared');
const guides = ['static', 'server'].map((pkg) =>
  path.resolve(here, `../../${pkg}/docs/GUIDE.md`),
);
const check = process.argv.includes('--check');

const fragments = new Map(
  readdirSync(sharedDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => [
      file.slice(0, -'.md'.length),
      readFileSync(path.join(sharedDir, file), 'utf8'),
    ]),
);

let drift = 0;
for (const guide of guides) {
  const before = readFileSync(guide, 'utf8');
  const after = before.replaceAll(
    /<!-- shared:([\w-]+) -->\n[\s\S]*?<!-- \/shared:\1 -->\n/gu,
    (whole, name: string) => {
      const fragment = fragments.get(name);
      if (fragment === undefined) {
        throw new Error(`${guide}: no docs/shared/${name}.md for the marker`);
      }
      // 整形後の GUIDE と同じ形にする: マーカーと本文の間に空行を 1 つ置く
      return `<!-- shared:${name} -->\n\n${fragment}\n<!-- /shared:${name} -->\n`;
    },
  );
  for (const name of fragments.keys()) {
    if (!before.includes(`<!-- shared:${name} -->`)) {
      throw new Error(`${guide}: has no <!-- shared:${name} --> marker`);
    }
  }
  if (after === before) continue;
  if (check) {
    drift += 1;
    console.error(
      `${path.relative(process.cwd(), guide)} differs from docs/shared — run \`pnpm --filter @k8ordo/framework-engine check:write\``,
    );
  } else {
    writeFileSync(guide, after);
    console.warn(`synced ${path.relative(process.cwd(), guide)}`);
  }
}
if (drift > 0) process.exit(1);
