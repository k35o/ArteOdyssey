import { type FC, useState } from 'react';
import { cn } from './../../../helpers/cn';

type Props = {
  id?: string;
  describedbyId?: string | undefined;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
  value?: number;
  defaultValue?: number;
  onChange: (value: number) => void;
  step?: number;
  max?: number;
  min?: number;
  showValue?: boolean;
  unit?: string;
  className?: string;
};

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
  className,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue ?? min);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  return (
    <div className={cn('flex items-center gap-4', className)}>
      <input
        aria-describedby={describedbyId}
        aria-invalid={isInvalid}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={currentValue}
        className={cn(
          'h-2 flex-1 cursor-pointer appearance-none rounded-lg bg-bg-subtle',
          'range-slider',
          'focus:outline-none focus:ring-2 focus:ring-border-info focus:ring-opacity-50',
          'disabled:cursor-not-allowed disabled:opacity-50',
          isInvalid && 'ring-2 ring-border-error',
        )}
        disabled={isDisabled}
        id={id}
        max={max}
        min={min}
        onChange={(e) => {
          const newValue = Number(e.target.value);
          if (!isControlled) {
            setInternalValue(newValue);
          }
          onChange(newValue);
        }}
        required={isRequired}
        step={step}
        type="range"
        value={currentValue}
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
