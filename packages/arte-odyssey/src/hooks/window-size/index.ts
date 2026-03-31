'use client';

import { useSyncExternalStore } from 'react';

type Size = {
  width: number;
  height: number;
};

let cachedSnapshot: Size = { width: 0, height: 0 };

const getSnapshot = (): Size => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  if (cachedSnapshot.width === w && cachedSnapshot.height === h) {
    return cachedSnapshot;
  }
  cachedSnapshot = { width: w, height: h };
  return cachedSnapshot;
};

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
