'use client';

import { useCallback, useInsertionEffect, useRef, useState } from 'react';

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

  // useEffectEvent と同じものが欲しいが、Effect Event はコンポーネントの外へ返せない。
  // 返す setter の同一性は保つ必要がある（呼び出し側が useCallback / useEffect の
  // 依存に載せており、毎レンダー作り直すと Escape レイヤーの張り直しが起きる）ので、
  // React が useEffectEvent の polyfill として示している形をそのまま使う。
  // 書き込みが useInsertionEffect なのは、commit 中に同期で走る＝レンダー中に書かず、
  // かつ ref が古いまま読まれる窓が最短になるため。
  const latest = useRef({ currentValue, isControlled, onChange });
  useInsertionEffect(() => {
    latest.current = { currentValue, isControlled, onChange };
  });

  const setValue = useCallback((next: T | ((prev: T) => T)) => {
    const {
      currentValue: prev,
      isControlled: controlled,
      onChange: notify,
    } = latest.current;
    const nextValue =
      typeof next === 'function' ? (next as (prev: T) => T)(prev) : next;

    if (!controlled) {
      setInternalValue(nextValue);
    }
    notify?.(nextValue);
  }, []);

  return [currentValue, setValue];
};
