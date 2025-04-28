import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-card',
  imports: [],
  templateUrl: './patient-card.component.html',
  styleUrl: './patient-card.component.css',
})
export class PatientCardComponent {
  @Input() ambientName: string = '';
  @Input() patientName: string = '';
  @Input() status: boolean = false;
  @Input() pause: boolean = false;
  @Input() power: boolean = false;
  @Input() alarm: string = '';

  constructor() {}
}
