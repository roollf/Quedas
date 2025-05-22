// angular
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

// custom pipes
import { UppercaseInitialPipe } from '../../../services/pipes/uppercase-initial.pipe';

@Component({
  selector: 'app-patient-status',
  imports: [NgClass, UppercaseInitialPipe],
  templateUrl: './patient-status.component.html',
  styleUrl: './patient-status.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientStatusComponent {
  @Input() title: string = '';
  @Input() status: number = 0;
  @Input() alert: boolean = false;

  constructor() {}

  get iconSrc(): string {
    switch (this.status) {
      case 1:
        return 'svg/active-icon.svg';
      case 2:
        return 'svg/triangle-exclamation-icon.svg';
      case 3:
        return 'svg/triangle-exclamation-icon.svg';
      default:
        return '';
    }
  }
}
