import type { MessageKey } from '../types';

export const ja = {
  'nav.home': 'ホーム',
  'nav.getStarted': 'はじめに',
  'nav.components': 'コンポーネント',
  'nav.theming': 'テーマ',
  'nav.hooks': 'フック',
  'nav.helpers': 'ヘルパー',
  'home.title': 'ArteOdyssey',
  'home.description': 'React UIコンポーネントライブラリ',
  'home.github': 'GitHub',
  'home.storybook': 'Storybook',
  'common.language': '言語',
  'nav.openMenu': 'メニューを開く',
} as const satisfies Record<MessageKey, string>;
