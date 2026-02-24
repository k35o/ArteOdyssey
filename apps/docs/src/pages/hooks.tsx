'use client';

import { Heading, Separator } from '@k8o/arte-odyssey';
import type { FC } from 'react';
import { LocaleAnchor } from '../components/locale-anchor';
import { T } from '../components/t';
import type { MessageKey } from '../i18n';
import { useTranslation } from '../i18n';

type HookItem = {
  name: string;
  path: string;
};

type CategorySection = {
  titleKey: MessageKey;
  items: HookItem[];
};

const categories: CategorySection[] = [
  {
    titleKey: 'hooks.categoryDomInteraction',
    items: [
      { name: 'useClickAway', path: '/hooks/use-click-away' },
      { name: 'useResize', path: '/hooks/use-resize' },
      { name: 'useWindowResize', path: '/hooks/use-window-resize' },
      { name: 'useScrollDirection', path: '/hooks/use-scroll-direction' },
    ],
  },
  {
    titleKey: 'hooks.categoryStateStorage',
    items: [
      { name: 'useClipboard', path: '/hooks/use-clipboard' },
      { name: 'useLocalStorage', path: '/hooks/use-local-storage' },
      { name: 'useHash', path: '/hooks/use-hash' },
    ],
  },
  {
    titleKey: 'hooks.categoryTiming',
    items: [
      { name: 'useInterval', path: '/hooks/use-interval' },
      { name: 'useTimeout', path: '/hooks/use-timeout' },
    ],
  },
  {
    titleKey: 'hooks.categoryUtility',
    items: [
      { name: 'useClient', path: '/hooks/use-client' },
      { name: 'useStep', path: '/hooks/use-step' },
      { name: 'useWindowSize', path: '/hooks/use-window-size' },
    ],
  },
];

const HookCard: FC<{ item: HookItem }> = ({ item }) => {
  return (
    <LocaleAnchor path={item.path}>
      <div className="rounded-lg border border-border-mute px-4 py-3 transition-colors hover:bg-bg-mute">
        <span className="font-medium text-fg-base text-sm">{item.name}</span>
      </div>
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
      {categories.map((category) => (
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
