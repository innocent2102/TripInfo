import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { TripState } from '../../../shared/state/trip.state';
import { Observable } from 'rxjs';
import { Trip } from '../../shared/trip';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  @Select(TripState.getTrips) trips$: Observable<Trip>;

  constructor() { }

  ngOnInit() {
  }

}
