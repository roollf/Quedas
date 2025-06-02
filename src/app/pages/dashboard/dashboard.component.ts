// angular
import { Component } from '@angular/core';

// components
import { LayoutComponent } from '../../components/layout/layout.component';
import { PatientCardContainerDashboard } from '../../containers/patient-card-dashboard/patient-card-dashboard.container';

// services
import { DashboardService } from '../../services/api/dashboard.service';

// pipes
import { AsyncPipe } from '@angular/common';

// rxjs
import { Observable } from 'rxjs';

// composable
import { toAsyncState } from '../../@shared/composables/api/to-async-state';

// models
import * as Models from '../../@shared/models';

@Component({
  selector: 'app-dashboard',
  imports: [LayoutComponent, PatientCardContainerDashboard, AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  cardData$: Observable<Models.AsyncState<[]>>;

  constructor(private dashboardService: DashboardService) {
    this.cardData$ = toAsyncState<[]>(this.dashboardService.getDashboard());
  }
}
