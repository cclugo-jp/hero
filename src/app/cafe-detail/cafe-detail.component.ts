import { Component, OnInit, Input } from '@angular/core';
import { Cafe } from '../cafe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-detail',
  templateUrl: './cafe-detail.component.html',
  styleUrls: ['./cafe-detail.component.css']
})
export class CafeDetailComponent implements OnInit {

  constructor(
  	private route: ActivatedRoute,
  	private cafeService: CafeService,
  	private location: Location
  ) { }

  ngOnInit(): void {
  	this.getCafe();
  }

  getCafe(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.cafeService.getCafe(id).subscribe(cafe => this.cafe = cafe);
  }

  @Input() cafe: Cafe;

  goBack(): void {
  	this.location.back();
  }

}
