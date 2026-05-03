'use client';

import {
  createContext,
  type FC,
  type PropsWithChildren,
  use,
  useCallback,
  useMemo,
} from 'react';

import { cn } from '../../../helpers/cn';
import { useControllableState } from '../../../hooks/controllable-state';

type CheckboxGroupContextValue = {
  currentValue: string[];
  disabled: boolean;
  name: string;
  toggleValue: (value: string) => void;
};

const CheckboxGroupContext = createContext<
  CheckboxGroupContextValue | undefined
>(undefined);

export const useCheckboxGroupContext = () => use(CheckboxGroupContext);

type RootBaseProps = PropsWithChildren<{
  'aria-describedby'?: string;
  'aria-labelledby'?: string;
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
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
  'aria-describedby': describedbyId,
  'aria-labelledby': labelledbyId,
  defaultValue,
  disabled = false,
  invalid = false,
  required = false,
  name,
  onChange,
  value,
}) => {
  const [currentValue, setCurrentValue] = useControllableState({
    value,
    defaultValue: defaultValue ?? [],
    onChange,
  });
  void required;

  const toggleValue = useCallback(
    (targetValue: string) => {
      const nextValue = currentValue.includes(targetValue)
        ? currentValue.filter((item) => item !== targetValue)
        : [...currentValue, targetValue];

      setCurrentValue(nextValue);
    },
    [currentValue, setCurrentValue],
  );

  const contextValue = useMemo<CheckboxGroupContextValue>(
    () => ({
      currentValue,
      disabled,
      name,
      toggleValue,
    }),
    [currentValue, disabled, name, toggleValue],
  );

  return (
    <fieldset
      aria-describedby={describedbyId}
      aria-invalid={invalid}
      aria-labelledby={labelledbyId}
      className={cn('flex flex-col gap-2', disabled && 'cursor-not-allowed')}
    >
      <CheckboxGroupContext value={contextValue}>
        {children}
      </CheckboxGroupContext>
    </fieldset>
  );
};

export const CheckboxGroup = Object.assign(Root, { Root });
