import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    // TODO: user can see view for a short time even if not logged in. Find solution. Redux?
    this.auth.user$.subscribe(user => {
      if (user) {
        this.router.navigate(['/trips']);
      }
    });
  }


}
