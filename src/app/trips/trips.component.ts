import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { TripService } from './shared/trip.service';
import { take } from 'rxjs/operators';
import { Trip } from './shared/trip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  trips$: Observable<Trip[]>;
  trips: Trip[];

  constructor(
    private router: Router,
    private tripService: TripService,
    private authService: AuthService) { }

  ngOnInit() {
    this.getTrips();
  }

  getTrips() {
    this.authService.user$.pipe(
      take(1))
      .subscribe(user => {
        this.trips$ = this.tripService.getTrips(user.uid);
      });
  }


  // goToTripDetail(trip: Trip) {
  //   this.router.navigate([`trips/${trip.id}`]);
  // }
}
