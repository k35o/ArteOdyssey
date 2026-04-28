'use client';

import { useSyncExternalStore } from 'react';

export const useClient = (): boolean =>
  useSyncExternalStore(
    () => () => {
      // なにもしない
    },
    () => true,
    () => false,
  );
