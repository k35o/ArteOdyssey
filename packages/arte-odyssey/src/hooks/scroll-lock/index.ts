'use client';

import { useCallback, useEffect, useRef } from 'react';

type UseScrollLockReturn = {
  lock: () => void;
  unlock: () => void;
};

let lockCount = 0;
let originalOverflow: string | null = null;

export const useScrollLock = (): UseScrollLockReturn => {
  const isLockedRef = useRef(false);

  const lock = useCallback(() => {
    if (isLockedRef.current) return;
    isLockedRef.current = true;
    if (lockCount === 0) {
      originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    lockCount++;
  }, []);

  const unlock = useCallback(() => {
    if (!isLockedRef.current) return;
    isLockedRef.current = false;
    lockCount--;
    if (lockCount === 0 && originalOverflow !== null) {
      document.body.style.overflow = originalOverflow;
      originalOverflow = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (isLockedRef.current) {
        isLockedRef.current = false;
        lockCount--;
        if (lockCount === 0 && originalOverflow !== null) {
          document.body.style.overflow = originalOverflow;
          originalOverflow = null;
        }
      }
    };
  }, []);

  return { lock, unlock };
};
