import { Component, OnInit } from '@angular/core';
import { AttractionService } from './shared/attraction.service';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss']
})
export class AttractionsComponent implements OnInit {

  attractions$: any;

  constructor(private attractionService: AttractionService) { }

  ngOnInit() {
    this.attractions$ = this.attractionService.getAttractions();
  }

}
