import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { SigninComponent } from './views/signin/signin.component';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { authRoutes } from './auth.routes';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [LoginComponent, SigninComponent],
  imports: [
    CommonModule,
    CalendarModule,
    CascadeSelectModule,
    TableModule,
    CheckboxModule,
    ButtonModule,
    FormsModule,
    RouterModule.forChild(authRoutes),
  ],
})
export class AuthModule {}
