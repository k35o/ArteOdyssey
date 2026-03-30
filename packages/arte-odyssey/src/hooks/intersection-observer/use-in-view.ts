'use client';

import { type RefObject, useEffect, useState } from 'react';
import { useIntersectionObserver } from './use-intersection-observer';

type UseInViewOptions = {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  once?: boolean;
};

export const useInView = <T extends Element = HTMLElement>(
  ref: RefObject<T | null>,
  options: UseInViewOptions = {},
): boolean => {
  const { once = false, ...observerOptions } = options;
  const { isIntersecting } = useIntersectionObserver(ref, observerOptions);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      setHasBeenInView(true);
    }
  }, [isIntersecting]);

  return once ? hasBeenInView : isIntersecting;
};
