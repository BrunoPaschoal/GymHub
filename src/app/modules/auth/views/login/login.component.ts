import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, finalize, of } from 'rxjs';
import { LoginResponseType } from '../../interfaces/authInterfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginResult$: Observable<LoginResponseType | null> = of(null);
  isLoading: boolean = false;

  constructor(private authService: AuthService, private form: FormBuilder) {}

  protected loginForm = this.form.group({
    email: [
      '',
      { validators: [Validators.required, Validators.email], updateOn: 'blur' },
    ],
    password: ['', Validators.required],
  });

  onLogin(): void {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this.loginResult$ = this.authService
      .login({
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!,
      })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      );

    this.loginResult$.subscribe({
      error: ({ error }) => {
        alert(error?.messag);
      },
    });
  }
}
