import { List, Panel, Root, Tab } from './tabs';

// RSC の server 環境では client モジュールの export は参照プロキシになり、
// オブジェクトごと export するとプロパティを引けないため、直接参照で合成する。
export const Tabs = { Root, List, Tab, Panel } as const;
