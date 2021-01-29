import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { BaseControlValueAccessor } from '../../abstractions/BaseControlValueAccessor';
import { InputComponent } from '../input/input.component';

interface State {
  locked: boolean;
}

const initial: State = {
  locked: true
};

@Component({
  selector: 'app-lockable-input',
  templateUrl: './lockable-input.component.html',
  styleUrls: ['./lockable-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
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
    this.store.setState(initial);
  }
}
