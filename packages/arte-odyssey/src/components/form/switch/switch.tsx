'use client';

import type { ChangeEventHandler, FC } from 'react';
import { useId, useState } from 'react';
import { useFormStatus } from 'react-dom';

import { cn } from '../../../helpers/cn';

type BaseProps = {
  id?: string;
  name?: string;
  describedbyId?: string | undefined;
  isDisabled: boolean;
  isInvalid: boolean;
  isRequired: boolean;
  label: string;
};

type ControlledProps = {
  value: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  defaultChecked?: never;
};

type UncontrolledProps = {
  defaultChecked?: boolean;
  value?: never;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

type Props = BaseProps & (ControlledProps | UncontrolledProps);

export const Switch: FC<Props> = ({
  value,
  defaultChecked,
  describedbyId,
  id,
  isDisabled,
  isInvalid,
  isRequired,
  label,
  name,
  onChange,
}) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [internalChecked, setInternalChecked] = useState(
    defaultChecked ?? false,
  );
  const { pending } = useFormStatus();

  const isControlled = value !== undefined;
  const isSelected = isControlled ? value : internalChecked;
  const isDisabledResolved = isDisabled || pending;

  return (
    <label
      className={cn(
        'inline-flex w-fit items-center gap-3',
        isDisabledResolved
          ? 'cursor-not-allowed text-fg-mute'
          : 'cursor-pointer',
      )}
      htmlFor={inputId}
    >
      <span className="relative inline-flex shrink-0">
        <input
          aria-checked={isSelected}
          aria-describedby={describedbyId}
          aria-invalid={isInvalid}
          aria-required={isRequired}
          {...(isControlled ? { checked: value } : { defaultChecked })}
          className="peer sr-only"
          disabled={isDisabledResolved}
          id={inputId}
          name={name}
          onChange={(event) => {
            if (!isControlled) {
              setInternalChecked(event.target.checked);
            }
            onChange?.(event);
          }}
          required={isRequired}
          role="switch"
          type="checkbox"
        />
        <span
          aria-hidden
          className={cn(
            'inline-flex h-7 w-12 items-center rounded-full transition-colors',
            isInvalid && 'ring-2 ring-border-error',
            isSelected ? 'bg-primary-bg' : 'bg-bg-mute',
            isDisabledResolved && 'bg-bg-subtle',
            'peer-focus-visible:outline-hidden peer-focus-visible:ring-2 peer-focus-visible:ring-border-info peer-focus-visible:ring-offset-2',
          )}
        >
          <span
            className={cn(
              'ml-0.5 size-5 rounded-full bg-bg-base shadow-xs transition-transform',
              isSelected && 'translate-x-5',
              isDisabledResolved && 'bg-bg-emphasize',
            )}
          />
        </span>
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
};
