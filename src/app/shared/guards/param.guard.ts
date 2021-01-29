import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as Selectors from '../../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class ParamGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store
      .select(Selectors.selectedEnrollee)
      .pipe(
        map((enrollee) =>
          enrollee ? true : this.router.parseUrl('/enrollees')
        )
      );
  }

  constructor(private store: Store, private router: Router) {}
}
