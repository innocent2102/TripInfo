import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTrip } from '../shared/actions/trips.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store) { }

  addTrip(name, id) {
    this.store.dispatch(new AddTrip({name: name, id: id}));
  }

  ngOnInit() {
  }

}
