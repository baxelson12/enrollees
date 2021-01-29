import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { BaseControlValueAccessor } from '../../abstractions/BaseControlValueAccessor';

interface State {
  locked: boolean;
}

const initial: State = {
  locked: true
};

@Component({
  selector: 'bad-lockable-input',
  templateUrl: './lockable-input.component.html',
  styleUrls: ['./lockable-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LockableInputComponent),
      multi: true
    },
    ComponentStore
  ]
})
export class LockableInputComponent extends BaseControlValueAccessor {
  state$: Observable<State> = this.store.select((s) => s);
  @Input('value') _value = '';
  @Input() set locked(locked: boolean) {
    this.store.patchState({ locked });
  }

  constructor(private store: ComponentStore<State>) {
    super();
    console.log('running');
    this.store.setState(initial);
  }
}
