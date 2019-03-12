import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { AuthGuard } from './shared/services/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TripsComponent } from './trips/trips.component';
import { TripDetailComponent } from './trips/trip-detail/trip-detail.component';
import { PlanComponent } from './trips/trip-detail/plan/plan.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [

  {path: 'super-secret', component: SuperSecretComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'create', component: CreateComponent},
  {path: 'trips', component: TripsComponent, canActivate: [AuthGuard]},
  {path: 'trips/detail/:id', component: TripDetailComponent, canActivate: [AuthGuard], children: [
      {path: 'plan', component: PlanComponent, canActivate: [AuthGuard]},
    ]},
  {path: '', redirectTo: '/trips', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
