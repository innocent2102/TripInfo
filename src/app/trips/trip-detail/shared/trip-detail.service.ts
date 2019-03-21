import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../../shared/services/auth.service';
import { TripService } from '../../shared/trip.service';
import { Observable } from 'rxjs';
import { Attraction } from '../../shared/models/attraction';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripDetailService {

  userId: string;
  tripId: string;
  currency: string;
  tripDocumentPath: string;

  constructor(  protected af: AngularFirestore, protected authService: AuthService, protected tripService: TripService) {
    this.tripId = this.tripService.currentTripValue().id;
    this.userId = this.authService.currentUserValue().uid;
    this.currency = this.tripService.tripCurrency;
    this.tripDocumentPath = `users/${this.userId}/trips/${this.tripId}`;
  }

  getCollection(collectionName: string): Observable<Attraction[]> {
    return this.af.collection<Attraction>(`${this.tripDocumentPath}/${collectionName}`)
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Attraction;
          const id = a.payload.doc.id;
          console.log(`${collectionName} fetched`);
          return { id, ...data };
        }))
      );
  }

  addDocument(document, collectionPath: string) {
    this.af.collection<Attraction>(collectionPath).add(document);
  }

  removeDocument(collectionName: string, docId: string) {
    return this.af.collection<Attraction>(`${this.tripDocumentPath}/${collectionName}`).doc(docId).delete();
  }

}
