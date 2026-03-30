'use client';

import { type RefObject, useState } from 'react';
import { useIntersectionObserver } from './index';

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

  if (isIntersecting && !hasBeenInView) {
    setHasBeenInView(true);
  }

  return once ? hasBeenInView : isIntersecting;
};
