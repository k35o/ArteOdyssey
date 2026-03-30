'use client';

import { TextField, useDebounce } from '@k8o/arte-odyssey';
import { useState } from 'react';

export function UseDebouncePreview() {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 500);

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
        Debounced (500ms): <span className="font-medium">{debouncedText}</span>
      </p>
    </div>
  );
}
