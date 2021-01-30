import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Enrollee } from './core/interfaces/enrollee';

import * as Selectors from './store/selectors';

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

  constructor(private store: Store) {}
}
