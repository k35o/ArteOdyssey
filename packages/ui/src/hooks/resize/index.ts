'use client';

import { useEffect } from 'react';
import type { RefObject } from 'react';

import { createResizeObserver } from '../../internal/dom-support';

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
    if (!enabled) return undefined;

    const element = ref.current;
    if (!element) return undefined;

    const observer = createResizeObserver((entries) => {
      for (const entry of entries) {
        callback(entry);
      }
    });
    if (!observer) return undefined;

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, callback, enabled]);
};
