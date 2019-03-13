import { Injectable } from '@angular/core';
import { Trip } from './trip';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private currentTripSubject: BehaviorSubject<Trip>;
  public currentTrip: Observable<Trip>;

  constructor(private af: AngularFirestore) {
    this.currentTripSubject = new BehaviorSubject<Trip>(JSON.parse(localStorage.getItem('currentTrip')));
    this.currentTrip = this.currentTripSubject.asObservable();
  }

  public get currentTripValue(): Trip {
    return this.currentTripSubject.value;
  }

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

}
