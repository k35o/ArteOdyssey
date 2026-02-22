export const LOCALES = ['ja', 'en'] as const;

export type Locale = (typeof LOCALES)[number];

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
] as const;

export type MessageKey = (typeof MESSAGE_KEYS)[number];
