import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite-plus';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  plugins: [react()],
  pack: {
    entry: ['src/**/*.{ts,tsx}', '!src/**/*.stories.tsx', '!src/**/*.test.{ts,tsx}'],
    format: 'esm',
    dts: true,
    outDir: 'dist',
    unbundle: true,
  },
  test: {
    globals: true,
    coverage: {
      all: false,
      provider: 'v8',
    },
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            storybookScript: 'pnpm storybook --ci',
            configDir: fileURLToPath(new URL('./.storybook', import.meta.url)),
          }),
        ],
        publicDir: fileURLToPath(new URL('./.storybook/public', import.meta.url)),
        test: {
          name: { label: 'components', color: 'magenta' },
          browser: {
            enabled: true,
            provider: playwright(),
            headless: true,
            screenshotFailures: false,
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
        },
      },
      {
        extends: true,
        test: {
          name: { label: 'hooks', color: 'green' },
          include: ['src/hooks/**/*.test.{ts,tsx}'],
          browser: {
            enabled: true,
            instances: [
              {
                browser: 'chromium',
              },
            ],
            provider: playwright(),
            headless: true,
            screenshotFailures: false,
          },
        },
      },
      {
        extends: true,
        test: {
          name: { label: 'helpers', color: 'blue' },
          include: ['src/helpers/**/*.test.{ts,tsx}'],
          includeSource: ['src/helpers/**/*.{ts,tsx}'],
        },
      },
    ],
  },
});
