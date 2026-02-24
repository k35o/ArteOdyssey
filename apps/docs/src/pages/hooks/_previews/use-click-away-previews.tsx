'use client';

import { useClickAway } from '@k8o/arte-odyssey/hooks/click-away';
import { useState } from 'react';

export function UseClickAwayPreview() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway<HTMLDivElement>(() => {
    setIsOpen(false);
  }, isOpen);

  return (
    <div className="flex flex-col items-start gap-4">
      <button
        className="rounded-lg border border-border-mute px-4 py-2 text-sm transition-colors hover:bg-bg-mute"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        Open Popup
      </button>
      {isOpen && (
        <div
          className="rounded-lg border border-border-base bg-bg-base p-4 text-sm shadow-md"
          ref={ref}
        >
          Click outside to close
        </div>
      )}
    </div>
  );
}
