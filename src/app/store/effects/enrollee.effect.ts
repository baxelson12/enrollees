import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT
} from '@ngrx/effects';
import { map, concatMapTo } from 'rxjs/operators';
import { DataService } from '../../core/services/data.service';

import * as FromRouter from '@ngrx/router-store';
import * as EnrolleeActions from '../actions/enrollee.actions';
import * as Selectors from '../selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class EnrolleeEffects {
  // On initial app load or a dispatched load_enrollees
  // Get all
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT || EnrolleeActions.LOAD_ENROLLEES),
      concatMapTo(
        this.ds
          .all()
          .pipe(
            map((enrollees) =>
              EnrolleeActions.loadEnrolleesSuccess({ enrollees })
            )
          )
      )
    )
  );

  // Get the user id from url if navigating
  getNavigatedEnrollee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FromRouter.ROUTER_NAVIGATION),
      concatMapTo(
        this.store.select(Selectors.selectParams).pipe(
          // User concurrency could be added with a call to server and a concatmap
          map((params) => {
            if (params['id']) {
              return EnrolleeActions.selectEnrollee({
                selectedEnrolleeId: params['id']
              });
            } else {
              return EnrolleeActions.deselectEnrollee();
            }
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private ds: DataService
  ) {}
}
