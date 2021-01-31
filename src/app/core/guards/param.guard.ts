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
import { catchError, map, switchMap } from 'rxjs/operators';
import * as Selectors from '../../store/selectors';
import { DataService } from '../services/data.service';

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
    // If the id exists, we can continue navigating
    return this.store.select(Selectors.selectedEnrollee).pipe(
      switchMap((enrollee) => this.ds.one(enrollee.id)),
      map((enrollee) => (enrollee ? true : this.router.parseUrl('/enrollees'))),
      catchError((e) => of(this.router.parseUrl('/enrollees')))
    );
  }

  constructor(
    private ds: DataService,
    private store: Store,
    private router: Router
  ) {}
}
