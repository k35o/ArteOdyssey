'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any;

export function useDebounce<T extends AnyFunction>(
  callback: T,
  delay: number,
): (...args: Parameters<T>) => void;
export function useDebounce<T>(value: T, delay: number): T;
export function useDebounce<T>(
  valueOrCallback: T,
  delay: number,
): T | ((...args: unknown[]) => void) {
  if (typeof valueOrCallback === 'function') {
    return useDebouncedCallback(valueOrCallback as AnyFunction, delay);
  }
  return useDebouncedValue(valueOrCallback, delay);
}

const useDebouncedValue = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

const useDebouncedCallback = <T extends AnyFunction>(callback: T, delay: number) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return useCallback(
    (...args: Parameters<T>) => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay],
  );
};
