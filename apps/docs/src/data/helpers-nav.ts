import type { NavCategory } from './nav-types';

export const helperCategories: NavCategory[] = [
  {
    titleKey: 'helpers.categoryStyling',
    items: [{ name: 'cn', path: '/helpers/cn' }],
  },
  {
    titleKey: 'helpers.categoryColor',
    items: [{ name: 'findAllColors', path: '/helpers/find-all-colors' }],
  },
  {
    titleKey: 'helpers.categoryNumber',
    items: [
      { name: 'between', path: '/helpers/between' },
      { name: 'cast', path: '/helpers/cast' },
      { name: 'commalize', path: '/helpers/commalize' },
      { name: 'toPrecision', path: '/helpers/to-precision' },
    ],
  },
  {
    titleKey: 'helpers.categoryUtility',
    items: [
      { name: 'uuidV4', path: '/helpers/uuid-v4' },
      { name: 'isInternalRoute', path: '/helpers/is-internal-route' },
    ],
  },
];
