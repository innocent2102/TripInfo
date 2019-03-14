import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user'; // optional

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private afsAuth: AngularFireAuth,
    private af: AngularFirestore,
    private router: Router,
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.user$ = this.afsAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          const currentUser: User = {uid: user.uid, displayName: user.displayName, email: user.email, phoneNumber: user.phoneNumber, photoURL: user.photoURL, providedId: user.providerId};
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          this.currentUserSubject.next(currentUser);
          return this.af.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async signOut() {
    await this.afsAuth.auth.signOut();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get userLoggedIn(): boolean {
    return this.currentUserValue !== null && this.currentUserValue !== undefined;
  }


}
