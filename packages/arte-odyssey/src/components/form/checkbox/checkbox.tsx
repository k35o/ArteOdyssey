'use client';

import type { ChangeEvent, ChangeEventHandler, FC } from 'react';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

import { CheckIcon } from '../../icons';
import { useCheckboxGroupContext } from '../checkbox-group/checkbox-group';
import { cn } from './../../../helpers/cn';

type BaseProps = {
  name?: string;
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
  name,
  itemValue,
  isDisabled = false,
  label,
  value,
  defaultChecked,
  onChange,
}) => {
  const groupContext = useCheckboxGroupContext();
  const { pending } = useFormStatus();
  const [internalChecked, setInternalChecked] = useState(
    defaultChecked ?? false,
  );
  const groupItemValue = itemValue ?? '';

  if (groupContext && !itemValue) {
    throw new Error('Checkbox inside CheckboxGroup requires itemValue');
  }

  const isControlled = value !== undefined;
  // `??` だと groupContext?.isDisabled === false のときに pending を見ない挙動になるため `||` を維持する
  const isDisabledResolved =
    // eslint-disable-next-line typescript-eslint/prefer-nullish-coalescing
    isDisabled || groupContext?.isDisabled || pending;
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
    <label
      className={cn(
        'inline-flex items-center gap-2 text-left',
        isDisabledResolved
          ? 'cursor-not-allowed text-fg-mute'
          : 'cursor-pointer',
      )}
    >
      <input
        {...(groupContext || isControlled
          ? { checked: groupContext ? checked : value }
          : { defaultChecked })}
        className="peer sr-only"
        disabled={isDisabledResolved}
        name={groupContext?.name ?? name}
        onChange={(event) => {
          if (groupContext) {
            groupContext.toggleValue(groupItemValue);
            return;
          }

          setChecked(event.target.checked);
        }}
        type="checkbox"
        value={groupContext ? groupItemValue : undefined}
      />
      <span
        aria-hidden
        className={cn(
          'inline-flex size-5 items-center justify-center rounded-md border-2 transition-colors',
          'peer-focus-visible:border-transparent peer-focus-visible:outline-hidden peer-focus-visible:ring-2 peer-focus-visible:ring-border-info',
          isDisabledResolved && 'border-border-mute bg-bg-mute',
          checked
            ? 'border-border-base bg-primary-bg text-fg-base'
            : 'border-border-mute bg-bg-base',
        )}
      >
        {checked ? <CheckIcon size="sm" /> : null}
      </span>
      <span className="text-lg">{label}</span>
    </label>
  );
};
