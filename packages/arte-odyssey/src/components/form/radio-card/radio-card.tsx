'use client';

import type {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  KeyboardEvent,
  ReactNode,
} from 'react';
import { useId, useRef, useState } from 'react';
import { cn } from '../../../helpers/cn';

export type RadioCardOption = Readonly<{
  value: string;
  label: string;
  description?: string;
  visual?: ReactNode;
  disabled?: boolean;
}>;

type BaseProps = {
  labelId: string;
  isDisabled: boolean;
  isInvalid?: boolean;
  options: readonly RadioCardOption[];
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

export const RadioCard: FC<Props> = ({
  labelId,
  isDisabled,
  isInvalid = false,
  options,
  value,
  defaultValue,
  onChange,
}) => {
  const groupId = useId();
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? options[0]?.value,
  );
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const selectValue = (nextValue: string) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onChange?.({
      target: { value: nextValue },
    } as ChangeEvent<HTMLInputElement>);
  };

  const focusIndex = (index: number) => {
    buttonRefs.current[index]?.focus();
  };

  const getNextIndex = (index: number, direction: 1 | -1) => {
    const nextIndex = index + direction;
    if (nextIndex < 0) {
      return options.length - 1;
    }
    if (nextIndex >= options.length) {
      return 0;
    }
    return nextIndex;
  };

  return (
    <fieldset
      aria-labelledby={labelId}
      className={cn(
        'm-0 w-full min-w-0 border-0 p-0',
        'grid gap-3',
        isDisabled && 'opacity-70',
      )}
    >
      {options.map((option, index) => {
        const checked = currentValue === option.value;
        const disabled = isDisabled || option.disabled;
        const optionId = `${groupId}-${option.value}`;

        return (
          <button
            aria-describedby={
              option.description ? `${optionId}-description` : undefined
            }
            aria-pressed={checked}
            className={cn(
              'flex w-full min-w-0 rounded-lg border bg-bg-base p-4 text-left transition-colors',
              'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border-info',
              checked && 'border-border-info bg-bg-subtle',
              isInvalid
                ? 'border-border-error'
                : 'border-border-mute hover:bg-bg-mute',
              disabled &&
                'cursor-not-allowed border-border-mute bg-bg-subtle text-fg-mute',
            )}
            disabled={disabled}
            id={optionId}
            key={option.value}
            onClick={() => {
              selectValue(option.value);
            }}
            onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => {
              if (
                event.key !== 'ArrowDown' &&
                event.key !== 'ArrowRight' &&
                event.key !== 'ArrowUp' &&
                event.key !== 'ArrowLeft'
              ) {
                return;
              }

              event.preventDefault();
              const direction =
                event.key === 'ArrowDown' || event.key === 'ArrowRight'
                  ? 1
                  : -1;
              const nextIndex = getNextIndex(index, direction);
              const nextOption = options[nextIndex];
              if (!nextOption) {
                return;
              }
              selectValue(nextOption.value);
              focusIndex(nextIndex);
            }}
            onMouseDown={(event) => {
              event.preventDefault();
            }}
            ref={(element) => {
              buttonRefs.current[index] = element;
            }}
            tabIndex={checked ? 0 : -1}
            type="button"
          >
            {option.visual ? (
              <span aria-hidden={true} className="mr-4 shrink-0">
                {option.visual}
              </span>
            ) : null}
            <span className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="font-medium text-fg-base">{option.label}</span>
              {option.description ? (
                <span
                  className="text-fg-mute text-sm"
                  id={`${optionId}-description`}
                >
                  {option.description}
                </span>
              ) : null}
            </span>
            <span
              aria-hidden={true}
              className={cn(
                'mt-0.5 ml-4 inline-flex size-5 shrink-0 items-center justify-center rounded-full border',
                checked
                  ? 'border-border-base bg-primary-bg'
                  : 'border-border-mute bg-bg-base',
              )}
            >
              <span
                className={cn(
                  'size-2 rounded-full bg-primary-border transition-opacity',
                  checked ? 'opacity-100' : 'opacity-0',
                )}
              />
            </span>
          </button>
        );
      })}
    </fieldset>
  );
};
