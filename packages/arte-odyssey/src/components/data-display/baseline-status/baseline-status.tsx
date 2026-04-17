'use client';

import { type FC, useSyncExternalStore } from 'react';

let didInit = false;

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'baseline-status': { featureId: string; className: string };
      }
    }
  }
}

export const BaselineStatus: FC<{ featureId: string }> = ({ featureId }) => {
  const isLoad = useSyncExternalStore(
    (onStoreChange: () => void) => {
      if (!didInit) {
        didInit = true;
        void import('baseline-status' as string).then(() => {
          onStoreChange();
        });
      }
      return () => {
        /* noop */
      };
    },
    () => didInit,
    () => false,
  );

  if (!isLoad) {
    return (
      <div className="h-58 max-w-full animate-pulse rounded-lg border border-border-base bg-bg-base p-4 sm:h-40 md:h-30" />
    );
  }

  return (
    <baseline-status
      className="wrap-normal max-w-full rounded-lg border border-border-base bg-bg-base p-4"
      featureId={featureId}
    />
  );
};
