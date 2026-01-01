import { type ChangeEventHandler, type FC, useState } from 'react';
import { cn } from './../../../helpers/cn';
import { CheckIcon } from '../../icons';

type Props = {
  label: string;
  value?: boolean;
  defaultChecked?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Checkbox: FC<Props> = ({
  label,
  value,
  defaultChecked,
  onChange,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [internalChecked, setInternalChecked] = useState(
    defaultChecked ?? false,
  );
  const isControlled = value !== undefined;
  const currentChecked = isControlled ? value : internalChecked;

  return (
    <label className="inline-flex cursor-pointer items-center gap-2">
      <input
        checked={currentChecked}
        className="sr-only"
        onBlur={() => {
          setIsFocus(false);
        }}
        onChange={(e) => {
          if (!isControlled) {
            setInternalChecked(e.target.checked);
          }
          onChange(e);
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
          isFocus && 'bordertransparent outline-hidden ring-2 ring-border-info',
          currentChecked
            ? 'border-border-base bg-primary-bg text-fg-base'
            : 'border-border-mute bg-bg-base',
        )}
      >
        {currentChecked ? <CheckIcon size="sm" /> : null}
      </span>
      <span className="text-lg">{label}</span>
    </label>
  );
};
