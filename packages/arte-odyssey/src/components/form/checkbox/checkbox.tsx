'use client';

import { type ChangeEventHandler, type FC, useState } from 'react';
import { cn } from './../../../helpers/cn';
import { CheckIcon } from '../../icons';
import { useCheckboxGroupContext } from '../checkbox-group/checkbox-group';

type BaseProps = {
  itemValue?: string;
  label: string;
};

type ControlledProps = {
  value: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  defaultChecked?: never;
};

type UncontrolledProps = {
  defaultChecked?: boolean;
  value?: never;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

type Props = BaseProps & (ControlledProps | UncontrolledProps);

export const Checkbox: FC<Props> = ({
  itemValue,
  label,
  value,
  defaultChecked,
  onChange,
}) => {
  const groupContext = useCheckboxGroupContext();
  const [internalChecked, setInternalChecked] = useState(
    defaultChecked ?? false,
  );
  const [isFocus, setIsFocus] = useState(false);
  const groupItemValue = itemValue ?? '';

  if (groupContext && !itemValue) {
    throw new Error('Checkbox inside CheckboxGroup requires itemValue');
  }

  const isControlled = value !== undefined;
  const checked = groupContext
    ? groupContext.currentValue.includes(groupItemValue)
    : isControlled
      ? value
      : internalChecked;

  return (
    <label
      className={cn(
        'inline-flex cursor-pointer items-center gap-2',
        groupContext?.isDisabled && 'cursor-not-allowed',
      )}
    >
      <input
        checked={groupContext ? checked : isControlled ? value : undefined}
        className="sr-only"
        defaultChecked={
          groupContext || isControlled ? undefined : defaultChecked
        }
        disabled={groupContext?.isDisabled}
        name={groupContext?.name}
        onBlur={() => {
          setIsFocus(false);
        }}
        onChange={(e) => {
          if (groupContext) {
            groupContext.toggleValue(groupItemValue);
            return;
          }
          if (!isControlled) {
            setInternalChecked(e.target.checked);
          }
          onChange?.(e);
        }}
        onFocus={() => {
          setIsFocus(true);
        }}
        type="checkbox"
      />
      <span
        aria-hidden={true}
        className={cn(
          'inline-flex size-5 items-center justify-center rounded-md border-2',
          isFocus &&
            'border-transparent outline-hidden ring-2 ring-border-info',
          checked
            ? 'border-border-base bg-primary-bg text-fg-base'
            : 'border-border-mute bg-bg-base',
          groupContext?.isDisabled &&
            'border-border-mute bg-bg-mute text-fg-mute',
        )}
      >
        {checked ? <CheckIcon size="sm" /> : null}
      </span>
      <span className="text-lg">{label}</span>
    </label>
  );
};
