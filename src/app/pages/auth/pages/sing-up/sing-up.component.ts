import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmComponent } from '../../components/button/confirm/confirm.component';
import { HeaderComponent } from '../../components/header/header.component';
import { InputComponent } from '../../components/input/input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [ConfirmComponent, HeaderComponent, InputComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.scss'
})
export class SingUpComponent {
  titleHeader = "New Here?"
  textHeader = "Enter your email below to create a new account"
  inputs = [
    {
      id: "name",
      label: "Name",
      placeholder: "John Silva..",
    },
    {
      id: "birthday",
      type: "date",
      label: "Birthday",
    },
    {
      id: "phone",
      type: "tel",
      label: "Phone",
      placeholder: "+353 (083) 432 9111",
    },
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
    {
      id: "confirm-password",
      type: "password",
      label: "Confirm Password",
    }
  ]
  labelConfirm = "Sing Up"

  singUpForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    birthday: new FormControl<string>('', [Validators.required, Validators.minLength(10)]),
    phone: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
  });

  onSubmit() {
    if (this.singUpForm.valid) {
      const formData = this.singUpForm.value;
      console.log(formData); // Example: { username: '...', email: '...' }
    } else {
      console.log("Digita os negócio certo!");
    }
  }
}
