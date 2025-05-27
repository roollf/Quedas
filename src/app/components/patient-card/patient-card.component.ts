// angular
import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-patient-card',
  imports: [NgClass],
  templateUrl: './patient-card.component.html',
  styleUrl: './patient-card.component.css',
})
export class PatientCardComponent {
  @Input() alertClasses: Record<string, boolean> = {};
  @Input() isAlertActive: boolean = false;
}
