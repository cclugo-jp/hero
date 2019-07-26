import { Injectable } from '@angular/core';
import { Cafe } from './cafe';
import { CAFES } from './mock-cafes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  constructor() { }

  getCafes(): Observable<cafe[]> {
  	return of (CAFES);
  }
}
