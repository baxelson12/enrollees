import { Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

export interface State {
  url: string;
  params: Params;
}

export type reducer = RouterReducerState<State>;
