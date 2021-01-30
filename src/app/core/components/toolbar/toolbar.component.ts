import { Component, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { InputComponent } from '../../../shared/components/input/input.component';

import * as Actions from '../../../store/actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnDestroy {
  // For focusing
  @ViewChild('input') input: InputComponent;
  // Watch for slashes
  @HostListener('document:keydown', ['$event'])
  handleKeypress(e: KeyboardEvent) {
    if (e.code === 'Slash' && e.composedPath().length < 6) {
      e.preventDefault();
      this.input.focus();
    }
  }
  // For cleanup
  subscription: Subscription;
  // Search form
  form = this.fb.group({
    query: this.fb.control('')
  });

  constructor(private fb: FormBuilder, private store: Store) {
    this.subscription = this.form.valueChanges.subscribe(({ query }) =>
      this.store.dispatch(Actions.queryBy({ query }))
    );
  }

  // Cleanup
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
