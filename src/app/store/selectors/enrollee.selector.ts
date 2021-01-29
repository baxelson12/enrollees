import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as FromReducer from '../reducers/enrollee.reducer';

export const selectEnrolleeState = createFeatureSelector<FromReducer.State>(
  'enrollees'
);

// All Enrollees array
export const selectAllEnrollees = createSelector(
  selectEnrolleeState,
  FromReducer.selectAllEnrollees
);

// All Enrollees count
export const selectEnrolleeTotal = createSelector(
  selectEnrolleeState,
  FromReducer.selectEnrolleeTotal
);

// All Enrollee entities
export const selectEnrolleeEntities = createSelector(
  selectEnrolleeState,
  FromReducer.selectEnrolleeEntities
);

// Selected Enrollee
export const selectedEnrollee = createSelector(
  selectEnrolleeState,
  (state: FromReducer.State) => state.entities[state.selectedEnrolleeId]
);
