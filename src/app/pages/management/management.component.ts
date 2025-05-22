// angular
import { Component } from '@angular/core';

// components
import { LayoutComponent } from '../../components/layout/layout.component';

// services
import { DashboardService } from '../../services/api/dashboard.service';

// pipes
import { AsyncPipe } from '@angular/common';

// rxjs
import { Observable } from 'rxjs';

// composable
import { State, withLoadingAndError } from '../../@shared/composables/api/use-http';

@Component({
  selector: 'app-management',
  imports: [LayoutComponent, AsyncPipe],
  templateUrl: './management.component.html',
  styleUrl: './management.component.css',
})
export class ManagementComponent {
  cardData$: Observable<State<[]>>;

  constructor(private dashboardService: DashboardService) {
    this.cardData$ = withLoadingAndError<[]>(this.dashboardService.getDashboard());
  }
}
