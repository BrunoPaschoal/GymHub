import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { MainLayoutComponent } from './Common/components/main-layout/main-layout.component';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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
        canActivate: [authGuard],
        data: { pageTitle: 'Home', icon: faHome },
      },
    ],
  },
];
