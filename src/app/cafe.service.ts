import { Injectable } from '@angular/core';
import { Cafe } from './cafe';
import { CAFES } from './mock-cafes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  constructor(private messageService: MessageService) { }

  getCafes(): Observable<Cafe[]> {
  	this.messageService.add('cachifa: cafes encontrados');
  	return of (CAFES);
  }
  getCafe(id: number): Observable<Cafe> {
  	this.messageService.add(`cachifa: cafe encontrado id = ${id}`);
  	return of (CAFES.find(cafe => cafe.id === id));
  }
}
