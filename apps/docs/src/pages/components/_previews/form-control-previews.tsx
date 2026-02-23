'use client';

import { FormControl, TextField } from '@k8o/arte-odyssey';

export function FormControlBasicPreview() {
  return (
    <FormControl
      label="Name"
      renderInput={(props) => (
        <TextField {...props} placeholder="Enter your name" />
      )}
    />
  );
}

export function FormControlHelpTextPreview() {
  return (
    <FormControl
      helpText="Please enter a valid email address."
      label="Email"
      renderInput={(props) => (
        <TextField {...props} placeholder="you@example.com" />
      )}
    />
  );
}

export function FormControlErrorTextPreview() {
  return (
    <FormControl
      errorText="This field is required."
      isInvalid
      label="Email"
      renderInput={(props) => <TextField {...props} />}
    />
  );
}

export function FormControlRequiredPreview() {
  return (
    <FormControl
      isRequired
      label="Username"
      renderInput={(props) => (
        <TextField {...props} placeholder="Required field" />
      )}
    />
  );
}

export function FormControlDisabledPreview() {
  return (
    <FormControl
      isDisabled
      label="Username"
      renderInput={(props) => (
        <TextField {...props} placeholder="Disabled field" />
      )}
    />
  );
}
