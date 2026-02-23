'use client';

import { Checkbox } from '@k8o/arte-odyssey';
import { useState } from 'react';

export function CheckboxControlledPreview() {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label="Controlled checkbox"
      onChange={(e) => setChecked(e.target.checked)}
      value={checked}
    />
  );
}
