import { CommonModule } from '@angular/common';
import { Component, DestroyRef, Input, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  formControl: FormControl = new FormControl<string>('');

  value?: string;

  @Input() id!: string;
  @Input({ transform: trimString }) type!: string;
  @Input() label!: string;
  @Input({ transform: trimString }) placeholder!: string;

  destroyRef: DestroyRef = inject(DestroyRef);

  onChange: any = (value: any) => { };
  onTouch: any = () => { };

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  writeValue(value: string): void {
    this.formControl.setValue(value, { emitEvent: false });
  }
}

function trimString(value: string | undefined) {
  return value?.trim() ?? "";
}
