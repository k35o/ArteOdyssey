'use client';

import { useScrollDirection } from '@k8o/arte-odyssey';
import { useRef } from 'react';

export function UseScrollDirectionPreview() {
  const { x, y } = useScrollDirection();

  return (
    <div className="flex items-center gap-4 text-sm">
      <span>
        Vertical: <strong>{y}</strong>
      </span>
      <span>
        Horizontal: <strong>{x}</strong>
      </span>
    </div>
  );
}

export function UseScrollDirectionTargetPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { y } = useScrollDirection({ target: scrollRef, threshold: 20 });

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="text-sm">
        Vertical: <strong>{y}</strong>
      </div>
      <div
        className="h-32 w-full overflow-auto rounded-md border border-border-mute bg-bg-base p-3"
        ref={scrollRef}
      >
        <div className="h-96 bg-gradient-to-b from-primary-bg-subtle to-bg-base p-3 text-fg-mute text-sm">
          この領域をスクロールすると、この領域のスクロール方向が検知されます。
        </div>
      </div>
    </div>
  );
}
