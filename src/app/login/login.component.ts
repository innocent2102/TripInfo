import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
    this.auth.user$.subscribe(user => {
      if (user) {
        this.router.navigate(['/dashboard']);
      }
    });
    //TODO: user can see view with short time. Find solution. Redux?
  }

}
