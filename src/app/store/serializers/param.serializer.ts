import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

import * as RouterReducer from '../reducers/router.reducer';

export class ParamSerializer
  implements RouterStateSerializer<RouterReducer.State> {
  serialize(routerState: RouterStateSnapshot): RouterReducer.State {
    // Iterate through tree
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    // Full url
    const { url } = routerState;
    // Parameters
    const { params } = route;

    return { url, params };
  }
}
