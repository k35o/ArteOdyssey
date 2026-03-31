'use client';

import { useSyncExternalStore } from 'react';

type Size = {
  width: number;
  height: number;
};

const getSnapshot = (): Size => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const getServerSnapshot = (): Size => ({
  width: 0,
  height: 0,
});

const subscribe = (callback: () => void): (() => void) => {
  window.addEventListener('resize', callback);
  return () => {
    window.removeEventListener('resize', callback);
  };
};

export const useWindowSize = (): Size => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
