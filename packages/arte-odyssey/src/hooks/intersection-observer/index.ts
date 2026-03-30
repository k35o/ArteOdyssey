'use client';

export { useInView } from './use-in-view';
import { type RefObject, useEffect, useRef, useState } from 'react';

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
  const observerRef = useRef<IntersectionObserver>(undefined);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setEntry(entry);
        }
      },
      { threshold, root, rootMargin },
    );
    observerRef.current.observe(element);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [ref, threshold, root, rootMargin]);

  return {
    entry,
    isIntersecting: entry?.isIntersecting ?? false,
  };
};
