import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../shared/trip.service';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs';
import { Trip } from '../shared/trip';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss']
})
export class TripDetailComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  tripId: string;
  trip$: Observable<Trip>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private tripService: TripService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.tripId = this.route.snapshot.paramMap.get('id');
    this.getTrip();
  }

  getTrip() {
    this.authService.user$.subscribe(user => {
      this.trip$ = this.tripService.getTrip(user.uid, this.tripId);
    });
  }


}
