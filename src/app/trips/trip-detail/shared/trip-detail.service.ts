import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../../shared/services/auth.service';
import { TripService } from '../../shared/trip.service';
import { Observable, of } from 'rxjs';
import { Attraction } from '../../shared/models/attraction';
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { ATTRACTIONS } from '../../shared/mocks/attractions_mock';

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
    if (environment.production) {
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
    } else {
      return of(ATTRACTIONS);
    }

  }

  addDocument(document, collectionPath: string, form: FormGroup) {
    this.af.collection<Attraction>(collectionPath).add(document);
  }

  editDocument(collectionName: string, docId: string, data, form: FormGroup) {
    return this.af.collection<Attraction>(`${this.tripDocumentPath}/${collectionName}`).doc(docId).update(data);
  }

  removeDocument(collectionName: string, docId: string) {
    return this.af.collection<Attraction>(`${this.tripDocumentPath}/${collectionName}`).doc(docId).delete();
  }

}
