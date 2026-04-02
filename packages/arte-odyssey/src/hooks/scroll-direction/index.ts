'use client';

import { useCallback, useRef, useSyncExternalStore } from 'react';

type ScrollDirection = {
  x: 'left' | 'right';
  y: 'up' | 'down';
};

const SERVER_SNAPSHOT: ScrollDirection = { x: 'right', y: 'up' };
const getServerSnapshot = (): ScrollDirection => SERVER_SNAPSHOT;

export const useScrollDirection = (threshold = 50): ScrollDirection => {
  const stateRef = useRef<{
    direction: ScrollDirection;
    prevScrollX: number;
    prevScrollY: number;
  }>({
    direction: { x: 'right', y: 'up' },
    prevScrollX: 0,
    prevScrollY: 0,
  });

  const subscribe = useCallback(
    (callback: () => void): (() => void) => {
      const handleScroll = (): void => {
        const currentScrollY = window.scrollY;
        const currentScrollX = window.scrollX;
        const state = stateRef.current;

        let changed = false;
        const newDirection: ScrollDirection = { ...state.direction };

        if (currentScrollY > state.prevScrollY && currentScrollY > threshold) {
          if (newDirection.y !== 'down') {
            newDirection.y = 'down';
            changed = true;
          }
        } else if (currentScrollY < state.prevScrollY) {
          if (newDirection.y !== 'up') {
            newDirection.y = 'up';
            changed = true;
          }
        }

        if (currentScrollX > state.prevScrollX && currentScrollX > threshold) {
          if (newDirection.x !== 'right') {
            newDirection.x = 'right';
            changed = true;
          }
        } else if (currentScrollX < state.prevScrollX) {
          if (newDirection.x !== 'left') {
            newDirection.x = 'left';
            changed = true;
          }
        }

        stateRef.current = {
          direction: newDirection,
          prevScrollX: currentScrollX,
          prevScrollY: currentScrollY,
        };

        if (changed) {
          callback();
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },
    [threshold],
  );

  const getSnapshot = (): ScrollDirection => stateRef.current.direction;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
