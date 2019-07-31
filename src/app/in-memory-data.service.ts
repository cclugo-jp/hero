import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cafe } from './cafe';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
  	const cafes = [
	  	{ id: 1, name: 'marron'},
		{ id: 2, name: 'guayoyo'},
		{ id: 3, name: 'tetero'},
		{ id: 4, name: 'conleche'},
		{ id: 5, name: 'cremosito'},
		{ id: 6, name: 'negro'}
	];
	return {cafes};
  }

  // Overrides the genId method to ensure that a cafe always has an id.
  // If the cafes array is empty,
  // the method below returns the initial number (1).
  // if the cafes array is not empty, the method below returns the highest
  // cafe id + 1.
  genId(cafes: Cafe[]): number {
    return cafes.length > 0 ? Math.max(...cafes.map(cafe => cafe.id)) + 1 : 1;
  }
}
