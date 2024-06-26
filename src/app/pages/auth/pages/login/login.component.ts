import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { ConfirmComponent } from '../../components/button/confirm/confirm.component';
import { LinkComponent } from '../../components/button/link/link.component';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, ConfirmComponent, LinkComponent, InputComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  title = 'Login';

  titleHeader = "Welcome back!"
  textHeader = "Enter your email and password to login to your account"
  loginConfirm = "Login"
  forgotPasswordLink = "/forgotpassword"
  singUpLink = "/singup"
  forgotPasswordLabel = "Forgot Password?"
  singUpLabel = "Sing Up"
  inputs = [
    {
      id: "email",
      type: "email",
      label: "Email",
      placeholder: "example@mail.com",
    },
    {
      id: "password",
      type: "password",
      label: "Password",
      placeholder: "",
    },
  ]

  constructor(private router: Router) { }

  redirecionarParaRota() {
    this.router.navigate(['/home']);
  }

  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
  });

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('Formulário inválido');
      return;
    }

    console.log('Formulário submetido!', this.loginForm.value)
    this.redirecionarParaRota()
  }
}
