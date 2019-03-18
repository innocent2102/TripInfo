import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AttractionService } from './shared/attraction.service';
import { Observable } from 'rxjs';
import { Attraction } from './shared/attraction';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../../../shared/services/auth.service';
import { TripService } from '../../../shared/trip.service';
import { TripBaseComponent } from '../../trip.base';
import { MatDialog } from '@angular/material';
import { AddAttractionComponent } from './add-attraction/add-attraction.component';


@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AttractionsComponent extends TripBaseComponent implements OnInit {

  attractions$: Observable<Attraction[]>;

  // TODO: Temporary
  animal: string;
  name: string;

  constructor(
    af: AngularFirestore,
    authService: AuthService,
    tripService: TripService,
    private attractionService: AttractionService,
    public dialog: MatDialog) {
    super(af, authService, tripService);
  }

  ngOnInit() {
    this.attractions$ = this.attractionService.getAttractions();
  }

  onNavigate(addressLink: string) {
    if (addressLink) {
      window.open(addressLink);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddAttractionComponent, {
      width: '600px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  hasAddressLink(addressLink: string): boolean {
    return Boolean(addressLink);
  }
}
