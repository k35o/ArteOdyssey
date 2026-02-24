'use client';

import { useLocalStorage } from '@k8o/arte-odyssey/hooks/local-storage';

export function UseLocalStorageBasicPreview() {
  const [value, setValue] = useLocalStorage('demo-count', 0);

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

export function UseLocalStorageRemovePreview() {
  const [value, setValue, handleRemove] = useLocalStorage(
    'demo-name',
    'ArteOdyssey',
  );

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
