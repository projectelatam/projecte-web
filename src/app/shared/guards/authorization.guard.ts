import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service'

@Injectable()
export class AuthorizationGuard implements CanActivate, CanLoad {
  constructor(
    private authUserService: AuthenticationService,
    private router: Router
  ) { }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkUser(state.url);
  }

  public canLoad(state: Route): Observable<boolean> {
    return this.checkUser(`/${state.path}`);
  }

  private checkUser(url: string): Observable<boolean> {
    return this.authUserService.isAuthorized().pipe(
      map((isAuthorized: boolean) => {
        if (!isAuthorized) {
          this.router.navigateByUrl('/');
          // location.reload(true);
          // this.authUserService.saveRedirect(url);
          // this.authUserService.login();
        }
        return isAuthorized;
      }),
      take(1)
    );
  }
}
