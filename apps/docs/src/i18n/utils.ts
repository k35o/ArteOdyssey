import { DEFAULT_LOCALE, isLocale, LOCALES } from './locales';
import type { Locale } from './types';

export function localizeHref(path: string, locale: Locale): string {
  return `/${locale}${path === '/' ? '' : path}`;
}

export function deLocalizeHref(href: string): {
  locale: Locale;
  path: string;
} {
  for (const locale of LOCALES) {
    const prefix = `/${locale}`;
    if (href === prefix || href.startsWith(`${prefix}/`)) {
      const path = href.slice(prefix.length) || '/';
      return { locale, path };
    }
  }
  return { locale: DEFAULT_LOCALE, path: href };
}

export function detectLocale(): Locale {
  if (typeof navigator === 'undefined') {
    return DEFAULT_LOCALE;
  }

  for (const lang of navigator.languages) {
    const code = lang.split('-')[0];
    if (code && isLocale(code)) {
      return code;
    }
  }

  return DEFAULT_LOCALE;
}
