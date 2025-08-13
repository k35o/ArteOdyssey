import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import esbuild from 'esbuild';
import pkg from '../package.json' with { type: 'json' };

const dir = 'dist';

/** @type {import('esbuild').BuildOptions} */
const options = {
  entryPoints: ['src/**/*.ts*'],
  outdir: dir,
  format: 'esm',
  target: 'es2020',
};

// Check if "watch=true" flag is passed
if (process.argv[2]) {
  const [key, value] = process.argv[2].split('=');
  if (key === 'watch' && value === 'true') {
    const ctx = await esbuild.context(options);
    await ctx.watch();
  }
}

esbuild.build(options).catch(() => process.exit(1));

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}
fs.writeFileSync(
  path.join(dir, 'package.json'),
  JSON.stringify({ type: 'module', sideEffects: pkg.sideEffects }, null, 2) +
    '\n',
  'utf-8',
);
