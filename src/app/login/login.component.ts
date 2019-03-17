import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit, OnDestroy {

  userSubscription: Subscription;

  constructor(
    public auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.userSubscription = this.auth.user$.subscribe(user => {
      if (user) {
        this.router.navigate(['/trips']);
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
