import { fmt, react, tailwind, test } from '@k8o/oxc-config';
import { defineConfig } from 'vite-plus';

export default defineConfig({
  fmt: {
    ...fmt,
    // packages/arte-odyssey/src/styles/index.css は generate:css で都度生成されるため対象外
    ignorePatterns: [
      'CHANGELOG.md',
      '.claude/**',
      'packages/arte-odyssey/src/styles/index.css',
    ],
  },
  lint: {
    extends: [react, tailwind],
    ignorePatterns: ['CHANGELOG.md', '.claude/**'],
    options: {
      reportUnusedDisableDirectives: 'error',
    },
    settings: {
      react: { version: '19.2.5' },
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
