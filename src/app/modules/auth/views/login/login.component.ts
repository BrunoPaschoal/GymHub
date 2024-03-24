import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  selectedCity: any;
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {}

  login() {
    this.authService.login();
  }
}
