// angular
import { Component } from '@angular/core';

// components
import { LayoutComponent } from '../../components/layout/layout.component';
import { PatientCardContainerDashboard } from '../../containers/patient-card-dashboard/patient-card-dashboard.container';

// services
import { DashboardService } from '../../services/api/dashboard.service';

// rxjs
import { lastValueFrom } from 'rxjs';

// libs
import { injectQuery } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'app-dashboard',
  imports: [LayoutComponent, PatientCardContainerDashboard],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private dashboardService: DashboardService) {}

  readonly patientsQuery = injectQuery(() => ({
    queryKey: ['patients'],
    queryFn: () => lastValueFrom(this.dashboardService.getDashboard$()),
  }));
}
