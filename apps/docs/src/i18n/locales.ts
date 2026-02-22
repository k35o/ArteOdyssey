import type { Locale } from './types';

export const LOCALES = ['ja', 'en'] as const;

export const DEFAULT_LOCALE: Locale = 'ja';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
