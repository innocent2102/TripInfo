import { Injectable } from '@angular/core';
import { Trip } from './trip';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private af: AngularFirestore) { }

    getTrips(userId: string) {
      return this.af.collection(`users/${userId}/trips`)
        .snapshotChanges()
        .pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Trip;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
      );
    }

    getTrip(userId: string, tripId: string) {
      return this.af.doc(`users/${userId}/trips/${tripId}`).valueChanges();
    }

  // TODO: this is temporary solution. Newest trip should be returned from BE;
  // getNewestTrip() {
  //   return this.trips.sort((a: Trip, b: Trip) => +(a.createdAt) - +(b.createdAt))[this.trips.length - 1];
  // }

}
