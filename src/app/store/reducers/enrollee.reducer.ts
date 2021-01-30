import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Enrollee } from '../../core/interfaces/enrollee';
import { SortBy } from '../../shared/types/sortBy';
import { SortAscending } from '../../shared/utils/sort';

import * as EnrolleeActions from '../actions/enrollee.actions';

// State model
export interface State extends EntityState<Enrollee> {
  selectedEnrolleeId: string | null;
  loading: boolean;
  loaded: boolean;
  sortBy: SortBy;
  query: string;
}

// Get selected enrollee ID
export function selectEnrolleeId(e: Enrollee): string {
  return e.id;
}

// Default sort by
export function sortNameAsc(a: Enrollee, b: Enrollee): number {
  return SortAscending(a.name.split(' ')[1], b.name.split(' ')[1]);
}

// Generate adapter
export const adapter: EntityAdapter<Enrollee> = createEntityAdapter<Enrollee>({
  selectId: selectEnrolleeId,
  sortComparer: sortNameAsc
});

// Initial state
export const initialState: State = adapter.getInitialState({
  selectedEnrolleeId: null,
  sortBy: 'nameAsc',
  loading: true,
  loaded: false,
  query: ''
});

// Actual reducer
const enrolleeReducer = createReducer(
  initialState,
  // Successful load
  on(EnrolleeActions.loadEnrolleesSuccess, (state, { enrollees }) => {
    const updatedState = { ...state, loaded: true, loading: false };
    return adapter.setAll(enrollees, updatedState);
  }),
  // Select enrollee
  on(EnrolleeActions.selectEnrollee, (state, { selectedEnrolleeId }) => ({
    ...state,
    selectedEnrolleeId
  })),
  // Deselect enrollee
  on(EnrolleeActions.deselectEnrollee, (state) => ({
    ...state,
    selectedEnrolleeId: ''
  })),
  // Patch enrollee
  on(EnrolleeActions.patchEnrolleeSuccess, (state, { enrollee }) => {
    return adapter.updateOne(enrollee, state);
  }),
  // Change sort
  on(EnrolleeActions.sortBy, (state, { sortBy }) => ({ ...state, sortBy })),
  // Change query
  on(EnrolleeActions.queryBy, (state, { query }) => ({ ...state, query }))
);

export function reducer(state: State | undefined, action: Action): State {
  return enrolleeReducer(state, action);
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();
// Selector helpers
export const selectEnrolleeIds = selectIds;
export const selectEnrolleeEntities = selectEntities;
export const selectAllEnrollees = selectAll;
export const selectEnrolleeTotal = selectTotal;
