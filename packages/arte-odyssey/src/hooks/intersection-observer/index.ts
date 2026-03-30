'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type UseIntersectionObserverOptions = {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
};

type UseIntersectionObserverReturn<T extends Element> = {
  ref: (node: T | null) => void;
  entry: IntersectionObserverEntry | undefined;
  isIntersecting: boolean;
};

export const useIntersectionObserver = <T extends Element = HTMLElement>(
  options: UseIntersectionObserverOptions = {},
): UseIntersectionObserverReturn<T> => {
  const { threshold = 0, root = null, rootMargin = '0px' } = options;
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const observerRef = useRef<IntersectionObserver>(undefined);
  const nodeRef = useRef<T | null>(null);

  const cleanup = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = undefined;
    }
  }, []);

  const observe = useCallback(() => {
    cleanup();
    if (!nodeRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setEntry(entry);
        }
      },
      { threshold, root, rootMargin },
    );
    observerRef.current.observe(nodeRef.current);
  }, [threshold, root, rootMargin, cleanup]);

  useEffect(() => {
    observe();
    return cleanup;
  }, [observe, cleanup]);

  const ref = useCallback(
    (node: T | null) => {
      nodeRef.current = node;
      observe();
    },
    [observe],
  );

  return {
    ref,
    entry,
    isIntersecting: entry?.isIntersecting ?? false,
  };
};
