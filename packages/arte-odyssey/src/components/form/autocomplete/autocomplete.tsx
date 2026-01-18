import { type FC, useCallback, useEffect, useRef, useState } from 'react';
import { cn } from './../../../helpers/cn';
import type { Option } from '../../../types/variables';
import { IconButton } from '../../icon-button';
import { CloseIcon } from '../../icons';

type BaseProps = {
  id: string;
  describedbyId: string | undefined;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
  options: readonly Option[];
};

type ControlledProps = {
  value: string[];
  onChange: (value: string[]) => void;
  defaultValue?: never;
};

type UncontrolledProps = {
  defaultValue?: string[];
  value?: never;
  onChange?: (value: string[]) => void;
};

type Props = BaseProps & (ControlledProps | UncontrolledProps);

export const Autocomplete: FC<Props> = ({
  id,
  describedbyId,
  isInvalid,
  isDisabled,
  isRequired,
  options,
  value,
  defaultValue,
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState<string[]>(
    defaultValue || [],
  );
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [selectIndex, setSelectIndex] = useState<number>();

  const handleChange = useCallback(
    (newValue: string[]) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [isControlled, onChange],
  );

  const filteredOptions = options.filter((option) =>
    option.label.includes(text),
  );

  const reset = useCallback(() => {
    setText('');
    setOpen(false);
    setSelectIndex(undefined);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current?.contains(e.target as Node)) return;
      reset();
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [reset]);

  return (
    <div
      className={cn(
        'relative w-full rounded-lg border border-border-base bg-bg-base',
        'focus-within:border-transparent focus-within:outline-hidden focus-within:ring-2 focus-within:ring-border-info',
        'has-aria-invalid:border-border-error',
        'has-disabled:cursor-not-allowed has-disabled:border-border-mute has-disabled:bg-bg-mute has-disabled:has-hover:hover:bg-bg-mute',
      )}
      ref={ref}
    >
      <div className="flex min-h-12 items-center justify-between gap-2 px-3 py-2">
        <div className="flex w-full flex-wrap gap-1">
          {currentValue.map((text) => {
            const label = options.find(
              (option) => option.value === text,
            )?.label;
            return (
              <div
                className="inline-flex items-center gap-2 rounded-full bg-bg-mute px-3 py-1 font-medium text-sm"
                key={text}
                tabIndex={-1}
              >
                {label}
                <IconButton
                  label="閉じる"
                  onClick={(e) => {
                    e.stopPropagation();
                    reset();
                    handleChange(currentValue.filter((v) => v !== text));
                  }}
                  size="sm"
                >
                  <CloseIcon size="sm" />
                </IconButton>
              </div>
            );
          })}
          <input
            aria-autocomplete="list"
            aria-controls={open ? `${id}_listbox` : undefined}
            aria-describedby={describedbyId}
            aria-expanded={open}
            aria-invalid={isInvalid}
            aria-required={isRequired}
            autoComplete="off"
            className={cn(
              'grow bg-transparent focus-visible:outline-hidden',
              'disabled:cursor-not-allowed',
            )}
            disabled={isDisabled}
            id={id}
            onBlur={(e) => {
              if (e.relatedTarget?.id.startsWith(`${id}_option_`)) {
                return;
              }
              setOpen(false);
            }}
            onChange={(e) => {
              setOpen(true);
              setText(e.target.value);
              setSelectIndex(undefined);
            }}
            onClick={() => {
              if (open && text.length === 0) {
                setOpen(false);
                return;
              }
              setOpen(true);
              setSelectIndex(undefined);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Backspace' && text.length === 0) {
                reset();
                handleChange(currentValue.slice(0, -1));
                return;
              }
              if (e.key === 'ArrowDown') {
                setOpen(true);
                setSelectIndex((prev) => {
                  if (prev === undefined) {
                    return 0;
                  }
                  return Math.min(prev + 1, options.length - 1);
                });
                return;
              }
              if (e.key === 'ArrowUp') {
                setOpen(true);
                setSelectIndex((prev) => {
                  if (prev === undefined) {
                    return 0;
                  }
                  return Math.max(prev - 1, 0);
                });
                return;
              }
              if (
                e.key === 'Enter' &&
                selectIndex !== undefined &&
                selectIndex >= 0
              ) {
                const selected = filteredOptions[selectIndex];
                if (!selected) {
                  return;
                }
                if (currentValue.includes(selected.value)) {
                  handleChange(
                    currentValue.filter((v) => v !== selected.value),
                  );
                  reset();
                  return;
                }
                handleChange([...currentValue, selected.value]);
                reset();
                return;
              }
            }}
            placeholder="入力して絞り込めます"
            role="combobox"
            type="text"
            value={text}
          />
        </div>
        {currentValue.length > 0 && (
          <IconButton
            label="すべて閉じる"
            onClick={(e) => {
              e.stopPropagation();
              handleChange([]);
            }}
            size="sm"
          >
            <CloseIcon size="sm" />
          </IconButton>
        )}
      </div>
      <div className="relative w-full">
        {open && (
          <div
            className="absolute top-1 z-10 w-full rounded-lg border border-border-mute bg-bg-base shadow-md"
            role="presentation"
          >
            <ul className="max-h-96 py-2" id={`${id}_listbox`}>
              {filteredOptions.length === 0 && (
                <li className="px-3 py-2 text-fg-mute">該当なし</li>
              )}
              {filteredOptions.map((option, idx) => {
                const selected = currentValue.includes(option.value);
                return (
                  <li
                    className={cn(
                      'cursor-pointer px-3 py-2',
                      selected && 'bg-bg-mute',
                      selectIndex === idx && !selected && 'bg-bg-emphasize',
                      selectIndex === idx && selected && 'bg-bg-mute',
                    )}
                    id={`${id}_option_${option.value}`}
                    key={option.value}
                    onClick={(e) => {
                      e.stopPropagation();
                      reset();
                      if (selected) {
                        handleChange(
                          currentValue.filter((v) => v !== option.value),
                        );
                        return;
                      }
                      handleChange([...currentValue, option.value]);
                    }}
                    onKeyDown={(e) => {
                      e.preventDefault();
                    }}
                    onMouseEnter={() => {
                      setSelectIndex(idx);
                    }}
                    tabIndex={-1}
                  >
                    {option.label}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
