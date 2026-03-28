'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any;

export function useThrottle<T extends AnyFunction>(
  callback: T,
  interval: number,
): (...args: Parameters<T>) => void;
export function useThrottle<T>(value: T, interval: number): T;
export function useThrottle<T>(
  valueOrCallback: T,
  interval: number,
): T | ((...args: unknown[]) => void) {
  if (typeof valueOrCallback === 'function') {
    return useThrottledCallback(valueOrCallback as AnyFunction, interval);
  }
  return useThrottledValue(valueOrCallback, interval);
}

const useThrottledValue = <T>(value: T, interval: number): T => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastUpdatedRef = useRef(0);

  useEffect(() => {
    const now = Date.now();
    const elapsed = now - lastUpdatedRef.current;

    if (elapsed >= interval) {
      setThrottledValue(value);
      lastUpdatedRef.current = now;
    } else {
      const timer = setTimeout(() => {
        setThrottledValue(value);
        lastUpdatedRef.current = Date.now();
      }, interval - elapsed);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [value, interval]);

  return throttledValue;
};

const useThrottledCallback = <T extends AnyFunction>(callback: T, interval: number) => {
  const lastCalledRef = useRef(0);
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
      const now = Date.now();
      const elapsed = now - lastCalledRef.current;

      if (elapsed >= interval) {
        callbackRef.current(...args);
        lastCalledRef.current = now;
      } else {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          callbackRef.current(...args);
          lastCalledRef.current = Date.now();
        }, interval - elapsed);
      }
    },
    [interval],
  );
};
