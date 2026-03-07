import { DocsContainer } from '@storybook/addon-docs/blocks';
import type { Preview } from '@storybook/react-vite';
import {
  type FC,
  memo,
  type PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { themes } from 'storybook/theming';
import { ArteOdysseyProvider } from '../src/components/providers';

import '../src/styles/index.css';

const ApplayThemeByStorybook: FC<{ theme: 'light' | 'dark' }> = memo(
  ({ theme }) => {
    const [prevTheme, setPrevTheme] = useState<'light' | 'dark' | null>(null);

    if (prevTheme !== theme) {
      document.documentElement.classList.remove(
        prevTheme === 'dark' ? 'dark' : 'light',
      );
      document.documentElement.classList.add(
        theme === 'dark' ? 'dark' : 'light',
      );
      setPrevTheme(theme);
    }

    return null;
  },
);

const ThemedDocsContainer: FC<
  PropsWithChildren<{
    context: Parameters<typeof DocsContainer>[0]['context'];
  }>
> = ({ children, context }) => {
  const globals = context.store?.globals?.globals;
  const isDark = globals?.theme === 'dark';

  return (
    <DocsContainer
      context={context}
      theme={isDark ? themes.dark : themes.light}
    >
      {children}
    </DocsContainer>
  );
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Toggle Color Theme.',
      defaultValue: 'light',
      toolbar: {
        title: 'Color Scheme',
        items: [
          { value: 'light', title: 'Light Mode', icon: 'sun' },
          { value: 'dark', title: 'Dark Mode', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    backgrounds: { disable: true },
    layout: 'fullscreen',
    mockingDate: new Date(2023, 0, 2, 12, 34, 56),
    docs: {
      container: ThemedDocsContainer,
    },
    a11y: {
      test: 'error',
      options: {
        rules: {
          // コントラスト比がCIでFlakyな働きをするのでfalse
          // 色の設計の段階コントラストセーフなペアを選択しているのでそれを信頼する
          'color-contrast': { enabled: false },
        },
      },
    },
  },
  decorators: [
    (Story, { globals, parameters }) => {
      const theme = parameters.theme
        ? parameters.theme
        : globals.theme
          ? globals.theme
          : ('light' as 'light' | 'dark');
      useEffect(() => {
        document.body.classList.add(
          'text-fg-base',
          'tracking-none',
          'bg-bg-base',
          'font-medium',
          'antialiased',
        );
      }, []);
      return (
        <ArteOdysseyProvider>
          <ApplayThemeByStorybook theme={theme} />
          <div className="min-h-svh p-6">
            <Story />
          </div>
        </ArteOdysseyProvider>
      );
    },
  ],
};

export default preview;
