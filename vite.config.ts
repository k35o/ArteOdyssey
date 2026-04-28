import { fmt, react, tailwind, test } from '@k8o/oxc-config';
import { defineConfig } from 'vite-plus';

export default defineConfig({
  fmt: {
    ...fmt,
    ignorePatterns: ['CHANGELOG.md', '.claude/**'],
  },
  lint: {
    extends: [react, tailwind],
    ignorePatterns: ['CHANGELOG.md', '.claude/**'],
    options: {
      reportUnusedDisableDirectives: 'error',
      typeAware: true,
    },
    settings: {
      react: { version: '19.2.5' },
    },
    rules: {
      // 意図的にコンパウンドコンポーネントパターンを採用しているため off
      // (export const Foo = { Bar, Baz } as const)
      'react/only-export-components': 'off',
      // CSS 変数 (`as CSSProperties`) / JSON.parse / synth event 等、
      // 型表現の限界で避けられないケースが多いため off
      'typescript/no-unsafe-type-assertion': 'off',
      // CSS は side-effect import が前提なので allow に追加
      'import/no-unassigned-import': ['error', { allow: ['**/*.css'] }],
    },
    overrides: [
      {
        files: ['**/*.test.ts', '**/*.test.tsx'],
        plugins: [...(test.plugins ?? [])],
        rules: test.rules,
      },
      {
        // Storybook stories と config は test 同等の relax + Storybook パターン特有の緩和
        files: ['**/*.stories.{ts,tsx}', '**/.storybook/**/*.{ts,tsx}'],
        rules: {
          'no-console': 'off',
          'jest/no-conditional-in-test': 'off',
          'typescript/strict-void-return': 'off',
          'typescript/no-floating-promises': 'off',
          'typescript/no-misused-promises': 'off',
          'typescript/no-non-null-assertion': 'off',
          'typescript/no-unsafe-assignment': 'off',
        },
      },
    ],
  },
  staged: {
    '*.{js,ts,cjs,mjs,jsx,tsx,json,jsonc}': 'vp check --fix',
  },
});
