import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { SigninComponent } from './views/signin/signin.component';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { PasswordModule } from 'primeng/password';
import { DualColorTitleComponent } from '../../Common/components/text/dual-color-title/dual-color-title.component';

@NgModule({
  declarations: [LoginComponent, SigninComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ImageModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes),
    DualColorTitleComponent,
  ],
})
export class AuthModule {}
