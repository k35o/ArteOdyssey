'use client';

import { useCallback, useSyncExternalStore } from 'react';

import { matchMedia } from '../../../internal/dom-support';

/**
 * hover 系メディアクエリの現在値を購読する。
 * SSR ではサーバースナップショットとして true を返し、hover 前提の
 * props を初期レンダーに含めてもハイドレーション差分にならないようにする。
 */
export const useCanHover = (query = '(hover: hover)'): boolean => {
  const subscribe = useCallback(
    (cb: () => void) => {
      const mql = matchMedia(query);
      if (!mql) return () => {};
      mql.addEventListener('change', cb);
      return () => {
        mql.removeEventListener('change', cb);
      };
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => matchMedia(query)?.matches ?? true,
    () => true,
  );
};
