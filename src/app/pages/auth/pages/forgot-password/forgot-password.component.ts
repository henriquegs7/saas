import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

export class ForgotPasswordComponent {
  submited: boolean = false;

  titleHeader = "Forgot Password?"
  textHeader = "Enter your email to reset your password"
  input = {
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
    this.submited = true;

    if (this.forgotPasswordForm.invalid) {
      console.log('Formulário inválido');
      return;
    }

    console.log('Formulário submetido!', this.forgotPasswordForm.value);
  }
}
