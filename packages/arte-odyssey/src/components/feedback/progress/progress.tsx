import type { FC } from 'react';

import { toPrecision } from './../../../helpers/number';

export const Progress: FC<{
  progress: number;
  maxProgress: number;
  minProgress?: number;
  label?: string;
}> = ({ progress, maxProgress, minProgress = 0, label }) => (
  <div className="bg-bg-emphasize w-full rounded-full">
    <div
      aria-label={label ?? `${toPrecision(progress / maxProgress).toString()}%`}
      aria-valuemax={maxProgress}
      aria-valuemin={minProgress}
      aria-valuenow={progress}
      className="bg-primary-bg h-4 rounded-full transition-all"
      role="progressbar"
      style={{
        width: `${((progress / maxProgress) * 100).toString()}%`,
      }}
    />
  </div>
);
