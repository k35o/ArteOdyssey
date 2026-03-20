'use client';

import type { ChangeEvent, ChangeEventHandler, FC, KeyboardEvent } from 'react';
import { useRef, useState } from 'react';
import { cn } from './../../../helpers/cn';
import type { Option } from '../../../types/variables';

type BaseProps = {
  name: string;
  labelId: string;
  isDisabled: boolean;
  options: readonly Option[];
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

export const Radio: FC<Props> = ({
  name,
  labelId,
  isDisabled,
  value,
  defaultValue,
  onChange,
  options,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value : internalValue;
  void name;

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
    <div
      aria-labelledby={labelId}
      className={cn(
        'flex cursor-pointer flex-col gap-2',
        isDisabled && 'cursor-not-allowed',
      )}
      role="radiogroup"
    >
      {options.map((option, index) => (
        <button
          aria-pressed={selectedValue === option.value}
          className={cn(
            'flex items-center gap-2 text-left',
            isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
          )}
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
              event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
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
          tabIndex={selectedValue === option.value ? 0 : -1}
          type="button"
        >
          <span
            aria-hidden={true}
            className={cn(
              'inline-flex size-5 items-center justify-center rounded-full border-2 transition-colors',
              'focus-visible:border-transparent focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border-info',
              selectedValue === option.value
                ? 'border-border-base bg-primary-bg'
                : 'border-border-mute bg-bg-base',
              isDisabled && 'border-border-mute bg-bg-mute',
            )}
          >
            <span
              className={cn(
                'size-2 rounded-full transition-opacity',
                selectedValue === option.value
                  ? 'bg-primary-border opacity-100'
                  : 'bg-transparent opacity-0',
              )}
            />
          </span>
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
};
