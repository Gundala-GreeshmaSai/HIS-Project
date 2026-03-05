import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { RegisterComponent} from './register/register';
import {DashboardComponent} from './dashboard/dashboard';
import{PatientComponent} from './patient/patient';
import { AuthGuard } from './Server-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'patient', component:PatientComponent},
];