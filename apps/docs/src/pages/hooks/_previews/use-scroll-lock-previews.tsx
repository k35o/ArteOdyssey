'use client';

import { Button, useScrollLock } from '@k8o/arte-odyssey';

export function UseScrollLockPreview() {
  const { lock, unlock } = useScrollLock();

  return (
    <div className="flex gap-2">
      <Button onClick={lock} size="sm">
        Lock
      </Button>
      <Button color="gray" onClick={unlock} size="sm">
        Unlock
      </Button>
    </div>
  );
}
