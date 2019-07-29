import { Injectable } from '@angular/core';
import { Cafe } from './cafe';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getCafes(): Observable<Cafe[]> {
  	return this.http.get<Cafe[]>(this.cafesUrl)
      .pipe(
        tap(_ => this.log('cafes encontraos')),
        catchError(this.handleError<Cafe[]>('getCafes',[]))
      );
  }
  getCafe(id: number): Observable<Cafe> {
  	const url = `${this.cafesUrl}/${id}`;
    return this.http.get<Cafe>(url)
      .pipe(
        tap(_ => this.log(`cafe encontrao id=${id}`)),
        catchError(this.handleError<Cafe>(`getCafe id=${id}`))
      );
  }

  /** log a CafeService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`cachifa: ${message}`);
  }

  private cafesUrl = 'api/cafes'; //url to web api

  updateCafe (cafe: Cafe): Observable<any> {
    return this.http.put(this.cafesUrl, cafe,this.httpOptions)
      .pipe(
        tap(_ => this.log(`cafe id=${cafe.id} fue actualizado`)),
        catchError(this.handleError<any>('updateCafe'))
      );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addCafe (cafe: Cafe): Observable<Cafe> {
    return this.http.post<Cafe>(this.cafesUrl, cafe, this.httpOptions)
      .pipe(
        tap((newCafe: Cafe) => this.log(`cafe agregado con id=${newCafe.id}`)),
        catchError(this.handleError<Cafe>('addCafe'))
      );
  }

  deleteCafe (cafe: Cafe | number): Observable<Cafe> {
  const id = typeof cafe === 'number' ? cafe : cafe.id;
  const url = `${this.cafesUrl}/${id}`;
  return this.http.delete<Cafe>(url, this.httpOptions)
    .pipe(
      tap(_ => this.log(`cafe borrado id=${id}`)),
      catchError(this.handleError<Cafe>('deleteCafe'))
    );
  }

 /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
