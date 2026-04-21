'use client';

import { useCallback, useEffect, useRef, useTransition } from 'react';

type DebouncedAction = (signal: AbortSignal) => void | Promise<void>;

export const useDebouncedTransition = (
  delay: number,
): readonly [boolean, (action: DebouncedAction) => void] => {
  const [isPending, startTransition] = useTransition();
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const run = useCallback(
    (action: DebouncedAction) => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      const { signal } = controller;

      startTransition(async () => {
        try {
          await delayWithSignal(delay, signal);
        } catch {
          return;
        }
        if (signal.aborted) return;
        await action(signal);
      });
    },
    [delay],
  );

  return [isPending, run] as const;
};

const delayWithSignal = (ms: number, signal: AbortSignal): Promise<void> =>
  new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(signal.reason);
      return;
    }
    const timer = setTimeout(resolve, ms);
    signal.addEventListener(
      'abort',
      () => {
        clearTimeout(timer);
        reject(signal.reason);
      },
      { once: true },
    );
  });
