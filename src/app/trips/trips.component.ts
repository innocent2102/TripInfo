import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { TripService } from './shared/trip.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  trips$: Observable<any>;
  trips: any;
  first: Date;

  constructor(
    private tripService: TripService,
    private authService: AuthService) { }

  ngOnInit() {
    this.first = new Date();
    console.log(this.first);
    this.getTrips();
  }

  getTrips() {
    this.authService.user$.pipe(
      take(1))
      .subscribe(user => {
        this.trips$ = this.tripService.getTrips(user.uid);
      });
  }


}
