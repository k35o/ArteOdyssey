'use client';

import { useCallback, useSyncExternalStore } from 'react';

import { matchMedia } from '../../internal/dom-support';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const BREAKPOINTS: Record<Breakpoint, string> = {
  sm: '40rem',
  md: '48rem',
  lg: '64rem',
  xl: '80rem',
  '2xl': '96rem',
};

export const useBreakpoint = (breakpoint: Breakpoint): boolean => {
  const query = `(min-width: ${BREAKPOINTS[breakpoint]})`;

  const subscribe = useCallback(
    (cb: () => void) => {
      const mediaQueryList = matchMedia(query);
      if (!mediaQueryList) return () => {};
      mediaQueryList.addEventListener('change', cb);
      return () => {
        mediaQueryList.removeEventListener('change', cb);
      };
    },
    [query],
  );

  const getSnapshot = () => matchMedia(query)?.matches ?? false;

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
};
