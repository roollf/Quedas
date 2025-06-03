// angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// components
import { LayoutComponent } from '../../components/layout/layout.component';
import { PatientCardManagementContainer } from '../../containers/patient-card-management/patient-card-management.container';

// services
import { DashboardService } from '../../services/api/dashboard.service';

// rxjs
import { lastValueFrom } from 'rxjs';

// libs
import { injectQuery } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'app-management',
  imports: [LayoutComponent, PatientCardManagementContainer],
  templateUrl: './management.component.html',
  styleUrl: './management.component.css',
})
export class ManagementComponent {
  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  readonly patientsQuery = injectQuery(() => ({
    queryKey: ['patients'],
    queryFn: () => lastValueFrom(this.dashboardService.getDashboard$()),
  }));

  navigateToDetail(patientId: number) {
    this.router.navigate(['/management/patient', patientId]);
  }
}
