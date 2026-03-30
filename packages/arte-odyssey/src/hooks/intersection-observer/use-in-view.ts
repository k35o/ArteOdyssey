'use client';

import { useCallback, useState } from 'react';
import { useIntersectionObserver } from './index';

type UseInViewOptions = {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  once?: boolean;
};

type UseInViewReturn<T extends Element> = {
  ref: (node: T | null) => void;
  isInView: boolean;
};

export const useInView = <T extends Element = HTMLElement>(
  options: UseInViewOptions = {},
): UseInViewReturn<T> => {
  const { once = false, ...observerOptions } = options;
  const { ref: observerRef, isIntersecting } = useIntersectionObserver<T>(observerOptions);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  if (isIntersecting && !hasBeenInView) {
    setHasBeenInView(true);
  }

  const isInView = once ? hasBeenInView : isIntersecting;

  const ref = useCallback(
    (node: T | null) => {
      if (once && hasBeenInView) return;
      observerRef(node);
    },
    [once, hasBeenInView, observerRef],
  );

  return { ref, isInView };
};
