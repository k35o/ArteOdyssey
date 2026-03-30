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
      { name: 'useSessionStorage', path: '/hooks/use-session-storage' },
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
      { name: 'useBreakpoint', path: '/hooks/use-breakpoint' },
      { name: 'useClient', path: '/hooks/use-client' },
      { name: 'useDisclosure', path: '/hooks/use-disclosure' },
      { name: 'useStep', path: '/hooks/use-step' },
      { name: 'useWindowSize', path: '/hooks/use-window-size' },
    ],
  },
  {
    titleKey: 'hooks.categoryPerformance',
    items: [
      { name: 'useDebounce', path: '/hooks/use-debounce' },
      { name: 'useDebouncedCallback', path: '/hooks/use-debounced-callback' },
      { name: 'useThrottle', path: '/hooks/use-throttle' },
      { name: 'useThrottledCallback', path: '/hooks/use-throttled-callback' },
    ],
  },
  {
    titleKey: 'hooks.categoryObserver',
    items: [
      { name: 'useIntersectionObserver', path: '/hooks/use-intersection-observer' },
      { name: 'useInView', path: '/hooks/use-in-view' },
    ],
  },
];
