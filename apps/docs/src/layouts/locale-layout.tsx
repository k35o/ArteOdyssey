'use client';

import { Outlet, useNavigate } from '@funstack/router';
import { useEffect } from 'react';
import { Navigation } from '../components/navigation';
import { detectLocale, isLocale, LocaleProvider } from '../i18n';

export function LocaleLayout({ params }: { params: { locale: string } }) {
  const navigate = useNavigate();
  const localeParam = params.locale;

  useEffect(() => {
    if (isLocale(localeParam)) {
      document.documentElement.lang = localeParam;
    }
  }, [localeParam]);

  if (!isLocale(localeParam)) {
    navigate(`/${detectLocale()}/`, { replace: true });
    return null;
  }

  return (
    <LocaleProvider locale={localeParam}>
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </LocaleProvider>
  );
}
