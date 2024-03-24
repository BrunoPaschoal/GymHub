import { Component } from '@angular/core';
import { AuthenticationService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private authService: AuthenticationService) {}

  logout() {
    this.authService.logout();
  }
}
