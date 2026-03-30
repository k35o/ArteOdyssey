'use client';

import { type RefObject, useEffect, useRef } from 'react';

type Options = {
  enabled?: boolean;
  debounceMs?: number;
};

export const useResize = <T extends Element = HTMLElement>(
  ref: RefObject<T | null>,
  callback: (entry: ResizeObserverEntry) => void,
  options: Options = {},
): void => {
  const { enabled = true, debounceMs } = options;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (debounceMs !== undefined) {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          timeoutRef.current = setTimeout(() => {
            callback(entry);
          }, debounceMs);
        } else {
          callback(entry);
        }
      }
    });

    observer.observe(element);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      observer.disconnect();
    };
  }, [ref, callback, enabled, debounceMs]);
};
