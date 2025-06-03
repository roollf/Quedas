// angular
import { Component, computed, input, output } from '@angular/core';

// components
import { PatientCardComponent } from '../../components/patient-card/patient-card.component';

// services
import { AlarmService } from '../../services/utils/alarm.service';

// custom pipes
import { UppercaseInitialPipe } from '../../services/pipes/uppercase-initial.pipe';

// models
import * as Models from '../../@shared/models';

@Component({
  selector: 'app-patient-card-container-management',
  imports: [PatientCardComponent, UppercaseInitialPipe],
  templateUrl: './patient-card-management.container.html',
  styleUrl: './patient-card-management.container.css',
})
export class PatientCardManagementContainer {
  patientData = input<Models.DashboardData>({
    ambient: '',
    patient_id: 0,
    patient_name: '',
    power: false,
    status: false,
    pause: false,
    alarm_id: 0,
    created_at: '',
  });
  cardClick = output<void>();

  constructor(private alarmService: AlarmService) {}

  alertState = computed(() =>
    this.alarmService.evaluateAlarm(this.patientData())
  );

  alertClasses = computed(() => ({
    'fall-risk-alert': this.alertState().risk === 2 && this.alertState().alert,
    'fall-alert': this.alertState().risk === 3 && this.alertState().alert,
  }));

  iconSrc = computed(() => {
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
  });

  handleClick() {
    this.cardClick.emit();
  }
}
