'use client';

import { type FC, Suspense, use } from 'react';

declare global {
  namespace React {
    namespace JSX {
      // declaration merging requires interface for IntrinsicElements
      // eslint-disable-next-line typescript-eslint/consistent-type-definitions
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
      className="border-border-base bg-bg-base max-w-full rounded-lg border p-4 wrap-normal"
      featureId={featureId}
    />
  );
};

const BaselineStatusSkeleton: FC = () => (
  <div className="border-border-base bg-bg-base h-58 max-w-full animate-pulse rounded-lg border p-4 sm:h-40 md:h-30" />
);

export const BaselineStatus: FC<{ featureId: string }> = ({ featureId }) => (
  <Suspense fallback={<BaselineStatusSkeleton />}>
    <BaselineStatusResolved featureId={featureId} />
  </Suspense>
);
