'use client';

import { useCallback, useRef, useState } from 'react';

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

  /* oxlint-disable react/refs -- setValue は呼び出し側の effect からも呼ばれうる。
     effect で書くと、同じコミット内で先に走った effect からの呼び出しが 1 つ前の
     値を読むことになるので、描画中に書くタイミングを変えられない。読むのは
     setValue の中だけで、描画には出さない。 */
  const currentValueRef = useRef(currentValue);
  currentValueRef.current = currentValue;

  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const isControlledRef = useRef(isControlled);
  isControlledRef.current = isControlled;
  /* oxlint-enable react/refs */

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
