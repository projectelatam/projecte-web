import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  // refactor to move all to its own service
  //generak service should be for more generall things
  public baseApiUrl = environment.apiUrl;

  //this.apiRoot

  constructor(private http: HttpClient) {
  }

  public getPackages(params = {}): Observable<any> {
    const p = "?" + Object.keys(params).map(key => key + '=' + params[key]).join('&');
    const url = `${this.baseApiUrl}/packages/${p}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getPackages')));
  }

  public getPackage(id): Observable<any> {
    const url = `${this.baseApiUrl}/packages/${id}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getPackage')));
  }

  public getRelatedPackages(): Observable<any> {
    const url = `${this.baseApiUrl}/relatedPackages`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getRelatedPackages')));
  }

  public getRelatedPackage(id): Observable<any> {
    const url = `${this.baseApiUrl}/relatedPackages/${id}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getRelatedPackage')));
  }

  public getReservations(): Observable<any> {
    const url = `${this.baseApiUrl}/reservations/`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getreservations')));
  }

  public getReservation(id): Observable<any> {
    const url = `${this.baseApiUrl}/reservations/${id}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getReservation')));
  }

  public getFoods(): Observable<any> {
    const url = `${this.baseApiUrl}/foods/`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getFoods')));
  }

  public getFood(id): Observable<any> {
    const url = `${this.baseApiUrl}/foods/${id}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getFood')));
  }

  public getMenus(): Observable<any> {
    const url = `${this.baseApiUrl}/Menus/`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getMenus')));
  }

  public getMenu(id): Observable<any> {
    const url = `${this.baseApiUrl}/Menus/${id}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getMenu')));
  }

  public getActivities(): Observable<any> {
    const url = `${this.baseApiUrl}/activities/`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getActivities')));
  }

  public getActivity(id): Observable<any> {
    const url = `${this.baseApiUrl}/activities/${id}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getActivity')));
  }

  public getAccommodations(): Observable<any> {
    const url = `${this.baseApiUrl}/accommodations/`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getAccommodations')));
  }

  public getAccommodation(id): Observable<any> {
    const url = `${this.baseApiUrl}/accommodations/${id}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getAccommodation')));
  }

  public getSliderImages(){
    const url = `${this.baseApiUrl}/sliders/`; //rename to slides
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>('getSliderImages')));
  }

  public setReservationTmp() {
    localStorage.setItem('reservation', '')
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
