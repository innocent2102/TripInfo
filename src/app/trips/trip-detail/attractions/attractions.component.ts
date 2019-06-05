import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Attraction } from '../../shared/models/attraction';
import { TripBaseComponent } from '../trip-detail.base';
import { MatDialog } from '@angular/material';
import { AttractionModalComponent } from './attraction-modal/attraction-modal.component';
import { TripDetailService } from '../shared/trip-detail.service';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AttractionsComponent extends TripBaseComponent implements OnInit {

  attractions$: Observable<Attraction[]>;

  constructor(
    private tripDetailService: TripDetailService,
    public dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    // TODO: document should be passed programmatically
    this.attractions$ = this.tripDetailService.getCollection('attractions');
  }

  onNavigate(addressLink: string) {
    if (addressLink) {
      window.open(addressLink);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AttractionModalComponent, {
      width: '600px',
      data: {
        type: 'add'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  removeAttraction(id: string) {
    this.tripDetailService.removeDocument('attractions', id);
  }

  editAttraction(attraction: Attraction) {
    const dialogRef = this.dialog.open(AttractionModalComponent, {
      width: '600px',
      data: {
        type: 'edit',
        attraction
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
