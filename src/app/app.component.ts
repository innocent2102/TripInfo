import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { TripService } from './trips/shared/trip.service';
import { MENU_ITEMS } from './trips/shared/mocks';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuItems = MENU_ITEMS;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public tripService: TripService,
    public auth: AuthService) {
  }

  expandPanel(matExpansionPanel, item) {
    matExpansionPanel.expanded = item.children.length > 0 && matExpansionPanel.expanded;
  }

}
