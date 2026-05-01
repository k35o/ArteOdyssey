#!/usr/bin/env node
/**
 * Emit `storybook-static/decoro-catalog.json` describing every component
 * @k8o/arte-odyssey publishes, in a shape Decoro
 * (https://github.com/k35o/decoro) can lower to a `defineCatalog(…)` call
 * for AI-driven UI generation.
 *
 * The schema is Decoro-defined; see `docs/decisions.md` ADR-011 over there.
 * This script is the producer side (issue
 * https://github.com/k35o/decoro/issues/25).
 *
 * Pipeline
 *   1. `storybook build` runs first (see `build-storybook` in package.json).
 *   2. This script walks `src/components/`:
 *      - `react-docgen-typescript` extracts each component's prop docs.
 *      - `*.stories.tsx` files are AST-parsed for each story's `args` so the
 *        AI gets curated examples threaded into its prompt.
 *      - Components not in `src/components/index.ts` (internal sub-parts)
 *        are dropped from the catalog.
 *   3. The result is written to `storybook-static/decoro-catalog.json`,
 *      which the Chromatic action then uploads alongside the rest of the
 *      static build, so it ends up at
 *      `https://<branch-or-sha>--<projectId>.chromatic.com/decoro-catalog.json`.
 *
 * Run:
 *   pnpm generate:decoro-catalog              # standalone (storybook-static must exist)
 *   pnpm build-storybook                       # storybook build then this
 */
/* oxlint-disable eslint(no-console) typescript/no-non-null-assertion typescript/no-unsafe-return typescript/no-unsafe-call typescript/no-unsafe-member-access typescript/no-unsafe-argument typescript/no-unsafe-assignment typescript/no-explicit-any typescript/no-redundant-type-constituents typescript/strict-boolean-expressions */

import { execSync } from 'node:child_process';
import {
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { argv } from 'node:process';

import { parse as parseBabel } from '@babel/parser';
import babelTraverse from '@babel/traverse';
import * as t from '@babel/types';
import { withDefaultConfig } from 'react-docgen-typescript';

const traverse =
  (babelTraverse as unknown as { default?: typeof babelTraverse }).default ??
  babelTraverse;

const here = import.meta.dirname;
const packageRoot = resolve(here, '..');

type CliFlags = { out: string };

const parseFlags = (args: string[]): CliFlags => {
  const flags: CliFlags = {
    out: resolve(packageRoot, 'storybook-static/decoro-catalog.json'),
  };
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === '--out') {
      flags.out = resolve(args[++i] ?? flags.out);
    }
  }
  return flags;
};

const walkFiles = (root: string, predicate: (path: string) => boolean) => {
  const out: string[] = [];
  const stack: string[] = [root];
  while (stack.length > 0) {
    const dir = stack.pop()!;
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      const st = statSync(full);
      if (st.isDirectory()) {
        if (entry === 'node_modules' || entry.startsWith('.')) continue;
        stack.push(full);
      } else if (st.isFile() && predicate(full)) {
        out.push(full);
      }
    }
  }
  return out;
};

const isComponentFile = (path: string) =>
  path.endsWith('.tsx') &&
  !path.endsWith('.stories.tsx') &&
  !path.endsWith('.test.tsx');

const isStoryFile = (path: string) => path.endsWith('.stories.tsx');

/**
 * Read `src/components/index.ts` to derive the set of identifiers
 * @k8o/arte-odyssey actually publishes. Anything else found by walking the
 * source tree is an internal subcomponent and stays out of the catalog so
 * Decoro / its LLM only sees the official surface.
 */
const readPublicExports = (): Set<string> => {
  const indexPath = join(packageRoot, 'src/components/index.ts');
  const src = readFileSync(indexPath, 'utf8');
  const ast = parseBabel(src, {
    sourceType: 'module',
    plugins: ['typescript'],
  });
  const names = new Set<string>();
  traverse(ast, {
    ExportNamedDeclaration(path) {
      for (const spec of path.node.specifiers) {
        if (t.isExportSpecifier(spec) && t.isIdentifier(spec.exported)) {
          names.add(spec.exported.name);
        }
      }
    },
  });
  return names;
};

/**
 * Filter rules applied on top of public exports:
 * - Drop everything that ends in `Icon` (40+ visual icons; not useful as
 *   AI-pickable composable components).
 * - Drop hooks (anything starting with `use`).
 * - Drop providers / context wrappers (anything ending in `Provider`).
 */
const isCatalogCandidate = (name: string): boolean => {
  if (name.endsWith('Icon')) return false;
  if (name.startsWith('use')) return false;
  if (name.endsWith('Provider')) return false;
  if (name === 'Logo') return false;
  return true;
};

type DecoroCatalog = {
  schemaVersion: 1;
  library: { name: string; version: string; sha: string | null };
  components: ComponentEntry[];
};

type ComponentEntry = {
  name: string;
  importPath: string;
  description: string;
  sourcePath: string;
  props: PropEntry[];
  examples: ExampleEntry[];
};

