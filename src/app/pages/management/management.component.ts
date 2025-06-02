// angular
import { Component } from '@angular/core';

// components
import { LayoutComponent } from '../../components/layout/layout.component';
import { PatientCardManagementContainer } from '../../containers/patient-card-management/patient-card-management.container';

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
  selector: 'app-management',
  imports: [LayoutComponent, AsyncPipe, PatientCardManagementContainer],
  templateUrl: './management.component.html',
  styleUrl: './management.component.css',
})
export class ManagementComponent {
  cardData$: Observable<Models.AsyncState<[]>>;

  constructor(private dashboardService: DashboardService) {
    this.cardData$ = toAsyncState<[]>(this.dashboardService.getDashboard());
  }
}
