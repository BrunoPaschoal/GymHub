import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IMenuCategory {
  categoryName: string;
  menuItems: IMenuItem[];
}

export interface IMenuItem {
  path: string;
  title: string;
  icon: IconProp;
}

export interface ContextMenuItems {
  label: string;
  icon: string;
  command: () => void;
}
