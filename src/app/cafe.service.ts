import { Injectable } from '@angular/core';
import { Cafe } from './cafe';
import { CAFES } from './mock-cafes';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  constructor() { }

  getCafes(): Cafe[] {
  	return CAFES;
  }
}
