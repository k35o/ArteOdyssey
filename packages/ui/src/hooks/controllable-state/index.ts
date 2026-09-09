'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type UseControllableStateProps<T> = {
  value?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
};

export const useControllableState = <T>({
  value,
  defaultValue,
  onChange,
}: UseControllableStateProps<T>): [T, (next: T | ((prev: T) => T)) => void] => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = isControlled ? value : internalValue;

  // The setter keeps one identity for the life of the hook, so what it needs
  // is read from refs rather than closed over. Written in an effect and not
  // during render: only an event reads them, and events run after the commit,
  // so a render that never commits must not leave its values behind.
  const currentValueRef = useRef(currentValue);
  const onChangeRef = useRef(onChange);
  const isControlledRef = useRef(isControlled);
  useEffect(() => {
    currentValueRef.current = currentValue;
    onChangeRef.current = onChange;
    isControlledRef.current = isControlled;
  }, [currentValue, onChange, isControlled]);

  const setValue = useCallback((next: T | ((prev: T) => T)) => {
    const nextValue =
      typeof next === 'function'
        ? (next as (prev: T) => T)(currentValueRef.current)
        : next;

    if (!isControlledRef.current) {
      setInternalValue(nextValue);
    }
    onChangeRef.current?.(nextValue);
  }, []);

  return [currentValue, setValue];
};
