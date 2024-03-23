import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() id!: string;
  @Input({transform: trimString}) type!: string;
  @Input() label!: string;
  @Input({transform: trimString}) placeholder!: string;
}

function trimString(value: string | undefined) {
  return value?.trim() ?? "";
}
