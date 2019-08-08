import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ModelsService {
  public baseApiUrl = environment.apiUrl;
  public modelUrl = 'models' // refactor to entity
  //this.apiRoot

  constructor(private http: HttpClient) {
  }

  getModels(): Observable<any> {
    // const url = `${this.baseApiUrl}/${this.modelUrl}/secondary-section`;
    const url = `${this.baseApiUrl}/${this.modelUrl}/`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getModels')));
  }
  
  public getModel(id): Observable<any> {
    const url = `${this.baseApiUrl}/${this.modelUrl}/${id}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getModel')));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
