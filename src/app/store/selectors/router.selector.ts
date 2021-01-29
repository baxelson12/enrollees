import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as FromReducer from '../reducers/router.reducer';

// State slice
export const selectRouter = createFeatureSelector<FromReducer.reducer>(
  'router'
);

// Just gimme the params
export const selectParams = createSelector(
  selectRouter,
  (state) => state.state.params
);
