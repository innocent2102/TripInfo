import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TripsComponent } from './trips/trips.component';
import { TripDetailComponent } from './trips/trip-detail/trip-detail.component';
import { PlanComponent } from './trips/trip-detail/plan/plan.component';
import { AttractionsComponent } from './trips/trip-detail/places/attractions/attractions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'trips', component: TripsComponent, canActivate: [AuthGuard]},
  {path: 'trips/detail', component: TripDetailComponent, canActivate: [AuthGuard]},
  {path: 'trips/detail/plan', component: PlanComponent, canActivate: [AuthGuard]},
  {path: 'trips/detail/attractions', component: AttractionsComponent, canActivate: [AuthGuard]},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '', redirectTo: '/trips/detail/attractions', pathMatch: 'full'},
  {path: '**', redirectTo: '/page-not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
