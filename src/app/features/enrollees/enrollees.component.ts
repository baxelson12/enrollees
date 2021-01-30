import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Enrollee } from '../../core/interfaces/enrollee';

import * as Selectors from '../../store/selectors';

@Component({
  selector: 'app-enrollees',
  templateUrl: './enrollees.component.html',
  styleUrls: ['./enrollees.component.scss']
})
export class EnrolleesComponent {
  enrollees$: Observable<Enrollee[]> = this.store.select(
    Selectors.filterEnrollees
  );

  constructor(private store: Store) {}
}
