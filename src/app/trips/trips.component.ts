import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { TripService } from './shared/trip.service';
import { take } from 'rxjs/operators';
import { Trip } from './shared/trip';
import { Router } from '@angular/router';
import { AddTrip } from '../shared/actions/trips.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  trips$: Observable<Trip[]>;
  trips: Trip[];

  constructor(
    private store: Store,
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

  // TODO: Trips should be add to store on user click not component init
  addTripToStore(name, id) {
    this.store.dispatch(new AddTrip({name: name, id: id}));
  }

  chooseTrip(trip: Trip) {
    this.addTripToStore(trip.name, trip.id);
    localStorage.setItem('currentTrip', JSON.stringify(trip));
    // TODO: Probably to remove due to different solution of data share
    this.router.navigate([`trips/detail`]);
  }
}
