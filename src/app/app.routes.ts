import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { MainLayoutComponent } from './Common/components/layout/main-layout/main-layout.component';
import { faAddressCard, faHome } from '@fortawesome/free-solid-svg-icons';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
        canActivate: [authGuard],
        data: { pageTitle: 'Home', icon: faHome },
      },
      {
        path: 'members',
        loadChildren: () =>
          import('./modules/members/members.module').then(
            (m) => m.MembersModule
          ),
        canActivate: [authGuard],
        data: { pageTitle: 'Alunos', icon: faAddressCard },
      },
    ],
  },
];
