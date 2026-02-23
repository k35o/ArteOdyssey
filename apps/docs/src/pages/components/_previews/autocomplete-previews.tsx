'use client';

import { Autocomplete } from '@k8o/arte-odyssey';
import { useState } from 'react';

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Grape', value: 'grape' },
  { label: 'Orange', value: 'orange' },
];

export function AutocompleteBasicPreview() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <Autocomplete
      describedbyId={undefined}
      id="autocomplete-basic"
      isDisabled={false}
      isInvalid={false}
      isRequired={false}
      onChange={setValue}
      options={options}
      value={value}
    />
  );
}

export function AutocompleteRequiredPreview() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <Autocomplete
      describedbyId={undefined}
      id="autocomplete-required"
      isDisabled={false}
      isInvalid={false}
      isRequired
      onChange={setValue}
      options={options}
      value={value}
    />
  );
}

export function AutocompleteMultiplePreview() {
  const [value, setValue] = useState<string[]>(['apple', 'cherry']);
  return (
    <Autocomplete
      describedbyId={undefined}
      id="autocomplete-multiple"
      isDisabled={false}
      isInvalid={false}
      isRequired={false}
      onChange={setValue}
      options={options}
      value={value}
    />
  );
}

export function AutocompleteDisabledPreview() {
  const [value, setValue] = useState<string[]>(['apple']);
  return (
    <Autocomplete
      describedbyId={undefined}
      id="autocomplete-disabled"
      isDisabled
      isInvalid={false}
      isRequired={false}
      onChange={setValue}
      options={options}
      value={value}
    />
  );
}

export function AutocompleteInvalidPreview() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <Autocomplete
      describedbyId={undefined}
      id="autocomplete-invalid"
      isDisabled={false}
      isInvalid
      isRequired={false}
      onChange={setValue}
      options={options}
      value={value}
    />
  );
}
