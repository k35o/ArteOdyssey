'use client';

import { type RefObject, useEffect } from 'react';

type Options = {
  enabled?: boolean;
};

export const useResize = <T extends Element = HTMLElement>(
  ref: RefObject<T | null>,
  callback: (entry: ResizeObserverEntry) => void,
  options: Options = {},
): void => {
  const { enabled = true } = options;

  useEffect(() => {
    if (!enabled) return;

    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        callback(entry);
      }
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, callback, enabled]);
};
