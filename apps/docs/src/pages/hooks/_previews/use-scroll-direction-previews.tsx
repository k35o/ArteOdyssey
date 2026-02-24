'use client';

import { useScrollDirection } from '@k8o/arte-odyssey/hooks/scroll-direction';

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
