'use client';

import { Button, useDebouncedCallback } from '@k8o/arte-odyssey';
import { useState } from 'react';

export function UseDebouncedCallbackPreview() {
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const debouncedIncrement = useDebouncedCallback(() => {
    setCount((prev) => prev + 1);
  }, 300);

  return (
    <div className="flex flex-col gap-4">
      <Button
        onClick={() => {
          setClickCount((prev) => prev + 1);
          debouncedIncrement();
        }}
      >
        Increment
      </Button>
      <p className="text-fg-base">
        Clicks: <span className="font-medium">{clickCount}</span>
      </p>
      <p className="text-fg-base">
        Debounced count: <span className="font-medium">{count}</span>
      </p>
    </div>
  );
}
