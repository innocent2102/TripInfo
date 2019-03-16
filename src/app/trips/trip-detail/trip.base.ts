import { TripService } from '../shared/trip.service';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Attraction } from './places/attractions/shared/attraction';

export class TripBaseComponent implements OnInit {

  tripsDetailURL: string;
  userId: string;
  tripId: string;
  currency: string;

  constructor(  protected af: AngularFirestore, protected authService: AuthService, protected tripService: TripService) {
    this.tripsDetailURL = 'trips/detail';
    this.tripId = this.tripService.currentTripValue().id;
    this.userId = this.authService.currentUserValue().uid;
    this.currency = this.tripService.tripCurrency;
  }

  getCollection(docName: string): Observable<Attraction[]> {
    return this.af.collection<Attraction>(`users/${this.userId}/trips/${this.tripId}/${docName}`).valueChanges();
  }

  ngOnInit(): void {

  }


}
