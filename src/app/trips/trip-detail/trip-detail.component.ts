import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Trip } from '../shared/trip';
import { TripService } from '../shared/trip.service';
import { MENU_ITEMS } from '../shared/mocks';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss']
})
export class TripDetailComponent implements OnInit {

  trip: Trip;
  menuItems = MENU_ITEMS;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private tripService: TripService,
    private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.trip = this.tripService.currentTripValue;
  }

  expandPanel(matExpansionPanel, item) {
    matExpansionPanel.expanded = item.children.length > 0 && matExpansionPanel.expanded;
  }

}
