'use client';

import { useCallback, useEffect, useRef } from 'react';

type UseScrollLockReturn = {
  lock: () => void;
  unlock: () => void;
};

export const useScrollLock = (): UseScrollLockReturn => {
  const originalStyleRef = useRef<string | null>(null);

  const lock = useCallback(() => {
    if (originalStyleRef.current !== null) return;
    originalStyleRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }, []);

  const unlock = useCallback(() => {
    if (originalStyleRef.current === null) return;
    document.body.style.overflow = originalStyleRef.current;
    originalStyleRef.current = null;
  }, []);

  useEffect(() => {
    return () => {
      if (originalStyleRef.current !== null) {
        document.body.style.overflow = originalStyleRef.current;
        originalStyleRef.current = null;
      }
    };
  }, []);

  return { lock, unlock };
};
