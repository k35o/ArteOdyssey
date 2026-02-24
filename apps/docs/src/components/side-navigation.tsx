'use client';

import { useLocation } from '@funstack/router';
import type { NavCategory } from '../data/nav-types';
import { localizeHref, useTranslation } from '../i18n';

type Props = {
  categories: NavCategory[];
  onNavigate?: () => void;
};

export function SideNavigation({ categories, onNavigate }: Props) {
  const { t, locale } = useTranslation();
  const location = useLocation();

  return (
    <nav className="flex flex-col gap-4 overflow-y-auto py-4">
      {categories.map((category) => (
        <div className="flex flex-col gap-1" key={category.titleKey}>
          <span className="px-3 font-bold text-fg-mute text-xs uppercase">
            {t(category.titleKey)}
          </span>
          <ul className="flex flex-col gap-0.5">
            {category.items.map((item) => {
              const href = localizeHref(item.path, locale);
              const isActive = location.pathname === href;
              return (
                <li key={item.path}>
                  <a
                    className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                      isActive
                        ? 'bg-bg-mute font-medium text-fg-base'
                        : 'text-fg-mute hover:bg-bg-mute hover:text-fg-base'
                    }`}
                    href={href}
                    onClick={onNavigate}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
