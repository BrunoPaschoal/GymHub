import {
  faHome,
  faAddressCard,
  faUserGroup,
  faGem,
  faUserTie,
  faWallet,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons';
import { IMenuCategory } from '../interfaces/AppTypes';

export const MENU_DATA: IMenuCategory[] = [
  {
    categoryName: 'Dashboard',
    menuItems: [
      {
        path: 'home',
        title: 'Home',
        icon: faHome,
      },
    ],
  },
  {
    categoryName: 'Administrativo',
    menuItems: [
      {
        path: 'members',
        title: 'Alunos',
        icon: faAddressCard,
      },
      {
        path: 'teachers',
        title: 'Professores',
        icon: faUserGroup,
      },
      {
        path: 'plans',
        title: 'Planos',
        icon: faGem,
      },
      {
        path: 'employees',
        title: 'Funcionários',
        icon: faUserTie,
      },
      {
        path: 'users',
        title: 'Usuários',
        icon: faUserGear,
      },
    ],
  },
  {
    categoryName: 'Financeiro',
    menuItems: [
      {
        path: 'financeDashboard',
        title: 'Dashboard',
        icon: faWallet,
      },
    ],
  },
];
