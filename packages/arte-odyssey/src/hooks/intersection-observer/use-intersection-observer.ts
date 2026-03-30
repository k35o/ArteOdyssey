'use client';

import { type RefObject, useEffect, useState } from 'react';

type UseIntersectionObserverOptions = {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
};

type UseIntersectionObserverReturn = {
  entry: IntersectionObserverEntry | undefined;
  isIntersecting: boolean;
};

export const useIntersectionObserver = <T extends Element = HTMLElement>(
  ref: RefObject<T | null>,
  options: UseIntersectionObserverOptions = {},
): UseIntersectionObserverReturn => {
  const { threshold = 0, root = null, rootMargin = '0px' } = options;
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setEntry(entry);
        }
      },
      { threshold, root, rootMargin },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, root, rootMargin]);

  return {
    entry,
    isIntersecting: entry?.isIntersecting ?? false,
  };
};
