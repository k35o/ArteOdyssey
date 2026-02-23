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
  'getStarted.introduction':
    'ArteOdysseyは、React 19とTailwind CSS 4で構築されたUIコンポーネントライブラリです。静謐で落ち着いた、余白を活かしたミニマルなデザインを提供します。',
  'getStarted.installationTitle': 'インストール',
  'getStarted.installationDescription':
    'お好みのパッケージマネージャーでインストールしてください。',
  'getStarted.setupTitle': 'セットアップ',
  'getStarted.setupDescription':
    'インストール後、以下の2つの設定を行ってください。',
  'getStarted.setupCssDescription':
    'CSSファイルをアプリケーションのエントリーポイントでインポートしてください。',
  'getStarted.setupProviderDescription':
    'ArteOdysseyProviderでアプリケーションをラップしてください。',
  'getStarted.usageTitle': '使い方',
  'getStarted.usageDescription':
    'セットアップが完了したら、コンポーネントをインポートして使用できます。',
  'getStarted.requirementsTitle': '動作要件',
  'getStarted.requirementsDescription':
    'ArteOdysseyを使用するには、以下のピア依存関係が必要です。',
  'getStarted.nextStepsTitle': '次のステップ',
  'getStarted.nextStepsComponents':
    'コンポーネント一覧を確認して、使用できるUIパーツを探す',
  'getStarted.nextStepsTheming': 'テーマのカスタマイズ方法を学ぶ',
  'getStarted.nextStepsStorybook':
    'Storybookで各コンポーネントの詳細なドキュメントを確認する',
  'getStarted.packageManagerLabel': 'パッケージマネージャー',
} as const satisfies Record<MessageKey, string>;
