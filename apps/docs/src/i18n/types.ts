export const LOCALES = ['ja', 'en'] as const;

export type Locale = (typeof LOCALES)[number];

/**
 * 翻訳キーの一覧。
 * キーを追加する場合は、このリストと各言語ファイル（en.ts, ja.ts）の3箇所を更新すること。
 */
export const MESSAGE_KEYS = [
  'nav.home',
  'nav.getStarted',
  'nav.components',
  'nav.theming',
  'nav.hooks',
  'nav.helpers',
  'nav.openMenu',
  'home.title',
  'home.description',
  'home.github',
  'home.storybook',
  'common.language',
  'getStarted.introduction',
  'getStarted.installationTitle',
  'getStarted.installationDescription',
  'getStarted.setupTitle',
  'getStarted.setupDescription',
  'getStarted.setupCssDescription',
  'getStarted.setupProviderDescription',
  'getStarted.usageTitle',
  'getStarted.usageDescription',
  'getStarted.requirementsTitle',
  'getStarted.requirementsDescription',
  'getStarted.nextStepsTitle',
  'getStarted.nextStepsComponents',
  'getStarted.nextStepsTheming',
  'getStarted.nextStepsStorybook',
  'getStarted.packageManagerLabel',
] as const;

export type MessageKey = (typeof MESSAGE_KEYS)[number];
