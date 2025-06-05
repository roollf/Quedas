import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManagementComponent } from './pages/management/management.component';
import { PatientComponent } from './pages/patient/patient.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,
  },
  {
    path: 'management',
    title: 'Gerenciamento',
    component: ManagementComponent,
  },
  {
    path: 'management/patient/:id',
    title: 'Patients',
    component: PatientComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
];
