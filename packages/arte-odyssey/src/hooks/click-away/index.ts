'use client';

import { type RefObject, useEffect } from 'react';

export const useClickAway = <T extends Element = HTMLElement>(
  ref: RefObject<T | null>,
  callback: (e: Event) => void,
  enabled = true,
): void => {
  useEffect(() => {
    if (!enabled) return;

    const handler: EventListener = (e) => {
      const element = ref.current;
      if (element && !element.contains(e.target as HTMLElement)) {
        callback(e);
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [ref, callback, enabled]);
};
