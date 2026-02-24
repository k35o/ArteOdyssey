'use client';

import { Outlet, useLocation, useNavigate } from '@funstack/router';
import { Drawer, IconButton, Separator } from '@k8o/arte-odyssey';
import { ListIcon } from '@k8o/arte-odyssey/icons';
import { useEffect, useState } from 'react';
import { Navigation } from '../components/navigation';
import { SideNavigation } from '../components/side-navigation';
import { componentCategories } from '../data/components-nav';
import { hookCategories } from '../data/hooks-nav';
import type { NavCategory } from '../data/nav-types';
import {
  detectLocale,
  isLocale,
  LocaleProvider,
  useTranslation,
} from '../i18n';

type SideNavConfig = {
  categories: NavCategory[];
  titleKey: 'nav.components' | 'nav.hooks';
};

function useSideNavConfig(): SideNavConfig | null {
  const location = useLocation();
  const pathname = location.pathname;

  // /ja/components/button → match, /ja/components → no match
  if (/^\/[^/]+\/components\/.+/.test(pathname)) {
    return { categories: componentCategories, titleKey: 'nav.components' };
  }

  // /ja/hooks/use-click-away → match, /ja/hooks → no match
  if (/^\/[^/]+\/hooks\/.+/.test(pathname)) {
    return { categories: hookCategories, titleKey: 'nav.hooks' };
  }

  return null;
}

function LayoutContent() {
  const sideNavConfig = useSideNavConfig();
  const { t } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {sideNavConfig ? (
        <>
          <div className="shrink-0 bg-bg-base">
            <Navigation />
            <Separator color="mute" />
            <div className="lg:hidden">
              <div className="flex items-center px-4 py-2">
                <IconButton
                  label={t('sideNav.openNavigation')}
                  onClick={() => setIsDrawerOpen(true)}
                >
                  <ListIcon />
                </IconButton>
              </div>
              <Separator color="mute" />
            </div>
          </div>
          <div className="flex min-h-0 flex-1">
            <aside className="hidden w-56 shrink-0 overflow-y-auto border-border-mute border-r p-2 lg:block">
              <SideNavigation categories={sideNavConfig.categories} />
            </aside>
            <main className="min-w-0 flex-1 overflow-y-auto">
              <Outlet />
            </main>
          </div>
          <Drawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            side="left"
            title={t(sideNavConfig.titleKey)}
          >
            <SideNavigation
              categories={sideNavConfig.categories}
              onNavigate={() => setIsDrawerOpen(false)}
            />
          </Drawer>
        </>
      ) : (
        <>
          <div className="shrink-0 bg-bg-base">
            <Navigation />
            <Separator color="mute" />
          </div>
          <main className="min-w-0 flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </>
      )}
    </>
  );
}

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
      <div className="flex h-dvh flex-col">
        <LayoutContent />
      </div>
    </LocaleProvider>
  );
}
