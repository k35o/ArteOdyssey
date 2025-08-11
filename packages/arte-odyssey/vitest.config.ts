import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      coverage: {
        all: false,
        provider: 'istanbul',
      },
      projects: [
        {
          extends: true,
          plugins: [
            storybookTest({
              storybookScript: 'pnpm storybook --ci',
              configDir: fileURLToPath(
                new URL('./.storybook', import.meta.url),
              ),
            }),
          ],
          publicDir: fileURLToPath(
            new URL('./.storybook/public', import.meta.url),
          ),
          test: {
            name: { label: 'components', color: 'magenta' },
            browser: {
              enabled: true,
              provider: 'playwright',
              headless: true,
              screenshotFailures: false,
              instances: [
                {
                  browser: 'chromium',
                },
              ],
            },
            setupFiles: [
              fileURLToPath(
                new URL('./.storybook/vitest.setup.ts', import.meta.url),
              ),
            ],
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
              provider: 'playwright',
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
  }),
);
