import { type FC, useState } from 'react';
import { cn } from './../../../helpers/cn';

type BaseProps = {
  id?: string;
  describedbyId?: string | undefined;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
  step?: number;
  max?: number;
  min?: number;
  showValue?: boolean;
  unit?: string;
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

export const RangeField: FC<Props> = ({
  id,
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
  showValue = true,
  unit = '',
}) => {
  const isControlled = value !== undefined;
  const initialValue = defaultValue ?? value ?? min;
  const [internalValue, setInternalValue] = useState(initialValue);
  const currentValue = isControlled ? value : internalValue;

  const handleChange = (newValue: number) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div className="flex w-full items-center gap-4">
      <input
        aria-describedby={describedbyId}
        aria-invalid={isInvalid}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={currentValue}
        className={cn(
          'h-2 flex-1 cursor-pointer rounded-full bg-bg-subtle',
          'focus:outline-none focus:ring-2 focus:ring-border-info',
          'disabled:cursor-not-allowed disabled:opacity-50',
          isInvalid && 'ring-2 ring-border-error',
        )}
        defaultValue={isControlled ? undefined : defaultValue}
        disabled={isDisabled}
        id={id}
        max={max}
        min={min}
        onChange={(e) => {
          handleChange(Number(e.target.value));
        }}
        required={isRequired}
        step={step}
        type="range"
        value={isControlled ? value : undefined}
      />
      {showValue && (
        <span className="w-16 text-fg-base text-sm">
          {currentValue}
          {unit}
        </span>
      )}
    </div>
  );
};
