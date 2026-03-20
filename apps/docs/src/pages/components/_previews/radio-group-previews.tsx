'use client';

import { RadioGroup } from '@k8o/arte-odyssey';
import { useState } from 'react';

export function RadioGroupControlledPreview() {
  const [value, setValue] = useState('react');

  return (
    <RadioGroup name="framework" onChange={setValue} value={value}>
      <RadioGroup.Item label="React" value="react" />
      <RadioGroup.Item label="Vue" value="vue" />
      <RadioGroup.Item label="Svelte" value="svelte" />
    </RadioGroup>
  );
}

export function RadioGroupDisabledPreview() {
  return (
    <RadioGroup defaultValue="vue" isDisabled name="framework-disabled">
      <RadioGroup.Item label="React" value="react" />
      <RadioGroup.Item label="Vue" value="vue" />
      <RadioGroup.Item label="Svelte" value="svelte" />
    </RadioGroup>
  );
}
