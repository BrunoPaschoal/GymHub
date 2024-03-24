import { Routes } from '@angular/router';
import { authenticationGuard } from './guards/authentication.guard';
import { MainLayoutComponent } from './Common/components/main-layout/main-layout.component';

export const routes: Routes = [
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
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
        canActivate: [authenticationGuard],
      },
    ],
  },
];