type PropEntry = {
  name: string;
  description: string;
  required: boolean;
  defaultValue: unknown;
  type: PropType;
};

type PropType =
  | { kind: 'enum'; values: string[] }
  | { kind: 'string' }
  | { kind: 'number' }
  | { kind: 'boolean' }
  | { kind: 'union'; raw: string }
  | { kind: 'unknown'; raw: string };

type ExampleEntry = {
  name: string;
  args: Record<string, unknown>;
};

type DocgenPropType = {
  name: string;
  value?: ReadonlyArray<{ value: string }>;
  raw?: string;
};

const classifyType = (typeInfo: DocgenPropType): PropType => {
  const name = typeInfo.name.trim();
  // react-docgen-typescript reports literal unions as `name: 'enum'` with the
  // members in `value: [{ value: '"primary"' }, ...]`.
  if (name === 'enum' && Array.isArray(typeInfo.value)) {
    const literals = typeInfo.value
      .map((v) => v.value.trim())
      .filter((v) => /^("[^"]*"|'[^']*'|true|false|null|undefined)$/.test(v));
    const stringLits = literals
      .filter((v) => /^("[^"]*"|'[^']*')$/.test(v))
      .map((v) => v.slice(1, -1));
    if (stringLits.length === literals.length && stringLits.length > 0) {
      return { kind: 'enum', values: stringLits };
    }
  }
  if (name === 'string') return { kind: 'string' };
  if (name === 'number') return { kind: 'number' };
  if (name === 'boolean') return { kind: 'boolean' };
  if (name.includes('|')) return { kind: 'union', raw: name };
  return { kind: 'unknown', raw: typeInfo.raw ?? name };
};

const extractComponents = (
  componentFiles: string[],
): Map<string, ComponentEntry> => {
  const parser = withDefaultConfig({
    shouldExtractLiteralValuesFromEnum: true,
    shouldRemoveUndefinedFromOptional: true,
    savePropValueAsString: false,
    propFilter: (prop) => {
      if (prop.parent === undefined) return true;
      // Drop props inherited from React/HTML (HTMLAttributes etc.) — Decoro
      // only wants the component-specific surface.
      return !prop.parent.fileName.includes('node_modules');
    },
  });

  const componentsByName = new Map<string, ComponentEntry>();
  let parsed = 0;

  for (const file of componentFiles) {
    let docs;
    try {
      docs = parser.parse(file);
    } catch (err) {
      console.warn(
        `[skip] react-docgen-typescript failed for ${relative(packageRoot, file)}: ${(err as Error).message}`,
      );
      continue;
    }
    for (const doc of docs) {
      if (componentsByName.has(doc.displayName)) continue;
      const props: PropEntry[] = Object.entries(doc.props).map(
        ([name, info]) => ({
          name,
          description: info.description,
          required: info.required,
          defaultValue: info.defaultValue?.value,
          type: classifyType(info.type as DocgenPropType),
        }),
      );
      componentsByName.set(doc.displayName, {
        name: doc.displayName,
        importPath: '@k8o/arte-odyssey',
        description: doc.description,
        sourcePath: relative(packageRoot, file),
        props,
        examples: [],
      });
      parsed += 1;
    }
  }

  console.log(`[info] react-docgen-typescript: parsed ${parsed} components`);
  return componentsByName;
};

const propKeyName = (key: t.Expression | t.PrivateName): string | undefined => {
  if (t.isIdentifier(key)) return key.name;
  if (t.isStringLiteral(key)) return key.value;
  return undefined;
};

const UNRESOLVABLE = Symbol('unresolvable');

const literalValue = (
  node: t.Expression | t.PatternLike,
): unknown | typeof UNRESOLVABLE => {
  if (t.isStringLiteral(node)) return node.value;
  if (t.isNumericLiteral(node)) return node.value;
  if (t.isBooleanLiteral(node)) return node.value;
  if (t.isNullLiteral(node)) return null;
  if (t.isArrayExpression(node)) {
    const out: unknown[] = [];
    for (const element of node.elements) {
      if (element === null) continue;
      if (t.isSpreadElement(element)) continue;
      const v = literalValue(element);
      if (v === UNRESOLVABLE) continue;
      out.push(v);
    }
    return out;
  }
  if (t.isObjectExpression(node)) return literalObject(node);
  return UNRESOLVABLE;
};

const literalObject = (obj: t.ObjectExpression): Record<string, unknown> => {
  const out: Record<string, unknown> = {};
  for (const prop of obj.properties) {
    if (!t.isObjectProperty(prop)) continue;
    const key = propKeyName(prop.key);
    if (key === undefined) continue;
    const value = literalValue(prop.value);
    if (value !== UNRESOLVABLE) out[key] = value;
  }
  return out;
};

const pickArgs = (obj: t.ObjectExpression): Record<string, unknown> => {
  for (const prop of obj.properties) {
    if (!t.isObjectProperty(prop)) continue;
    if (propKeyName(prop.key) === 'args' && t.isObjectExpression(prop.value)) {
      return literalObject(prop.value);
    }
  }
  return {};
};

const extractStoryArgs = (
  storyFiles: string[],
  componentsByName: Map<string, ComponentEntry>,
) => {
  let attached = 0;
  let skipped = 0;
  for (const file of storyFiles) {
    let ast;
    try {
      const src = readFileSync(file, 'utf8');
      ast = parseBabel(src, {
        sourceType: 'module',
        plugins: ['typescript', 'jsx'],
      });
    } catch (err) {
      console.warn(
        `[skip] babel parse failed for ${relative(packageRoot, file)}: ${(err as Error).message}`,
      );
      skipped += 1;
      continue;
    }

    let componentName: string | undefined;
    let metaArgs: Record<string, unknown> = {};
    const stories: ExampleEntry[] = [];

    traverse(ast, {
      VariableDeclarator(path) {
        if (
          t.isIdentifier(path.node.id) &&
          path.node.id.name === 'meta' &&
          t.isObjectExpression(path.node.init)
        ) {
          for (const prop of path.node.init.properties) {
            if (!t.isObjectProperty(prop)) continue;
            const key = propKeyName(prop.key);
            if (key === 'component') {
              // `component: Button` → `Button`
              if (t.isIdentifier(prop.value)) {
                componentName = prop.value.name;
              }
              // `component: Tooltip.Root` → `Tooltip` (the namespace, which is
              // what's published from `src/components/index.ts`). ArteOdyssey
              // uses the compound-component pattern across overlays / tabs /
              // breadcrumb / etc.; the catalog only references the
              // public-export name.
              else if (
                t.isMemberExpression(prop.value) &&
                t.isIdentifier(prop.value.object)
              ) {
                componentName = prop.value.object.name;
              }
            } else if (key === 'args' && t.isObjectExpression(prop.value)) {
              metaArgs = literalObject(prop.value);
            }
          }
        }
      },
      ExportNamedDeclaration(path) {
        if (!t.isVariableDeclaration(path.node.declaration)) return;
        for (const declarator of path.node.declaration.declarations) {
          if (
            !t.isIdentifier(declarator.id) ||
            !t.isObjectExpression(declarator.init)
          )
            continue;
          const storyName = declarator.id.name;
          if (storyName === 'meta') continue;
          const storyArgs = pickArgs(declarator.init);
          stories.push({
            name: storyName,
            args: { ...metaArgs, ...storyArgs },
          });
        }
      },
    });

    if (componentName === undefined) {
      console.warn(
        `[skip] no \`component\` field in ${relative(packageRoot, file)}`,
      );
      skipped += 1;
      continue;
    }

    const entry = componentsByName.get(componentName);
    if (entry === undefined) {
      console.warn(
        `[skip] story for unknown component "${componentName}" in ${relative(packageRoot, file)}`,
      );
      skipped += 1;
      continue;
    }
    entry.examples.push(...stories);
    attached += stories.length;
  }
  console.log(
    `[info] stories: attached ${attached} examples (${skipped} files skipped)`,
  );
};

const readPackageMeta = () => {
  const pkg = JSON.parse(
    readFileSync(join(packageRoot, 'package.json'), 'utf8'),
  ) as { name: string; version: string };
  let sha: string | null = null;
  try {
    sha = execSync('git rev-parse HEAD', {
      cwd: packageRoot,
      encoding: 'utf8',
    }).trim();
  } catch {
    // Not in a git checkout (e.g. published tarball). Skip silently.
  }
  return { name: pkg.name, version: pkg.version, sha };
};

const main = () => {
  const flags = parseFlags(argv.slice(2));
  console.log(`[info] package root: ${packageRoot}`);
  console.log(`[info] output: ${flags.out}`);

  const meta = readPackageMeta();

  const srcRoot = join(packageRoot, 'src/components');
  const componentFiles = walkFiles(srcRoot, isComponentFile);
  const storyFiles = walkFiles(srcRoot, isStoryFile);
  const publicExports = readPublicExports();
  const catalogTargets = new Set(
    [...publicExports].filter((n) => isCatalogCandidate(n)),
  );
  console.log(
    `[info] discovered ${componentFiles.length} component files, ${storyFiles.length} story files`,
  );
  console.log(
    `[info] public exports: ${publicExports.size}, catalog targets after filter: ${catalogTargets.size}`,
  );

  const componentsByName = extractComponents(componentFiles);
  extractStoryArgs(storyFiles, componentsByName);

  const catalog: DecoroCatalog = {
    schemaVersion: 1,
    library: meta,
    components: [...componentsByName.values()]
      .filter((c) => catalogTargets.has(c.name))
      .toSorted((a, b) => a.name.localeCompare(b.name)),
  };

  mkdirSync(dirname(flags.out), { recursive: true });
  writeFileSync(flags.out, `${JSON.stringify(catalog, null, 2)}\n`);
  console.log(
    `[done] wrote ${catalog.components.length} components to ${flags.out}`,
  );
};

main();
