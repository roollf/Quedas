// angular
import { Component, input } from '@angular/core';

// components
import { PatientCardComponent } from '../../components/patient-card/patient-card.component';

// services
import { AlarmService } from '../../services/utils/alarm.service';

// custom pipes
import { UppercaseInitialPipe } from '../../services/pipes/uppercase-initial.pipe';

// models
import * as Models from '../../@shared/models';

@Component({
  selector: 'app-patient-card-container',
  imports: [PatientCardComponent, UppercaseInitialPipe],
  templateUrl: './patient-card.container.html',
  styleUrl: './patient-card.container.css',
})
export class PatientCardContainer {
  patientData = input<Models.PatientData>({
    ambient: '',
    patient_name: '',
    power: false,
    status: false,
    pause: false,
    alarm_id: 0,
    created_at: '',
  });

  constructor(private alarmService: AlarmService) {}

  get alertState() {
    return this.alarmService.evaluateAlarm(this.patientData());
  }

  get alertClasses() {
    return {
      'fall-risk-alert': this.alertState.risk === 2 && this.alertState.alert,
      'fall-alert': this.alertState.risk === 3 && this.alertState.alert,
    };
  }

  get iconSrc() {
    switch (this.patientData().alarm_id) {
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
