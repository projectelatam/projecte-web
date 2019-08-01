import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { AuthService } from 'ngx-auth';

import { TokenStorage } from './token-storage.service';

interface AccessData {
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class AuthenticationService implements AuthService {
  public headers;
  public token = '';

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorage
  ) {
    this.getAccessToken()
      .subscribe(token => {
        console.log('asscess token', token);
        this.token = token;
      });
  }

  /**
   * Check, if user already authorized.
   * @description Should return Observable with true or false values
   * @returns {Observable<boolean>}
   * @memberOf AuthService
   */
  public isAuthorized(): Observable<boolean> {
    return this.tokenStorage
      .getAccessToken()
      .pipe(map(token => !!token));
  }

  /**
   * Get access token
   * @description Should return access token in Observable from e.g.
   * localStorage
   * @returns {Observable<string>}
   */
  public getAccessToken(): Observable<string> {
    return this.tokenStorage.getAccessToken();
  }

  /**
   * Function, that should perform refresh token verifyTokenRequest
   * @description Should be successfully completed so interceptor
   * can execute pending requests or retry original one
   * @returns {Observable<any>}
   */
  public refreshToken(): Observable<AccessData> {
    this.login();
    return of({} as AccessData);
    return this.tokenStorage
      .getRefreshToken()
      .pipe(
        switchMap((refreshToken: string) =>
          this.http.post(`http://localhost:1337/auth/refresh`, { refreshToken })
        ),
        tap((tokens: AccessData) => this.saveAccessData(tokens)),
        catchError((err) => {
          this.logout();

          return Observable.throw(err);
        })
      );
  }

  /**
   * Function, checks response of failed request to determine,
   * whether token be refreshed or not.
   * @description Essentialy checks status
   * @param {Response} response
   * @returns {boolean}
   */
  public refreshShouldHappen(response: HttpErrorResponse): boolean {
    return response.status === 401
  }

  /**
   * Verify that outgoing request is refresh-token,
   * so interceptor won't intercept this request
   * @param {string} url
   * @returns {boolean}
   */
  public verifyTokenRequest(url: string): boolean {
    return url.endsWith('http://localhost:1337/auth/refresh');
  }

  /**
   * EXTRA AUTH METHODS
   */

  public login(): Observable<any> {
    return this.http.post(`http://localhost:1337/auth/local`, { identifier: 'client1', password: 'projectelatam' })
      .pipe(tap((tokens) => this.saveAccessData(tokens)));
  }

  /**
   * Logout
   */
  public logout(): void {
    this.tokenStorage.clear();
    location.reload(true);
  }

  /**
   * Save access data in the storage
   *
   * @private
   * @param {AccessData} data
   */
  private saveAccessData(accessToken) {
    console.log(' asscess token save accessdata', accessToken);
    
    const accesTokenS = JSON.stringify(accessToken.jwt);
    
    this.tokenStorage
      .setAccessToken(accesTokenS.substring(1, accesTokenS.length-1))
      .setRefreshToken(accesTokenS.substring(1, accesTokenS.length-1));
  }

  get(url: string): Observable<any> {
    return this.http.get<any>(url, { headers: this.getHeaderss() }).pipe(
      catchError(err => {
        if (err.status === 401 || err.state === 403) {
          // this.refreshToken();
        }
        return throwError(err);
      })
    );
  }


  private getHeaderss() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    return this.appendAuthHeader(headers);
  }

  private appendAuthHeader(headers: HttpHeaders) {
    const token = this.getAccessToken();

    if (this.token === '') {
      return headers;
    }

    console.log('appendAuthHeader',this.token);
    const tokenValue = 'Bearer ' + this.token;
    return headers.set('Authorization', tokenValue);
  }

}