import { inject } from '@angular/core';
import {
  Router,
  type CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from '../modules/auth/services/auth.service';

export const authenticationGuard: CanActivateFn = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);

  const isAuthenticated = await authService.isAuthenticated();

  if (!isAuthenticated) {
    router.navigate(['auth/login']);
    return false;
  }
  return true;
};
