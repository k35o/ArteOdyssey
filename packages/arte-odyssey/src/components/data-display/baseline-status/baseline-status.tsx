'use client';

import { type FC, Suspense, use } from 'react';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'baseline-status': { featureId: string; className: string };
      }
    }
  }
}

let loadPromise: Promise<unknown> | null = null;

const loadBaselineStatus = (): Promise<unknown> => {
  loadPromise ??= import('baseline-status' as string);
  return loadPromise;
};

const BaselineStatusResolved: FC<{ featureId: string }> = ({ featureId }) => {
  use(loadBaselineStatus());
  return (
    <baseline-status
      className="wrap-normal max-w-full rounded-lg border border-border-base bg-bg-base p-4"
      featureId={featureId}
    />
  );
};

const BaselineStatusSkeleton: FC = () => (
  <div className="h-58 max-w-full animate-pulse rounded-lg border border-border-base bg-bg-base p-4 sm:h-40 md:h-30" />
);

export const BaselineStatus: FC<{ featureId: string }> = ({ featureId }) => (
  <Suspense fallback={<BaselineStatusSkeleton />}>
    <BaselineStatusResolved featureId={featureId} />
  </Suspense>
);
