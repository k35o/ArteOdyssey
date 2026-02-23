'use client';

import { Radio } from '@k8o/arte-odyssey';
import { useState } from 'react';

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

export function RadioBasicPreview() {
  const [value, setValue] = useState('apple');
  return (
    <Radio
      isDisabled={false}
      labelId="fruit-label"
      name="fruit"
      onChange={(e) => setValue(e.target.value)}
      options={options}
      value={value}
    />
  );
}

export function RadioDisabledPreview() {
  const [value, setValue] = useState('banana');
  return (
    <Radio
      isDisabled
      labelId="fruit-disabled-label"
      name="fruit-disabled"
      onChange={(e) => setValue(e.target.value)}
      options={options}
      value={value}
    />
  );
}
