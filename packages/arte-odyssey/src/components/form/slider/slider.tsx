'use client';

import type { CSSProperties, FC } from 'react';
import { cn } from '../../../helpers/cn';
import { useControllableState } from '../../../hooks/controllable-state';

type BaseProps = {
  id?: string;
  name?: string;
  describedbyId?: string | undefined;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
  step?: number;
  max?: number;
  min?: number;
};

type ControlledProps = {
  value: number;
  onChange: (value: number) => void;
  defaultValue?: never;
};

type UncontrolledProps = {
  defaultValue?: number;
  value?: never;
  onChange?: (value: number) => void;
};

type Props = BaseProps & (ControlledProps | UncontrolledProps);

export const Slider: FC<Props> = ({
  id,
  name,
  describedbyId,
  isInvalid,
  isDisabled,
  isRequired,
  value,
  defaultValue,
  onChange,
  step = 1,
  max = 100,
  min = 0,
}) => {
  const isControlled = value !== undefined;
  const [currentValue, handleChange] = useControllableState({
    value,
    defaultValue: defaultValue ?? min,
    onChange,
  });
  const range = Math.max(max - min, 1);
  const progress = ((currentValue - min) / range) * 100;
  const style = {
    '--slider-progress': `${Math.min(Math.max(progress, 0), 100)}%`,
  } as CSSProperties;

  return (
    <div
      className={cn(
        'relative flex h-8 w-full items-center',
        'before:absolute before:inset-x-0 before:h-2 before:rounded-full before:bg-bg-mute',
        'after:absolute after:left-0 after:h-2 after:rounded-full after:bg-primary-bg',
        'after:w-(--slider-progress)',
        isInvalid && 'after:bg-bg-error',
        isDisabled && 'opacity-50',
      )}
      style={style}
    >
      <input
        aria-describedby={describedbyId}
        aria-invalid={isInvalid}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={currentValue}
        className={cn(
          'relative z-10 h-8 w-full appearance-none bg-transparent',
          'focus:outline-none',
          'disabled:cursor-not-allowed',
          '[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent',
          '[&::-webkit-slider-thumb]:mt-[-4px] [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-border-base [&::-webkit-slider-thumb]:bg-bg-base [&::-webkit-slider-thumb]:shadow-xs',
          '[&:focus-visible::-webkit-slider-thumb]:border-transparent [&:focus-visible::-webkit-slider-thumb]:ring-2 [&:focus-visible::-webkit-slider-thumb]:ring-border-info',
          '[&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-transparent',
          '[&::-moz-range-progress]:h-2 [&::-moz-range-progress]:rounded-full [&::-moz-range-progress]:bg-transparent',
          '[&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-border-base [&::-moz-range-thumb]:bg-bg-base [&::-moz-range-thumb]:shadow-xs',
          '[&:focus-visible::-moz-range-thumb]:border-transparent [&:focus-visible::-moz-range-thumb]:ring-2 [&:focus-visible::-moz-range-thumb]:ring-border-info',
          isInvalid &&
            '[&::-moz-range-thumb]:border-border-error [&::-webkit-slider-thumb]:border-border-error [&:focus-visible::-moz-range-thumb]:ring-border-error [&:focus-visible::-webkit-slider-thumb]:ring-border-error',
        )}
        defaultValue={isControlled ? undefined : defaultValue}
        disabled={isDisabled}
        id={id}
        max={max}
        min={min}
        name={name}
        onChange={(event) => {
          handleChange(Number(event.target.value));
        }}
        required={isRequired}
        step={step}
        type="range"
        value={isControlled ? value : undefined}
      />
    </div>
  );
};
