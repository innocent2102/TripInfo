import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { CoreModule } from './core/core.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { NgxsModule  } from '@ngxs/store';
import { TripState } from './shared/state/trip.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TripsComponent } from './trips/trips.component';
import { TripDetailComponent } from './trips/trip-detail/trip-detail.component';
import { PlanComponent } from './trips/trip-detail/plan/plan.component';
import { AttractionsComponent } from './trips/trip-detail/places/attractions/attractions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { AddAttractionComponent } from './trips/trip-detail/places/attractions/add-attraction/add-attraction.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TripsComponent,
    TripDetailComponent,
    PlanComponent,
    AttractionsComponent,
    PageNotFoundComponent,
    AddButtonComponent,
    AddAttractionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot(firebaseConfig),
    CoreModule,
    NgxsModule.forRoot([TripState], {developmentMode: !environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddAttractionComponent]
})
export class AppModule { }
