import { Injectable } from '@angular/core';
import { Trip } from './trip';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

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
    return this.af.doc<Trip>(`users/${userId}/trips/${tripId}`).valueChanges();
  }

}
