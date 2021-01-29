import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Enrollee } from './core/interfaces/enrollee';

import * as Selectors from './store/selectors';
import * as Actions from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  enrollees$: Observable<Enrollee[]> = this.store.select(
    Selectors.selectAllEnrollees
  );
  selected$: Observable<Enrollee> = this.store.select(
    Selectors.selectedEnrollee
  );

  constructor(private store: Store) {
    this.store.dispatch(
      Actions.selectEnrollee({
        selectedEnrolleeId: '36653835-fbe0-4c42-a93c-3e561823934f'
      })
    );
    this.selected$.subscribe(console.log);
  }
}
