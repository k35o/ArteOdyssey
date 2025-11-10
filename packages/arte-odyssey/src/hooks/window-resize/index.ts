'use client';

import { useEffect, useRef } from 'react';

type Size = {
  width: number;
  height: number;
};

type Options = {
  enabled?: boolean;
  debounceMs?: number;
};

export const useWindowResize = (
  callback: (size: Size) => void,
  options: Options = {},
): void => {
  const { enabled = true, debounceMs } = options;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const handleResize = () => {
      const size = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      if (debounceMs !== undefined) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          callback(size);
        }, debounceMs);
      } else {
        callback(size);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [callback, enabled, debounceMs]);
};
