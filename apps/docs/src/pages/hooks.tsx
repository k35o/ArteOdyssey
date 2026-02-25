'use client';

import { Heading, InteractiveCard, Separator } from '@k8o/arte-odyssey';
import type { FC } from 'react';
import { LocaleAnchor } from '../components/locale-anchor';
import { T } from '../components/t';
import { hookCategories } from '../data/hooks-nav';
import type { NavItem } from '../data/nav-types';
import { useTranslation } from '../i18n';

const HookCard: FC<{ item: NavItem }> = ({ item }) => {
  return (
    <LocaleAnchor path={item.path} unstyled>
      <InteractiveCard appearance="bordered">
        <div className="px-4 py-3">
          <span className="font-medium text-fg-base text-sm">{item.name}</span>
        </div>
      </InteractiveCard>
    </LocaleAnchor>
  );
};

export function HooksPage() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">{t('nav.hooks')}</Heading>
        <p className="text-fg-mute text-lg">
          <T k="hooks.description" />
        </p>
      </div>
      <Separator color="mute" />
      {hookCategories.map((category) => (
        <section className="flex flex-col gap-4" key={category.titleKey}>
          <Heading type="h2">
            <T k={category.titleKey} />
          </Heading>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {category.items.map((item) => (
              <HookCard item={item} key={item.name} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
