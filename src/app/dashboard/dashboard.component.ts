import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private cafeService: CafeService) { }

  ngOnInit() {
  	this.getCafes();
  }

  cafes: Cafe[] = [];

  getCafes(): void {
  	this.cafeService.getCafes().subscribe(cafes => this.cafes = cafes.slice(1, 5));
  }

}
