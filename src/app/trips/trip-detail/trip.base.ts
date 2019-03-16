import { TripService } from '../shared/trip.service';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { OnInit } from '@angular/core';

export class TripBaseComponent implements OnInit {

  tripsDetailURL: string;
  userId: string;
  tripId: string;
  constructor(  protected af: AngularFirestore, protected authService: AuthService, protected tripService: TripService) {
    this.tripsDetailURL = 'trips/detail';
    this.tripId = this.tripService.currentTripValue().id;
    this.userId = this.authService.currentUserValue().uid;
  }

  getCollection(docName: string) {
    console.log(`users/${this.userId}/trips/${this.tripId}/${docName}`);
    return this.af.collection(`users/${this.userId}/trips/${this.tripId}/${docName}`).valueChanges();
  }

  ngOnInit(): void {

  }


}
