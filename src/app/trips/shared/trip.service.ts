import { Injectable } from '@angular/core';
import { Trip } from './trip';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { DataHelper } from './helpers/DataHelper';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  public currentTripSubject$: BehaviorSubject<Trip>;
  public currentTrip: Observable<Trip>;


  constructor(
    private authService: AuthService,
    private af: AngularFirestore) {
    this.currentTripSubject$ = new BehaviorSubject<Trip>(JSON.parse(localStorage.getItem('currentTrip')));
    this.currentTrip = this.currentTripSubject$.asObservable();
  }

  currentTripValue(): Trip {
    return this.currentTripSubject$.value;
  }
  // TODO: Check if this is not produce memory leaks
  public get isTripChosen(): boolean {
    return DataHelper.hasValue(localStorage.getItem('currentTrip'));
  }

  getTrips() {
    const userId = this.authService.currentUserValue().uid;
    return this.af.collection(`users/${userId}/trips`)
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Trip;
          const id = a.payload.doc.id;
          console.log('Trips fetched');
          return { id, ...data };
        }))
    );
  }

}
