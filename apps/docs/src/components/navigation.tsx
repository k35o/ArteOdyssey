'use client';

import { useLocation, useNavigate } from '@funstack/router';
import { DropdownMenu, LinkButton } from '@k8o/arte-odyssey';
import { NavigationMenuIcon } from '@k8o/arte-odyssey/icons';
import type { MessageKey } from '../i18n';
import { localizeHref, useTranslation } from '../i18n';
import { LanguageSwitcher } from './language-switcher';

const NAV_ITEMS: { path: string; labelKey: MessageKey }[] = [
  { path: '/', labelKey: 'nav.home' },
  { path: '/get-started', labelKey: 'nav.getStarted' },
  { path: '/components', labelKey: 'nav.components' },
  { path: '/theming', labelKey: 'nav.theming' },
  { path: '/hooks', labelKey: 'nav.hooks' },
  { path: '/helpers', labelKey: 'nav.helpers' },
];

export function Navigation() {
  const { t, locale } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="bg-bg-base">
      <div className="flex items-center justify-between px-6 py-4 md:px-8">
        <div className="md:hidden">
          <DropdownMenu.Root>
            <DropdownMenu.IconTrigger
              icon={<NavigationMenuIcon />}
              label={t('nav.openMenu')}
            />
            <DropdownMenu.Content>
              {NAV_ITEMS.map((item) => (
                <DropdownMenu.Item
                  key={item.path}
                  label={t(item.labelKey)}
                  onClick={() => {
                    navigate(localizeHref(item.path, locale));
                  }}
                />
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
        <ul className="hidden items-center gap-2 md:flex">
          {NAV_ITEMS.map((item) => {
            const href = localizeHref(item.path, locale);
            const isActive = location.pathname === href;
            return (
              <li key={item.path}>
                <LinkButton
                  active={isActive}
                  href={href}
                  size="sm"
                  variant="skeleton"
                >
                  {t(item.labelKey)}
                </LinkButton>
              </li>
            );
          })}
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
