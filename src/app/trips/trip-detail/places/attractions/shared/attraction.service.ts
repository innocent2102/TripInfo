import { Injectable } from '@angular/core';
import { TripBaseComponent } from '../../../trip.base';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../../../../shared/services/auth.service';
import { TripService } from '../../../../shared/trip.service';

@Injectable({
  providedIn: 'root'
})
export class AttractionService extends TripBaseComponent {

  constructor(af: AngularFirestore, authService: AuthService, tripService: TripService) {
    super(af, authService, tripService);
  }

  getAttractions(docName = 'attractions') {
    return this.getCollection(docName);
  }


}


