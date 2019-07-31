import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';
import { TripService } from '../../../shared/trip.service';
import { Attraction } from '../../../shared/models/attraction';
import { AngularFirestore } from '@angular/fire/firestore';
import { TripDetailService } from '../../shared/trip-detail.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-attraction-modal',
  templateUrl: './attraction-modal.component.html',
  styleUrls: ['./attraction-modal.component.scss']
})
export class AttractionModalComponent implements OnInit {

  attractionForm: FormGroup;
  collectionPath: string;
  userId: string;
  tripId: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AttractionModalComponent>,
    private af: AngularFirestore,
    private tripService: TripService,
    private tripDetailService: TripDetailService,
    private authService: AuthService,
    private formBuilder: FormBuilder) {
    if (this.data.type === 'edit') {
      this.attractionForm = this.formBuilder.group({
        name: [this.data.attraction.name, Validators.required],
        city: [this.data.attraction.city],
        photoURL: [this.data.attraction.photoURL],
        description: [this.data.attraction.description],
        addressLink: [this.data.attraction.addressLink],
        price: [this.data.attraction.price],
        openFromTime: [this.data.attraction.openFromTime],
        openToTime: [this.data.attraction.openToTime],
        additionalInfo: [this.data.attraction.additionalInfo],
      });

      console.log(this.data);
    } else {
    this.attractionForm = formBuilder.group({
      name: [null, Validators.required],
      city: [null],
      photoURL: [null],
      description: [null],
      addressLink: [null],
      price: [null],
      openFromTime: [null],
      openToTime: [null],
      additionalInfo: [null],
    });
    }
  }

  ngOnInit() {
    this.userId = this.authService.currentUserValue().uid;
    this.tripId = this.tripService.currentTripValue().id;
    this.collectionPath = `users/${this.userId}/trips/${this.tripId}/attractions`;

  }

  onSubmit(attraction: Attraction) {
    if (this.data.type === 'edit') {
      this.tripDetailService.editDocument('attractions', this.data.attraction.id, attraction,  this.attractionForm);
      this.dialogRef.close();
      this.attractionForm.reset();
    } else {
      this.tripDetailService.addDocument(attraction, this.collectionPath, this.attractionForm);
      this.dialogRef.close();
      this.attractionForm.reset();
    }

  }

}
