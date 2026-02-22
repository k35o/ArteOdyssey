'use client';

import { createContext, use, useCallback, useMemo } from 'react';
import { messages } from './messages';
import type { Locale, MessageKey } from './types';

const LocaleContext = createContext<Locale | null>(null);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  const locale = use(LocaleContext);
  if (locale === null) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return locale;
}

export function useTranslation() {
  const locale = useLocale();

  const t = useCallback(
    (key: MessageKey): string => {
      return messages[locale][key];
    },
    [locale],
  );

  return useMemo(() => ({ t, locale }), [t, locale]);
}
