import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { PatientCardComponent } from '../../components/patient-card/patient-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [LayoutComponent, PatientCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
