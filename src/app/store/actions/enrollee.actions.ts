import { createAction, props } from '@ngrx/store';
import { Enrollee } from '../../core/interfaces/enrollee';

// Get from DB
export const LOAD_ENROLLEES = '[Enrollees] Load enrollees.';
export const LOAD_ENROLLEES_FAIL = '[Enrollees] Load enrollees failed.';
export const LOAD_ENROLLEES_SUCCESS = '[Enrollees] Load enrollees success.';

export const loadEnrollees = createAction(LOAD_ENROLLEES);
export const loadEnrolleesFail = createAction(LOAD_ENROLLEES_FAIL);
export const loadEnrolleesSuccess = createAction(
  LOAD_ENROLLEES_SUCCESS,
  props<{ enrollees: Enrollee[] }>()
);

// Select/deselect product in UI
export const SELECT_ENROLLEE = '[Enrollees] Select enrollee.';
export const DESELECT_ENROLLEE = '[Enrollees] Deselect enrollee.';

export const selectEnrollee = createAction(
  SELECT_ENROLLEE,
  props<{ selectedEnrolleeId: string }>()
);
export const deselectEnrollee = createAction(DESELECT_ENROLLEE);

// Change sort
export const SORT_BY = '[Enrollees] Change sort.';
export const sortBy = createAction(SORT_BY, props<{ sortBy: any }>());

// Query change
export const QUERY_BY = '[Enrollees] Change query.';
export const queryBy = createAction(QUERY_BY, props<{ query: string }>());
