'use client';

import { Heading, Separator } from '@k8o/arte-odyssey';
import type { FC } from 'react';
import { LocaleAnchor } from '../components/locale-anchor';
import { T } from '../components/t';
import type { MessageKey } from '../i18n';
import { useTranslation } from '../i18n';

type ComponentItem = {
  name: string;
  path?: string;
};

type CategorySection = {
  titleKey: MessageKey;
  items: ComponentItem[];
};

const categories: CategorySection[] = [
  {
    titleKey: 'components.categoryGeneral',
    items: [
      { name: 'Button', path: '/components/button' },
      { name: 'IconButton', path: '/components/icon-button' },
      { name: 'LinkButton', path: '/components/link-button' },
      { name: 'Anchor', path: '/components/anchor' },
    ],
  },
  {
    titleKey: 'components.categoryDataEntry',
    items: [
      { name: 'TextField', path: '/components/text-field' },
      { name: 'Textarea', path: '/components/textarea' },
      { name: 'NumberField', path: '/components/number-field' },
      { name: 'Select', path: '/components/select' },
      { name: 'Checkbox', path: '/components/checkbox' },
      { name: 'Radio', path: '/components/radio' },
      { name: 'Autocomplete', path: '/components/autocomplete' },
      { name: 'RangeField', path: '/components/range-field' },
      { name: 'FileField', path: '/components/file-field' },
      { name: 'FormControl', path: '/components/form-control' },
    ],
  },
  {
    titleKey: 'components.categoryDataDisplay',
    items: [
      { name: 'Accordion', path: '/components/accordion' },
      { name: 'Card', path: '/components/card' },
      { name: 'Code', path: '/components/code' },
      { name: 'ListBox', path: '/components/list-box' },
      { name: 'TextTag', path: '/components/text-tag' },
      { name: 'BaselineStatus', path: '/components/baseline-status' },
      { name: 'Progress', path: '/components/progress' },
      { name: 'Heading', path: '/components/heading' },
    ],
  },
  {
    titleKey: 'components.categoryFeedback',
    items: [
      { name: 'Alert', path: '/components/alert' },
      { name: 'Toast', path: '/components/toast' },
      { name: 'Tooltip', path: '/components/tooltip' },
    ],
  },
  {
    titleKey: 'components.categoryOverlay',
    items: [
      { name: 'Dialog', path: '/components/dialog' },
      { name: 'Drawer', path: '/components/drawer' },
      { name: 'Modal', path: '/components/modal' },
      { name: 'Popover', path: '/components/popover' },
      { name: 'DropdownMenu', path: '/components/dropdown-menu' },
    ],
  },
  {
    titleKey: 'components.categoryLayout',
    items: [
      { name: 'Separator', path: '/components/separator' },
      { name: 'Tabs', path: '/components/tabs' },
      { name: 'Breadcrumb', path: '/components/breadcrumb' },
      { name: 'ScrollLinked', path: '/components/scroll-linked' },
    ],
  },
  {
    titleKey: 'components.categoryUtility',
    items: [{ name: 'ErrorBoundary', path: '/components/error-boundary' }],
  },
];

const ComponentCard: FC<{ item: ComponentItem }> = ({ item }) => {
  const content = (
    <div className="rounded-lg border border-border-mute px-4 py-3 transition-colors hover:bg-bg-mute">
      <span className="font-medium text-fg-base text-sm">{item.name}</span>
    </div>
  );

  if (item.path) {
    return <LocaleAnchor path={item.path}>{content}</LocaleAnchor>;
  }

  return content;
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
      {categories.map((category) => (
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
