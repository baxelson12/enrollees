import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild
} from '@angular/core';
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
  // For focusing
  @ViewChild('input') input: ElementRef;
  // Select state
  state$: Observable<State> = this.store.select((s) => s);
  // Pertaining to angular form control
  @Input('value') _value = '';
  @Input('input-type') inputType = 'text';
  @Input('aria-label') ariaLabel: string;
  // Get locked state from parent
  @Input() set locked(locked: boolean) {
    this.store.patchState({ locked });
  }

  constructor(private store: ComponentStore<State>) {
    super();
    this.store.setState(initial);
  }

  // Focus the input
  focus(): void {
    const input = this.input.nativeElement as HTMLInputElement;
    input.focus();
  }
}
