'use client';

import { cn } from '@k8o/arte-odyssey/helpers/cn';
import { useState } from 'react';

export function CnPreview() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          'rounded-lg border border-border-mute px-4 py-2 text-sm',
          'bg-bg-mute text-fg-base',
        )}
      >
        Merged classes
      </div>
      <div className="flex items-center gap-4">
        <div
          className={cn(
            'rounded-lg px-4 py-2 text-sm',
            isActive && 'bg-bg-mute',
          )}
        >
          Conditional classes
        </div>
        <button
          className="rounded-lg border border-border-mute px-3 py-1 text-sm transition-colors hover:bg-bg-mute"
          onClick={() => setIsActive((prev) => !prev)}
          type="button"
        >
          Toggle
        </button>
      </div>
    </div>
  );
}
