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

  getCafes(): void {
  	this.cafeService.getCafes().subscribe(cafes => this.cafes = cafes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.cafeService.addCafe({ name} as Cafe)
      .subscribe(cafe => { this.cafes.push(cafe); });
  }

  delete(cafe: Cafe): void {
    this.cafes = this.cafes.filter(h => h !== cafe);
    this.cafeService.deleteCafe(cafe).subscribe();
  }

}
