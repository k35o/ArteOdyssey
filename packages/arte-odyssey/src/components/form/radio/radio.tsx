import type { ChangeEventHandler, FC } from 'react';
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
  return (
    <div
      aria-labelledby={labelId}
      className={cn(
        'flex cursor-pointer flex-col gap-2',
        isDisabled && 'cursor-not-allowed',
      )}
      role="radiogroup"
    >
      {options.map((option) => (
        <label
          className={cn(
            'flex cursor-pointer items-center gap-2',
            'has-disabled:cursor-not-allowed',
          )}
          key={option.value}
        >
          <input
            checked={value !== undefined ? value === option.value : undefined}
            className={cn(
              'cursor-pointer',
              'disabled:cursor-not-allowed disabled:bg-bg-mute',
            )}
            defaultChecked={
              defaultValue !== undefined
                ? defaultValue === option.value
                : undefined
            }
            disabled={isDisabled}
            name={name}
            onChange={onChange}
            type="radio"
            value={option.value}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};
