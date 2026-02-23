'use client';

import { type ChangeEventHandler, type FC, useState } from 'react';
import { cn } from './../../../helpers/cn';
import { CheckIcon } from '../../icons';

type BaseProps = {
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
  label,
  value,
  defaultChecked,
  onChange,
}) => {
  const [internalChecked, setInternalChecked] = useState(
    defaultChecked ?? false,
  );
  const [isFocus, setIsFocus] = useState(false);

  const isControlled = value !== undefined;
  const checked = isControlled ? value : internalChecked;

  return (
    <label className="inline-flex cursor-pointer items-center gap-2">
      <input
        checked={isControlled ? value : undefined}
        className="sr-only"
        defaultChecked={isControlled ? undefined : defaultChecked}
        onBlur={() => {
          setIsFocus(false);
        }}
        onChange={(e) => {
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
        )}
      >
        {checked ? <CheckIcon size="sm" /> : null}
      </span>
      <span className="text-lg">{label}</span>
    </label>
  );
};
