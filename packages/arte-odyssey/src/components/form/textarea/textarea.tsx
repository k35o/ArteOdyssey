'use client';

import { type ChangeEventHandler, type FC, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { cn } from './../../../helpers/cn';

type BaseProps = {
  id: string;
  name?: string;
  describedbyId: string | undefined;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
  placeholder?: string;
  rows?: number;
  fullHeight?: boolean;
  autoResize?: boolean;
};

type ControlledProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  defaultValue?: never;
};

type UncontrolledProps = {
  defaultValue?: string;
  value?: never;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

type Props = BaseProps & (ControlledProps | UncontrolledProps);

const resizeToContent = (el: HTMLTextAreaElement) => {
  el.style.height = 'auto';
  el.style.height = `${el.scrollHeight.toString()}px`;
};

export const Textarea: FC<Props> = ({
  id,
  name,
  describedbyId,
  isInvalid,
  isDisabled,
  isRequired,
  placeholder,
  rows,
  fullHeight = false,
  autoResize = false,
  defaultValue,
  value,
  onChange,
}) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const { pending } = useFormStatus();

  useEffect(() => {
    if (ref.current && autoResize) {
      resizeToContent(ref.current);
    }
  }, [autoResize, value]);

  return (
    <textarea
      aria-describedby={describedbyId}
      aria-invalid={isInvalid}
      aria-required={isRequired}
      className={cn(
        'w-full resize-none rounded-xl border border-border-base bg-bg-base px-3 py-2',
        'aria-invalid:border-border-error',
        'disabled:cursor-not-allowed disabled:border-border-mute disabled:bg-bg-mute disabled:hover:bg-bg-mute',
        'read-only:cursor-not-allowed read-only:bg-bg-subtle',
        'focus-visible:border-transparent focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border-info',
        fullHeight && 'h-full',
      )}
      defaultValue={defaultValue}
      disabled={isDisabled}
      id={id}
      name={name}
      onChange={onChange}
      onInput={(e) => {
        if (autoResize) {
          resizeToContent(e.currentTarget);
        }
      }}
      onKeyDown={(e) => {
        e.stopPropagation();
      }}
      placeholder={placeholder}
      readOnly={pending || undefined}
      ref={ref}
      rows={rows}
      value={value}
    />
  );
};
