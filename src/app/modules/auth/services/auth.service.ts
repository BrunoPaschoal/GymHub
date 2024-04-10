import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../Common/interfaces/UserTypes';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginArgs, LoginResponseType } from '../interfaces/authInterfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | undefined>(undefined);
  public user = this.userSubject.asObservable();
  public userIsLogged: boolean = false;
  private loginUrl: string = 'http://localhost:3000/login';

  constructor(private router: Router, private http: HttpClient) {}

  public isAuthenticated(): Promise<boolean> {
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

        this.userSubject.next(userParsed);

        if (userParsed?.token) {
          this.userIsLogged = true;
          resolve(true);
        } else {
          localStorage.clear();
          resolve(false);
        }
      }, 300);
    });
  }

  public login({ email, password }: LoginArgs): Observable<LoginResponseType> {
    return this.http
      .post<LoginResponseType>(this.loginUrl, {
        email,
        password,
      })
      .pipe(
        tap((res) => {
          this.handleAuthentication({
            name: res.name,
            email: res.email,
            avatar: res?.avatar,
            token: res.token,
            role: res.role,
          });
        })
      );
  }

  private handleAuthentication(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.userIsLogged = true;
    this.userSubject.next(user);
    this.router.navigate(['']);
  }

  logout() {
    localStorage.clear();
    this.userSubject.next(undefined);
    this.userIsLogged = false;
    this.router.navigate(['auth/login']);
  }
}
