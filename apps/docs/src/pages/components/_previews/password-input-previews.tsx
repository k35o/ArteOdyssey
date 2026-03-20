'use client';

import { PasswordInput } from '@k8o/arte-odyssey';
import { useState } from 'react';

export function PasswordInputControlledPreview() {
  const [value, setValue] = useState('hunter2');

  return (
    <PasswordInput
      isDisabled={false}
      isInvalid={false}
      isRequired={false}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      value={value}
    />
  );
}
