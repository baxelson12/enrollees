import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Enrollee } from './core/interfaces/enrollee';

import * as Selectors from './store/selectors';
import * as Actions from './store/actions';
import { FormBuilder } from '@angular/forms';

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

  form = this.fb.group({
    test: this.fb.control('')
  });

  constructor(private store: Store, private fb: FormBuilder) {
    this.selected$.subscribe(console.log);
  }
}
