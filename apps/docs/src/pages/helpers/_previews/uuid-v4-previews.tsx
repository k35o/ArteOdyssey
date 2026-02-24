'use client';

import { uuidV4 } from '@k8o/arte-odyssey/helpers/uuid-v4';
import { useState } from 'react';

export function UuidV4Preview() {
  const [uuid, setUuid] = useState(() => uuidV4());

  return (
    <div className="flex flex-col items-start gap-4">
      <code className="text-sm">{uuid}</code>
      <button
        className="rounded-lg border border-border-mute px-4 py-2 text-sm transition-colors hover:bg-bg-mute"
        onClick={() => setUuid(uuidV4())}
        type="button"
      >
        Generate
      </button>
    </div>
  );
}
