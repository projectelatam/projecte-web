import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
@Injectable({
  providedIn: 'root',
})
export class HelperServiceService {
  
  
  public isAuthorized = false

  constructor(public auth: AuthenticationService) { 
    this.isAuthorizedd();
  }


  private isAuthorizedd(){
    this.auth.isAuthorized().subscribe(a => {
      this.isAuthorized = a;
    });
  }
}
