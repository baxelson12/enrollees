import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT
} from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';
import { DataService } from '../../core/services/data.service';

import * as EnrolleeActions from '../actions/enrollee.actions';

@Injectable()
export class EnrolleeEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      concatMap(() =>
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

  constructor(private actions$: Actions, private ds: DataService) {}
}
