// angular
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// components
import { LayoutComponent } from '../../components/layout/layout.component';

// services
import { PatientsService } from '../../services/api/patients.service';

// rxjs
import { fromEvent, lastValueFrom, takeUntil } from 'rxjs';

// libs
import { injectQuery } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'app-patient',
  imports: [LayoutComponent],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css',
})
export class PatientComponent {
  patientId: number;

  constructor(
    private patientService: PatientsService,
    private route: ActivatedRoute
  ) {
    this.patientId = Number(this.route.snapshot.params['id']);
  }

  readonly patientQuery = injectQuery(() => ({
    queryKey: ['patient', this.patientId],
    queryFn: (context) => {
      const abort$ = fromEvent(context.signal, 'abort');
      return lastValueFrom(
        this.patientService.getPatient$(this.patientId).pipe(takeUntil(abort$))
      );
    },
  }));
}
