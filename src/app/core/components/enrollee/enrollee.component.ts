import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ComponentStore } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LockableInputComponent } from '../../../shared/components/lockable-input/lockable-input.component';
import { Enrollee } from '../../interfaces/enrollee';

import * as Actions from '../../../store/actions';
import { map, take } from 'rxjs/operators';

interface State {
  enrollee: Enrollee;
  locked: boolean;
}

const initial: State = {
  enrollee: null,
  locked: true
};

@Component({
  selector: 'app-enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.scss'],
  providers: [ComponentStore]
})
export class EnrolleeComponent implements AfterViewInit {
  // To allow focusing
  @ViewChild('input') input: LockableInputComponent;
  // Get state
  state$: Observable<State> = this.cs.select((s) => s);
  // Enrollee to be passed down from parent
  @Input() set enrollee(enrollee: Enrollee) {
    this.cs.patchState({ enrollee });
  }
  @Input() set locked(locked: boolean) {
    this.cs.patchState({ locked });
  }
  // For the input
  name = new FormControl('', [Validators.required]);
  constructor(private cs: ComponentStore<State>, private store: Store) {
    this.cs.setState(initial);
  }
  // Focus the active input
  ngAfterViewInit(): void {
    this.state$
      .pipe(
        take(5),
        map((s) => s.locked)
      )
      .subscribe((locked) => {
        if (!locked) {
          this.input.focus();
        }
      });
  }

  // Allow editing
  unlock(): void {
    this.cs.patchState({ locked: false });
    this.input.focus();
  }
  // Lock editing, notify parent
  save(old: Enrollee): void {
    const enrollee: Enrollee = { ...old, name: this.name.value };
    this.store.dispatch(Actions.patchEnrollee({ enrollee }));
    this.store.dispatch(Actions.deselectEnrollee());
    this.cs.patchState({ locked: true });
  }
  // Change active state
  toggleActive(old: Enrollee): void {
    const enrollee: Enrollee = { ...old, active: !old.active };
    this.cs.patchState({ enrollee });
  }
}
