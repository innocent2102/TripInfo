import { Injectable } from '@angular/core';
import { Trip } from './trip';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  // TODO: Mocks to delete
  trips: Trip[] = [
    {name: 'Cypr', id: 'VFO9', createdAt: new Date('2018-02-03')},
    {name: 'Rakh', id: 'T9ANREI', createdAt: new Date('2018-02-04')},
    {name: 'Bafyot', id: 'OHY', createdAt: new Date('2018-02-02')},
    {name: 'Gristy', id: 'T9ANREI', createdAt: new Date('2018-02-05')},
    {name: 'Modally', id: 'OHY', createdAt: new Date('2018-02-04')},
    {name: 'Babuma', id: '7AO', createdAt: new Date('2018-02-03')},
    {name: 'Succumbs', id: 'T9ANREI', createdAt: new Date('2018-02-02')},
    {name: 'Slackens', id: 'OHY', createdAt: new Date('2018-02-12')},
    {name: 'Resex', id: '7AO', createdAt: new Date('2018-02-02')},
    {name: 'Hoodwise', id: '7AO', createdAt: new Date('2018-02-15')},
  ];

  constructor(private af: AngularFirestore) { }

    getTrips(userId) {
      return this.af.collection(`users/${userId}/trips`).valueChanges();
    }


  // TODO: this is temporary solution. Newest trip should be returned from BE;
  getNewestTrip() {
    return this.trips.sort((a: Trip, b: Trip) => +(a.createdAt) - +(b.createdAt))[this.trips.length - 1];
  }

}
