import type { NavCategory } from './nav-types';

export const hookCategories: NavCategory[] = [
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
