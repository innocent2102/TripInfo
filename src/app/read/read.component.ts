import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { TripState } from '../shared/state/trip.state';
import { RemoveTrip } from '../shared/actions/trips.actions';
import { Observable } from 'rxjs';
import { Trip } from '../trips/shared/trip';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})

export class ReadComponent implements OnInit {

  @Select(TripState.getTrips) trips$: Observable<Trip>;

  constructor(private store: Store) {}

  delTrip(name) {
    this.store.dispatch(new RemoveTrip(name));
  }

  ngOnInit() {}

}
