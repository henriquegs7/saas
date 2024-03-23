import { Component } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms"
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ LoginComponent, SingUpComponent, ForgotPasswordComponent, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
