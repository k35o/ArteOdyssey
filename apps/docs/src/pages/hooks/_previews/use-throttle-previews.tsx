'use client';

import { TextField, useThrottle } from '@k8o/arte-odyssey';
import { useState } from 'react';

export function UseThrottlePreview() {
  const [text, setText] = useState('');
  const throttledText = useThrottle(text, 1000);

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <TextField
        isDisabled={false}
        isInvalid={false}
        isRequired={false}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Type something..."
        value={text}
      />
      <p className="text-fg-base">
        Input: <span className="font-medium">{text}</span>
      </p>
      <p className="text-fg-base">
        Throttled (1000ms): <span className="font-medium">{throttledText}</span>
      </p>
    </div>
  );
}
