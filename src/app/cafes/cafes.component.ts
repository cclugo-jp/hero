import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CAFES } from '../mock-cafes';

@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cafe: Cafe = {
  	id: 1,
  	name: 'marron'
  }

  cafes = CAFES;

  selectedCafe: Cafe;
  onSelect(cafe: Cafe): void {
  	this.selectedCafe = cafe;
  }

}
