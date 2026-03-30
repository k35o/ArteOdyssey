'use client';

import { useSessionStorage } from '@k8o/arte-odyssey';

export function UseSessionStorageBasicPreview() {
  const [value, setValue] = useSessionStorage('demo-session-count', 0);

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm">
        Count: <strong>{value}</strong>
      </span>
      <button
        className="rounded-lg border border-border-mute px-4 py-2 text-sm transition-colors hover:bg-bg-mute"
        onClick={() => setValue(value + 1)}
        type="button"
      >
        Increment
      </button>
    </div>
  );
}

export function UseSessionStorageRemovePreview() {
  const [value, setValue, handleRemove] = useSessionStorage('demo-session-name', 'ArteOdyssey');

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm">
        Value: <strong>{value}</strong>
      </span>
      <button
        className="rounded-lg border border-border-mute px-4 py-2 text-sm transition-colors hover:bg-bg-mute"
        onClick={() => setValue('Updated!')}
        type="button"
      >
        Update
      </button>
      <button
        className="rounded-lg border border-border-mute px-4 py-2 text-sm transition-colors hover:bg-bg-mute"
        onClick={handleRemove}
        type="button"
      >
        Remove
      </button>
    </div>
  );
}
