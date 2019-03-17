import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-attraction',
  templateUrl: './add-attraction.component.html',
  styleUrls: ['./add-attraction.component.scss']
})
export class AddAttractionComponent implements OnInit {

  attractionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.attractionForm = formBuilder.group({
      name : [null, Validators.required],
      city : [null],
      photoURL : [null],
      description : [null],
      addressLink : [null],
      price : [null],
      openFromTime : [null],
      openToTime : [null],
      additionalInfo : [null],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.attractionForm);
  }
}
