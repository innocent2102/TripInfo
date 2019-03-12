import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { TripService } from '../trips/shared/trip.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  constructor(
    private tripService: TripService,
    public auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.router.navigate(['/trips']);
      }
    }).unsubscribe();
    //TODO: user can see view for a short time even if not logged in. Find solution. Redux?
  }

}
