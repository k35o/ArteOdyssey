'use client';

import type { ChangeEvent, ChangeEventHandler, FC } from 'react';
import { useState } from 'react';
import { cn } from './../../../helpers/cn';
import { CheckIcon } from '../../icons';
import { useCheckboxGroupContext } from '../checkbox-group/checkbox-group';

type BaseProps = {
  itemValue?: string;
  isDisabled?: boolean;
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
  isDisabled = false,
  label,
  value,
  defaultChecked,
  onChange,
}) => {
  const groupContext = useCheckboxGroupContext();
  const [internalChecked, setInternalChecked] = useState(
    defaultChecked ?? false,
  );
  const groupItemValue = itemValue ?? '';

  if (groupContext && !itemValue) {
    throw new Error('Checkbox inside CheckboxGroup requires itemValue');
  }

  const isControlled = value !== undefined;
  const isDisabledResolved = isDisabled || groupContext?.isDisabled;
  const checked = groupContext
    ? groupContext.currentValue.includes(groupItemValue)
    : isControlled
      ? value
      : internalChecked;

  const setChecked = (nextChecked: boolean) => {
    if (!isControlled) {
      setInternalChecked(nextChecked);
    }
    onChange?.({
      target: { checked: nextChecked },
    } as ChangeEvent<HTMLInputElement>);
  };

  return (
    <button
      aria-disabled={isDisabledResolved}
      aria-pressed={checked}
      className={cn(
        'inline-flex items-center gap-2 text-left',
        isDisabledResolved
          ? 'cursor-not-allowed text-fg-mute'
          : 'cursor-pointer',
      )}
      disabled={isDisabledResolved}
      onClick={() => {
        if (groupContext) {
          groupContext.toggleValue(groupItemValue);
          return;
        }
        setChecked(!checked);
      }}
      onMouseDown={(event) => {
        event.preventDefault();
      }}
      type="button"
    >
      <span
        aria-hidden={true}
        className={cn(
          'inline-flex size-5 items-center justify-center rounded-md border-2 transition-colors',
          'focus-visible:border-transparent focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border-info',
          isDisabledResolved && 'border-border-mute bg-bg-mute',
          checked
            ? 'border-border-base bg-primary-bg text-fg-base'
            : 'border-border-mute bg-bg-base',
        )}
      >
        {checked ? <CheckIcon size="sm" /> : null}
      </span>
      <span className="text-lg">{label}</span>
    </button>
  );
};
