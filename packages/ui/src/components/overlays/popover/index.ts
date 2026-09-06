import { Content, Root, Trigger } from './popover';

export type { PopoverContentProps, PopoverTriggerProps } from './hooks';
export { useOpenContext } from './popover';

// RSC の server 環境では client モジュールの export は参照プロキシになり、
// オブジェクトごと export するとプロパティを引けないため、直接参照で合成する。
export const Popover = { Root, Content, Trigger } as const;
