import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take, tap } from 'rxjs/operators';
import { TripService } from '../../trips/shared/trip.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tripService: TripService,
    private auth: AuthService,
    private router: Router) {}

  canActivate(next, state): Observable<boolean> {
    return this.auth.user$.pipe(
      take(1),
      map(user => !!user), // map to boolean
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
