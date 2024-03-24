import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../Common/interfaces/UserTypes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: User | undefined;
  public userIsLogged: boolean = false;

  constructor(private router: Router) {}

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.userIsLogged) {
          resolve(true);
          return;
        }

        const user = localStorage.getItem('user');
        if (!user) {
          resolve(false);
          return;
        }
        const userParsed = JSON.parse(user);
        this.user = userParsed;

        if (this.user?.token) {
          this.userIsLogged = true;
          resolve(true);
        } else {
          localStorage.clear();
          resolve(false);
        }
      }, 300);
    });
  }

  login() {
    setTimeout(() => {
      this.user = {
        name: 'Bruno Rocha',
        email: 'bruno@email',
        token: 'Bearer jiosajiosasa',
      };

      localStorage.setItem('user', JSON.stringify(this.user));
      this.userIsLogged = true;
      this.router.navigate(['']);
    }, 300);
  }

  logout() {
    localStorage.clear();
    this.userIsLogged = false;
    this.router.navigate(['auth/login']);
  }
}
