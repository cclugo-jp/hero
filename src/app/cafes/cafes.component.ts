import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent implements OnInit {

  constructor(private cafeService: CafeService) { }

  ngOnInit() {
  	this.getCafes();
  }

  cafes: Cafe[];

  selectedCafe: Cafe;
  onSelect(cafe: Cafe): void {
  	this.selectedCafe = cafe;
  }

  getCafes(): void {
  	this.cafeService.getCafes().subscribe(cafes => this.cafes = cafes);
  }

}
