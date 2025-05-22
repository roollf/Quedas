// angular
import { Component } from '@angular/core';

// components
import { LayoutComponent } from '../../components/layout/layout.component';
import { PatientCardComponent } from '../../components/patient-card/patient-card.component';

// services
import { DashboardService } from '../../services/api/dashboard.service';

// pipes
import { AsyncPipe } from '@angular/common';

// rxjs
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [LayoutComponent, PatientCardComponent, AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  cardData$: Observable<[]>;

  constructor(private dashboardService: DashboardService) {
    this.cardData$ = this.dashboardService.getDashboard();
  }
}
