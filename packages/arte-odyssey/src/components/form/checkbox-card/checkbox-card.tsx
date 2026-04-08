'use client';

import type { FC, ReactNode } from 'react';
import { useId, useState } from 'react';
import { cn } from '../../../helpers/cn';
import { CheckIcon } from '../../icons';

export type CheckboxCardOption = Readonly<{
  value: string;
  label: string;
  description?: string;
  visual?: ReactNode;
  disabled?: boolean;
}>;

type BaseProps = {
  labelId?: string;
  name?: string;
  isDisabled: boolean;
  isInvalid?: boolean;
  options: readonly CheckboxCardOption[];
};

type ControlledProps = {
  value: string[];
  onChange: (value: string[]) => void;
  defaultValue?: never;
};

type UncontrolledProps = {
  defaultValue?: string[];
  value?: never;
  onChange?: (value: string[]) => void;
};

type Props = BaseProps & (ControlledProps | UncontrolledProps);

export const CheckboxCard: FC<Props> = ({
  labelId,
  name,
  isDisabled,
  isInvalid = false,
  options,
  value,
  defaultValue,
  onChange,
}) => {
  const groupId = useId();
  const [internalValue, setInternalValue] = useState(defaultValue ?? []);
  const isControlled = value !== undefined;
  const selectedValues = isControlled ? value : internalValue;

  const handleToggle = (nextValue: string, checked: boolean) => {
    const nextValues = checked
      ? [...selectedValues, nextValue]
      : selectedValues.filter((item) => item !== nextValue);

    if (!isControlled) {
      setInternalValue(nextValues);
    }
    onChange?.(nextValues);
  };

  return (
    <fieldset
      aria-labelledby={labelId}
      className={cn('m-0 w-full min-w-0 border-0 p-0', 'grid gap-3', isDisabled && 'opacity-70')}
    >
      {options.map((option) => {
        const checked = selectedValues.includes(option.value);
        const disabled = isDisabled || option.disabled;
        const optionId = `${groupId}-${option.value}`;

        return (
          <label
            className={cn(
              'flex w-full min-w-0 rounded-xl border bg-bg-base p-4 text-left transition-colors',
              'has-[input:focus-visible]:outline-hidden has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-border-info',
              isInvalid
                ? 'border-border-error'
                : checked
                  ? 'border-border-base hover:bg-bg-mute'
                  : 'border-border-mute hover:bg-bg-mute',
              disabled && 'cursor-not-allowed border-border-mute bg-bg-subtle text-fg-mute',
            )}
            id={optionId}
            key={option.value}
          >
            <input
              aria-describedby={option.description ? `${optionId}-description` : undefined}
              checked={checked}
              className="sr-only"
              disabled={disabled}
              name={name}
              onChange={(event) => {
                handleToggle(option.value, event.target.checked);
              }}
              type="checkbox"
              value={option.value}
            />
            {option.visual ? (
              <span aria-hidden={true} className="mr-4 shrink-0">
                {option.visual}
              </span>
            ) : null}
            <span className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="font-medium text-fg-base">{option.label}</span>
              {option.description ? (
                <span className="text-fg-mute text-sm" id={`${optionId}-description`}>
                  {option.description}
                </span>
              ) : null}
            </span>
            <span
              aria-hidden={true}
              className={cn(
                'mt-0.5 ml-4 inline-flex size-5 shrink-0 items-center justify-center rounded-md border',
                checked
                  ? 'border-border-base bg-primary-bg text-fg-base'
                  : 'border-border-mute bg-bg-base text-transparent',
              )}
            >
              <CheckIcon size="sm" />
            </span>
          </label>
        );
      })}
    </fieldset>
  );
};
