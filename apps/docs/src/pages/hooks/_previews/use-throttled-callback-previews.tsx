'use client';

import { Button, useThrottledCallback } from '@k8o/arte-odyssey';
import { useState } from 'react';

export function UseThrottledCallbackPreview() {
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const throttledIncrement = useThrottledCallback(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return (
    <div className="flex flex-col gap-4">
      <Button
        onClick={() => {
          setClickCount((prev) => prev + 1);
          throttledIncrement();
        }}
      >
        Increment
      </Button>
      <p className="text-fg-base">
        Clicks: <span className="font-medium">{clickCount}</span>
      </p>
      <p className="text-fg-base">
        Throttled count: <span className="font-medium">{count}</span>
      </p>
    </div>
  );
}
