'use client';

import { detectLocale } from '../i18n';

export function RootRedirect() {
  navigation.navigate(`/${detectLocale()}/`, { history: 'replace' });

  return null;
}
