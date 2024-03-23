import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { ConfirmComponent } from '../../components/button/confirm/confirm.component';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [HeaderComponent, ConfirmComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent{


  titleHeader = "Forgot Password?"
  textHeader = "Enter your email to reset your password"
  inputs = {
    email: {
      id: "email",
      type: "email",
      label: "Email",
      placeholder: "example@mail.com",
    }
  }
  labelConfirm = "Reset Password"

  forgotPasswordForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    console.log('Formulário submetido!', this.forgotPasswordForm.value);
  }

}
