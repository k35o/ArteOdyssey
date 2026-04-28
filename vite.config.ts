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
      // アーキテクチャ的に段階的に解消する
      'import/no-cycle': 'warn',
      'import/max-dependencies': 'off',
      // 既存コードに対する type-aware strict ルールは段階的に有効化する
      'typescript/strict-boolean-expressions': 'warn',
      'typescript/no-unsafe-type-assertion': 'warn',
    },
    overrides: [
      {
        files: ['**/*.test.ts', '**/*.test.tsx'],
        plugins: [...(test.plugins ?? [])],
        rules: test.rules ?? {},
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
