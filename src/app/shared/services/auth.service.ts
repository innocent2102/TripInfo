import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user'; // optional

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor(
    private afsAuth: AngularFireAuth,
    private af: AngularFirestore ,
    private router: Router,
  ) {
    this.user$ = this.afsAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.af.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
            return of (null);
        }
      })
    );
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afsAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.af.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      name: user.name,
    };

    return userRef.set(data, { merge: true });
  }

  async signOut() {
    await this.afsAuth.auth.signOut();
    this.router.navigate(['/']);
  }

}
