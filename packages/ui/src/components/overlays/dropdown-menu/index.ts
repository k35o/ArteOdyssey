import type { FC } from 'react';

import { Content, IconTrigger, Item, Root, Trigger } from './dropdown-menu';
import type { ItemProps } from './dropdown-menu';
import { SubMenu } from './sub-menu';
import type { SubMenuProps } from './sub-menu';

// RSC の server 環境では client モジュールの export は参照プロキシになり、
// オブジェクトごと export するとプロパティを引けないため、直接参照で合成する。
export const DropdownMenu = {
  Root,
  Content,
  // `index` は Content の cloneWithIndex が注入する内部 prop のため公開型から隠す
  Item: Item as FC<ItemProps>,
  SubMenu: SubMenu as FC<SubMenuProps>,
  Trigger,
  IconTrigger,
} as const;
