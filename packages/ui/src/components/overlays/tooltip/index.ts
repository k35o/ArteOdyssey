import { Content, Root, Trigger } from './tooltip';

export type { TooltipTriggerProps } from './tooltip';

// RSC の server 環境では client モジュールの export は参照プロキシになり、
// オブジェクトごと export するとプロパティを引けないため、直接参照で合成する。
export const Tooltip = { Root, Trigger, Content } as const;
