'use client';

import {
  createContext,
  type FC,
  type PropsWithChildren,
  use,
  useState,
} from 'react';
import { cn } from '../../../helpers/cn';

type RadioGroupContextValue = {
  currentValue: string | undefined;
  isDisabled: boolean;
  name: string;
  setValue: (value: string) => void;
};

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(
  undefined,
);

const useRadioGroupContext = () => {
  const context = use(RadioGroupContext);

  if (!context) {
    throw new Error('RadioGroup.Item must be used within RadioGroup');
  }

  return context;
};

type RootBaseProps = PropsWithChildren<{
  describedbyId?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  labelId?: string;
  name: string;
}>;

type RootControlledProps = {
  value: string;
  onChange: (value: string) => void;
  defaultValue?: never;
};

type RootUncontrolledProps = {
  defaultValue?: string;
  value?: never;
  onChange?: (value: string) => void;
};

type RootProps = RootBaseProps & (RootControlledProps | RootUncontrolledProps);

const Root: FC<RootProps> = ({
  children,
  describedbyId,
  defaultValue,
  isDisabled = false,
  isInvalid = false,
  isRequired = false,
  labelId,
  name,
  onChange,
  value,
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = isControlled ? value : internalValue;
  void isRequired;

  const setValue = (nextValue: string) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }

    onChange?.(nextValue);
  };

  return (
    <fieldset
      aria-describedby={describedbyId}
      aria-invalid={isInvalid}
      aria-labelledby={labelId}
      className={cn('flex flex-col gap-2', isDisabled && 'cursor-not-allowed')}
    >
      <RadioGroupContext
        value={{
          currentValue,
          isDisabled,
          name,
          setValue,
        }}
      >
        {children}
      </RadioGroupContext>
    </fieldset>
  );
};

type ItemProps = {
  label: string;
  value: string;
};

const Item: FC<ItemProps> = ({ label, value }) => {
  const { currentValue, isDisabled, name, setValue } = useRadioGroupContext();
  const isSelected = currentValue === value;

  return (
    <label
      className={cn(
        'inline-flex cursor-pointer items-center gap-2',
        isDisabled && 'cursor-not-allowed',
      )}
    >
      <input
        checked={isSelected}
        className="peer sr-only"
        disabled={isDisabled}
        name={name}
        onChange={() => {
          setValue(value);
        }}
        type="radio"
        value={value}
      />
      <span
        aria-hidden={true}
        className={cn(
          'inline-flex size-5 items-center justify-center rounded-full border-2 transition-colors',
          'peer-focus-visible:border-transparent peer-focus-visible:outline-hidden peer-focus-visible:ring-2 peer-focus-visible:ring-border-info',
          isSelected
            ? 'border-border-base bg-primary-bg'
            : 'border-border-mute bg-bg-base',
          isDisabled && 'border-border-mute bg-bg-mute',
        )}
      >
        <span
          className={cn(
            'size-2 rounded-full bg-bg-base transition-colors',
            !isSelected && 'bg-transparent',
            isDisabled && isSelected && 'bg-bg-emphasize',
          )}
        />
      </span>
      <span>{label}</span>
    </label>
  );
};

export const RadioGroup = Object.assign(Root, { Item, Root });
