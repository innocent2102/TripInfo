import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  sampleList = [
    {date: new Date('2019.03.14'), description: ['Lot z Warszawy do Bangkoku ', '16:05 -> 18:35 (przesiadka – Kijów) -> 19:25 wylot ']},
    {date: new Date('2019.03.15'), description: ['Przylot do Bangkoku 9:35 (Suvarnabhumi Airport (BKK) ) ', 'Zakup Internetu']},
    {date: new Date('2019.03.16'), description: ['Golden Budda Temple ']},
    {date: new Date('2019.03.17'), description: ['Wat Hua Lamphong ']},
    {date: new Date('2019.03.18'), description: ['Bangkok -> Kanchanaburi']},
    {date: new Date('2019.03.19'), description: ['Dojazd do Kanchanaburi, następnie Bangkok ', 'Wodospady czynne 8:00-16:30 ']},
  ];

  constructor( ) { }

  ngOnInit() {

  }

}
