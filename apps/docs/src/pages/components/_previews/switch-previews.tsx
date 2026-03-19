'use client';

import { Switch } from '@k8o/arte-odyssey';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

export function SwitchControlledPreview() {
  const [value, setValue] = useState(false);

  return (
    <Switch
      isDisabled={false}
      isInvalid={false}
      isRequired={false}
      label="Controlled switch"
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked);
      }}
      value={value}
    />
  );
}
