import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { SigninComponent } from './views/signin/signin.component';

export const authRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
];
