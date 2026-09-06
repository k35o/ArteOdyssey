import { Messages, Root, ScrollButton } from './conversation';

// RSC の server 環境では client モジュールの export は参照プロキシになり、
// オブジェクトごと export するとプロパティを引けないため、直接参照で合成する。
export const Conversation = { Root, Messages, ScrollButton } as const;
