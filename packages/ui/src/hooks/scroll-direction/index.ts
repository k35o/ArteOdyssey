'use client';

import { useCallback, useRef, useSyncExternalStore } from 'react';
import type { RefObject } from 'react';

type ScrollDirection = {
  x: 'left' | 'right';
  y: 'up' | 'down';
};

type UseScrollDirectionOptions = {
  threshold?: number;
  target?: RefObject<HTMLElement | null>;
};

const SERVER_SNAPSHOT: ScrollDirection = { x: 'right', y: 'up' };
const getServerSnapshot = (): ScrollDirection => SERVER_SNAPSHOT;

export const useScrollDirection = (
  options: UseScrollDirectionOptions = {},
): ScrollDirection => {
  const { threshold = 50, target } = options;

  const stateRef = useRef<{
    direction: ScrollDirection;
    prevScrollX: number;
    prevScrollY: number;
  }>({
    direction: { x: 'right', y: 'up' },
    prevScrollX: 0,
    prevScrollY: 0,
  });

  // subscribe は useSyncExternalStore に渡すので同一性を保つ必要がある。
  // target.current を読むのは購読を張る時点 (commit 後) であってレンダー中ではない。
  // 依存に target.current を入れると要素が変わるたび購読を張り直すことになり、
  // それは狙いではないので、依存は ref オブジェクトそのものに留める。
  /* oxlint-disable react/preserve-manual-memoization -- 依存は ref オブジェクトで正しい。
     target.current を入れると要素が変わるたびに購読を張り直すことになる。 */
  const subscribe = useCallback(
    (callback: () => void): (() => void) => {
      const element = target?.current ?? null;
      const eventTarget: Window | HTMLElement = element ?? window;

      const getScroll = (): { x: number; y: number } => {
        if (element) {
          return { x: element.scrollLeft, y: element.scrollTop };
        }
        return { x: window.scrollX, y: window.scrollY };
      };

      const handleScroll = (): void => {
        const { x: currentScrollX, y: currentScrollY } = getScroll();
        const state = stateRef.current;

        let changed = false;
        const newDirection: ScrollDirection = { ...state.direction };

        if (
          currentScrollY > state.prevScrollY &&
          currentScrollY > threshold &&
          newDirection.y !== 'down'
        ) {
          newDirection.y = 'down';
          changed = true;
        } else if (
          currentScrollY < state.prevScrollY &&
          newDirection.y !== 'up'
        ) {
          newDirection.y = 'up';
          changed = true;
        }

        if (
          currentScrollX > state.prevScrollX &&
          currentScrollX > threshold &&
          newDirection.x !== 'right'
        ) {
          newDirection.x = 'right';
          changed = true;
        } else if (
          currentScrollX < state.prevScrollX &&
          newDirection.x !== 'left'
        ) {
          newDirection.x = 'left';
          changed = true;
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

      eventTarget.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        eventTarget.removeEventListener('scroll', handleScroll);
      };
    },
    [threshold, target],
  );
  /* oxlint-enable react/preserve-manual-memoization */

  const getSnapshot = (): ScrollDirection => stateRef.current.direction;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
