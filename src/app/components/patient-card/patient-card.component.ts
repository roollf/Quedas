// angular
import { Component, effect, input, OnInit, signal } from '@angular/core';
import { NgClass } from '@angular/common';

// services
import { AlarmService } from '../../services/utils/alarm.service';

// components
import { PatientStatusComponent } from './patient-status/patient-status.component';

@Component({
  selector: 'app-patient-card',
  imports: [NgClass, PatientStatusComponent],
  templateUrl: './patient-card.component.html',
  styleUrl: './patient-card.component.css',
})
export class PatientCardComponent implements OnInit {
  patientData = input<any>({});
  alertClasses: Record<string, boolean> = {};
  alert = signal<{ risk: number; alert: boolean; title: string }>({
    risk: 1,
    alert: false,
    title: '',
  });

  constructor(private alarmService: AlarmService) {}

  ngOnInit(): void {
    this._evaluateAlarmValueEffect;
    this._setAlarmClassesEffect;
  }

  private _evaluateAlarmValueEffect = effect(() => {
    const data = this.patientData();
    this.alert.set(this.alarmService.evaluateAlarm(data));
  });

  private _setAlarmClassesEffect = effect(() => {
    this.alertClasses = {
      'fall-risk-alert': this.alert().risk === 2 && this.alert().alert,
      'fall-alert': this.alert().risk === 3 && this.alert().alert,
    };
  });
}
