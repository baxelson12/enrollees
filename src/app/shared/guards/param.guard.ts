import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    // If the id exists in store, we can continue navigating
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
