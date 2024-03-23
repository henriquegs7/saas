import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { ConfirmComponent } from '../../components/button/confirm/confirm.component';
import { LinkComponent } from '../../components/button/link/link.component';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, ConfirmComponent, LinkComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  titleHeader = "Welcome back!"
  textHeader = "Enter your email and password to login to your account"
  forgotPasswordLink = "Forgot Password?"
  singUpLink = "Sing Up"
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
    },
  ]

  ngOnInit() {

  }

  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log(formData); // Example: { username: '...', email: '...' }
    } else {
      console.log("Digita os negócio certo!");
    }
  }
}
