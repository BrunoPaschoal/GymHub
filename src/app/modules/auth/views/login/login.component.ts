import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  selectedCity: any;
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login();
  }
}
