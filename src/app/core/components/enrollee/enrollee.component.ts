import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, Subscription } from 'rxjs';
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
export class EnrolleeComponent implements OnDestroy {
  @ViewChild('input') input: LockableInputComponent;

  state$: Observable<State> = this.store.select((s) => s);
  // For cleanup
  subscription: Subscription;
  @Input() set enrollee(enrollee: Enrollee) {
    this.store.patchState({ enrollee });
  }
  name = new FormControl('', [Validators.required]);
  constructor(private store: ComponentStore<State>) {
    this.store.setState(initial);
  }

  unlock(): void {
    this.store.patchState({ locked: false });
    this.input.focus();
  }

  save(old: Enrollee): void {
    const enrollee = { ...old, name: this.name.value };
    this.store.patchState({ locked: true, enrollee });
  }

  toggleActive(old: Enrollee) {
    const enrollee: Enrollee = { ...old, active: !old.active };
    this.store.patchState({ enrollee });
  }

  // Cleanup
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
