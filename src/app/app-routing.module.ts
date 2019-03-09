import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'super-secret', component: SuperSecretComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
