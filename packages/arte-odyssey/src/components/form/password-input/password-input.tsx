'use client';

import type { ChangeEventHandler, FC } from 'react';
import { useState } from 'react';
import { cn } from '../../../helpers/cn';
import { CloseIcon, ViewIcon } from '../../icons';

type BaseProps = {
  id?: string;
  name?: string;
  describedbyId?: string | undefined;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
  placeholder?: string;
  autoComplete?: string;
  showLabel?: string;
  hideLabel?: string;
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

export const PasswordInput: FC<Props> = ({
  id,
  name,
  describedbyId,
  isInvalid,
  isDisabled,
  isRequired,
  placeholder,
  autoComplete = 'current-password',
  showLabel = 'Show password',
  hideLabel = 'Hide password',
  defaultValue,
  value,
  onChange,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative w-full">
      <input
        aria-describedby={describedbyId}
        aria-invalid={isInvalid}
        aria-required={isRequired}
        autoComplete={autoComplete}
        className={cn(
          'w-full rounded-lg border border-border-base bg-bg-base px-3 py-2 pr-12',
          'aria-invalid:border-border-error',
          'disabled:cursor-not-allowed disabled:border-border-mute disabled:bg-bg-mute disabled:hover:bg-bg-mute',
          'focus-visible:border-transparent focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border-info',
        )}
        defaultValue={defaultValue}
        disabled={isDisabled}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={isRequired}
        type={isVisible ? 'text' : 'password'}
        value={value}
      />
      <button
        aria-label={isVisible ? hideLabel : showLabel}
        className={cn(
          'absolute top-1/2 right-2 inline-flex -translate-y-1/2 items-center justify-center rounded-md p-1 text-fg-mute transition-colors',
          'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border-info',
          !isDisabled && 'hover:bg-bg-mute hover:text-fg-base',
          isDisabled && 'cursor-not-allowed text-fg-mute/70',
        )}
        disabled={isDisabled}
        onClick={() => {
          setIsVisible((current) => !current);
        }}
        type="button"
      >
        {isVisible ? <CloseIcon size="sm" /> : <ViewIcon size="sm" />}
      </button>
    </div>
  );
};
