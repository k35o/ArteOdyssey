import type { Locale } from './types';
import { LOCALES } from './types';

export const DEFAULT_LOCALE: Locale = 'ja';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
