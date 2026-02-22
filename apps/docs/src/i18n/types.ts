export const LOCALES = ['ja', 'en'] as const;

export type Locale = (typeof LOCALES)[number];
