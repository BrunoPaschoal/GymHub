import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { SigninComponent } from './views/signin/signin.component';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [LoginComponent, SigninComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ImageModule,
    FormsModule,
    InputTextModule,
    RouterModule.forChild(authRoutes),
  ],
})
export class AuthModule {}
