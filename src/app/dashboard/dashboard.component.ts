import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  trips$: Observable<any[]>;

  constructor(private af: AngularFirestore) { }

  ngOnInit() {
    this.trips$ = this.af.collection<any>('users/7BIxsMLMCEea8qk2qeS8wFTFOyG2/trips/').valueChanges();
  }

}
