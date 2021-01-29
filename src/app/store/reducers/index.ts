import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import * as EnrolleeReducer from './enrollee.reducer';
import * as RouterReducer from './router.reducer';
export interface AppState {
  enrollees: EnrolleeReducer.State;
  router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> = {
  enrollees: EnrolleeReducer.reducer,
  router: routerReducer
};
