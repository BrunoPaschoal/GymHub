import { inject } from '@angular/core';
import {
  Router,
  type CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from '../modules/auth/services/auth.service';

export const authenticationGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);

  const unauthenticated = () => {
    localStorage.clear();
    router.navigate(['/auth/login']);
    return false;
  };

  return new Promise(async (res) => {
    const isAuthenticated = await authService.isAuthenticated();

    if (isAuthenticated) {
      res(true);
    } else {
      res(unauthenticated());
    }
  });
};
