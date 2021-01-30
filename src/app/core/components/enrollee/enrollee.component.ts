import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { LockableInputComponent } from '../../../shared/components/lockable-input/lockable-input.component';
import { Enrollee } from '../../interfaces/enrollee';

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
export class EnrolleeComponent {
  // To allow focusing
  @ViewChild('input') input: LockableInputComponent;
  // Get state
  state$: Observable<State> = this.store.select((s) => s);
  // Enrollee to be passed down from parent
  @Input() set enrollee(enrollee: Enrollee) {
    this.store.patchState({ enrollee });
  }
  // For the input
  name = new FormControl('', [Validators.required]);
  constructor(private store: ComponentStore<State>) {
    this.store.setState(initial);
  }
  // Allow editing
  unlock(): void {
    this.store.patchState({ locked: false });
    this.input.focus();
  }
  // Lock editing, notify parent
  save(old: Enrollee): void {
    const enrollee = { ...old, name: this.name.value };
    this.store.patchState({ locked: true, enrollee });
  }
  // Change active state
  toggleActive(old: Enrollee) {
    const enrollee: Enrollee = { ...old, active: !old.active };
    this.store.patchState({ enrollee });
  }
}
