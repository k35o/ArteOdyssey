'use client';

import { useLocation, useNavigate } from '@funstack/router';
import { DropdownMenu, LinkButton, Separator } from '@k8o/arte-odyssey';
import { NavigationMenuIcon } from '@k8o/arte-odyssey/icons';
import type { MessageKey } from '../i18n';
import { localizeHref, useLocale, useTranslation } from '../i18n';
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
  const locale = useLocale();
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="flex flex-col gap-0">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <div className="md:hidden">
          <DropdownMenu.Root>
            <DropdownMenu.IconTrigger
              icon={<NavigationMenuIcon />}
              label={t('nav.home')}
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
        <ul className="hidden items-center gap-1 md:flex">
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
      <Separator color="mute" />
    </nav>
  );
}
