'use client';

import { createContext, type FC, type PropsWithChildren, use } from 'react';
import { cn } from '../../../helpers/cn';
import { useControllableState } from '../../../hooks/controllable-state';

type CheckboxGroupContextValue = {
  currentValue: string[];
  isDisabled: boolean;
  name: string;
  toggleValue: (value: string) => void;
};

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | undefined>(undefined);

export const useCheckboxGroupContext = () => use(CheckboxGroupContext);

type RootBaseProps = PropsWithChildren<{
  describedbyId?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  labelId?: string;
  name: string;
}>;

type RootControlledProps = {
  value: string[];
  onChange: (value: string[]) => void;
  defaultValue?: never;
};

type RootUncontrolledProps = {
  defaultValue?: string[];
  value?: never;
  onChange?: (value: string[]) => void;
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
  const [currentValue, setCurrentValue] = useControllableState({
    value,
    defaultValue: defaultValue ?? [],
    onChange,
  });
  void isRequired;

  const toggleValue = (targetValue: string) => {
    const nextValue = currentValue.includes(targetValue)
      ? currentValue.filter((item) => item !== targetValue)
      : [...currentValue, targetValue];

    setCurrentValue(nextValue);
  };

  return (
    <fieldset
      aria-describedby={describedbyId}
      aria-invalid={isInvalid}
      aria-labelledby={labelId}
      className={cn('flex flex-col gap-2', isDisabled && 'cursor-not-allowed')}
    >
      <CheckboxGroupContext
        value={{
          currentValue,
          isDisabled,
          name,
          toggleValue,
        }}
      >
        {children}
      </CheckboxGroupContext>
    </fieldset>
  );
};

export const CheckboxGroup = Object.assign(Root, { Root });
