import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IMenuitens {
  categoryName: string;
  menuItems: {
    path: string;
    title: string;
    icon: IconProp;
  }[];
}
