// angular
import { Component, computed, effect, input } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

// components
import { PatientProfileComponent } from '../../components/patient-profile/patient-profile.component';

// models
import * as Models from '../../@shared/models';

// constants
import * as Constants from '../../@shared/constants';

@Component({
  selector: 'app-patient-profile-container',
  imports: [PatientProfileComponent, ReactiveFormsModule],
  templateUrl: './patient-profile.container.html',
  styleUrl: './patient-profile.container.css',
})
export class PatientProfileContainer {
  patientProfileForm = new FormGroup({
    patientName: new FormControl('', [Validators.required]),
    patientGender: new FormControl(''),
    patientHeight: new FormControl(0, [Validators.maxLength(5)]),
    patientWeight: new FormControl(0, [Validators.maxLength(5)]),
    patientStatus: new FormControl(false, [Validators.required]),
    patientNote: new FormControl(''),
  });

  patientData = input<Models.PatientProfile | undefined>(undefined);

  genderOptions = Constants.genderOptions;
  statusOptions = Constants.statusOptions;

  constructor() {
    const patientDataValues = computed(() => ({
      patientName: this.patientData()?.patient_name,
      patientGender: this.patientData()?.gender,
      patientHeight: this.patientData()?.height,
      patientWeight: this.patientData()?.weight,
      patientStatus: this.patientData()?.status,
      patientNote: this.patientData()?.note,
    }));

    effect(() => {
      const values = patientDataValues();
      if (this.patientData()) {
        this.patientProfileForm.patchValue(values);
      }
    });
  }
}
