import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public user: any;

  constructor() {}

  isAuthenticated() {
    // lógica para verificar se o usuário está logado
    return false;
  }

  login() {
    this.user = {
      name: 'Bruno Rocha',
      email: 'bruno@email',
      token: 'Bearer jiosajiosasa',
    };
    localStorage.setItem('user', { ...this.user });
  }

  logout() {
    // Deletar dados do localStorage e mandar pra rota de login
  }
}
