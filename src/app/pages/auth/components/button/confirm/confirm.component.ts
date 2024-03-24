import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss'
})

export class ConfirmComponent {
  @Input() label!: string;
}
