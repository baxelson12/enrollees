import { ActionReducerMap } from '@ngrx/store';
import * as EnrolleeReducer from './enrollee.reducer';

export interface AppState {
  enrollees: EnrolleeReducer.State;
}

export const reducers: ActionReducerMap<AppState> = {
  enrollees: EnrolleeReducer.reducer
};
