'use client';

import { Button, useScrollLock } from '@k8o/arte-odyssey';
import { useRef } from 'react';

export function UseScrollLockPreview() {
  const { lock, unlock } = useScrollLock();

  return (
    <div className="flex gap-2">
      <Button onClick={lock} size="sm">
        Lock body
      </Button>
      <Button color="gray" onClick={unlock} size="sm">
        Unlock body
      </Button>
    </div>
  );
}

export function UseScrollLockTargetPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { lock, unlock } = useScrollLock(scrollRef);

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex gap-2">
        <Button onClick={lock} size="sm">
          Lock area
        </Button>
        <Button color="gray" onClick={unlock} size="sm">
          Unlock area
        </Button>
      </div>
      <div
        className="h-32 w-full overflow-auto rounded-md border border-border-mute bg-bg-base p-3"
        ref={scrollRef}
      >
        <div className="h-96 bg-gradient-to-b from-primary-bg-subtle to-bg-base p-3 text-fg-mute text-sm">
          この領域をスクロールしてみてください。Lock area
          を押すとこの要素のスクロールだけが停止します。
        </div>
      </div>
    </div>
  );
}
