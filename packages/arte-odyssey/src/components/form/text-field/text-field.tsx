'use client';

import type { ChangeEventHandler, FC } from 'react';
import { useFormStatus } from 'react-dom';
import { cn } from './../../../helpers/cn';

type BaseProps = {
  id?: string;
  name?: string;
  describedbyId?: string | undefined;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
  placeholder?: string;
};

type ControlledProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  defaultValue?: never;
};

type UncontrolledProps = {
  defaultValue?: string;
  value?: never;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

type Props = BaseProps & (ControlledProps | UncontrolledProps);

export const TextField: FC<Props> = ({
  id,
  name,
  describedbyId,
  isInvalid,
  isDisabled,
  isRequired,
  placeholder,
  defaultValue,
  value,
  onChange,
}) => {
  const { pending } = useFormStatus();
  return (
    <input
      aria-describedby={describedbyId}
      aria-invalid={isInvalid}
      aria-required={isRequired}
      className={cn(
        'w-full rounded-xl border border-border-base bg-bg-base px-3 py-2',
        'aria-invalid:border-border-error',
        'disabled:cursor-not-allowed disabled:border-border-mute disabled:bg-bg-mute disabled:hover:bg-bg-mute',
        'read-only:cursor-not-allowed read-only:bg-bg-subtle',
        'focus-visible:border-transparent focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border-info',
      )}
      defaultValue={defaultValue}
      disabled={isDisabled}
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={pending || undefined}
      type="text"
      value={value}
    />
  );
};
