import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AttractionService } from './shared/attraction.service';
import { Observable } from 'rxjs';
import { Attraction } from './shared/attraction';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../../../shared/services/auth.service';
import { TripService } from '../../../shared/trip.service';
import { TripBaseComponent } from '../../trip.base';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AttractionsComponent extends TripBaseComponent implements OnInit {

  attractions$: Observable<Attraction[]>;

  constructor(
    af: AngularFirestore,
    authService: AuthService,
    tripService: TripService,
    private attractionService: AttractionService) {
    super(af, authService, tripService);
  }

  ngOnInit() {
    this.attractions$ = this.attractionService.getAttractions();
  }

  onNavigate(url: string) {
    window.open(url);
  }
}
