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

import { LoginComponent } from './login/login.component';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TripsComponent } from './trips/trips.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuperSecretComponent,
    MainNavComponent,
    DashboardComponent,
    TripsComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
