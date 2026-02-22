'use client';

import { useLocation, useNavigate } from '@funstack/router';
import { DropdownMenu } from '@k8o/arte-odyssey';
import type { Locale } from '../i18n';
import { deLocalizeHref, LOCALES, localizeHref, useLocale } from '../i18n';

const LOCALE_LABELS: Record<Locale, string> = {
  ja: '日本語',
  en: 'English',
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const location = useLocation();
  const navigate = useNavigate();

  const { path } = deLocalizeHref(location.pathname);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        size="sm"
        text={LOCALE_LABELS[locale]}
        variant="skeleton"
      />
      <DropdownMenu.Content>
        {LOCALES.map((l) => (
          <DropdownMenu.Item
            key={l}
            label={LOCALE_LABELS[l]}
            onClick={() => {
              navigate(localizeHref(path, l));
            }}
          />
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
