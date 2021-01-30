import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Enrollee } from '../../core/interfaces/enrollee';
import { SortAscending, SortDescending } from '../../shared/utils/sort';
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

// Filter by query
export const filterEnrollees = createSelector(
  selectAllEnrollees,
  selectEnrolleeState,
  (arr: Enrollee[], state: FromReducer.State) =>
    arr.filter((v) => v.name.toLowerCase().includes(state.query.toLowerCase()))
);

// Sorted array
export const selectSortedEnrollees = createSelector(
  filterEnrollees,
  selectEnrolleeState,
  (array, state) => {
    switch (state.sortBy) {
      case 'nameAsc': {
        return array
          .slice()
          .sort((a, b) =>
            SortAscending(a.name.split(' ')[1], b.name.split(' ')[1])
          );
      }
      case 'nameDesc': {
        return array
          .slice()
          .sort((a, b) =>
            SortDescending(a.name.split(' ')[1], b.name.split(' ')[1])
          );
      }
    }
  }
);
