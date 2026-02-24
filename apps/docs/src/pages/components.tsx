'use client';

import { Heading, Separator } from '@k8o/arte-odyssey';
import type { FC } from 'react';
import { LocaleAnchor } from '../components/locale-anchor';
import { T } from '../components/t';
import { componentCategories } from '../data/components-nav';
import type { NavItem } from '../data/nav-types';
import { useTranslation } from '../i18n';

const ComponentCard: FC<{ item: NavItem }> = ({ item }) => {
  return (
    <LocaleAnchor path={item.path}>
      <div className="rounded-lg border border-border-mute px-4 py-3 transition-colors hover:bg-bg-mute">
        <span className="font-medium text-fg-base text-sm">{item.name}</span>
      </div>
    </LocaleAnchor>
  );
};

export function Components() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">{t('nav.components')}</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.description" />
        </p>
      </div>
      <Separator color="mute" />
      {componentCategories.map((category) => (
        <section className="flex flex-col gap-4" key={category.titleKey}>
          <Heading type="h2">
            <T k={category.titleKey} />
          </Heading>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {category.items.map((item) => (
              <ComponentCard item={item} key={item.name} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
