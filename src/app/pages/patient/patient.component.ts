// angular
import { Component, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// components
import { LayoutComponent } from '../../components/layout/layout.component';
import { PatientProfileContainer } from '../../containers/patient-profile/patient-profile.container';

// services
import { PatientProfileService } from '../../services/api/patient-profile.service';

// rxjs
import { fromEvent, lastValueFrom, takeUntil } from 'rxjs';

// libs
import { injectQuery } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'app-patient',
  imports: [LayoutComponent, PatientProfileContainer],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css',
})
export class PatientComponent {
  patientId: number;

  constructor(
    private patientProfileService: PatientProfileService,
    private route: ActivatedRoute
  ) {
    this.patientId = Number(this.route.snapshot.params['id']);
    effect(() => console.log('Dados do paciente', this.patientQuery.data()));
  }

  readonly patientQuery = injectQuery(() => ({
    queryKey: ['patient', this.patientId],
    queryFn: (context) => {
      const abort$ = fromEvent(context.signal, 'abort');
      return lastValueFrom(
        this.patientProfileService
          .getPatientProfile$(this.patientId)
          .pipe(takeUntil(abort$))
      );
    },
  }));
}
