import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LockableInputComponent } from './lockable-input.component';

@NgModule({
  declarations: [LockableInputComponent],
  imports: [CommonModule],
  exports: [LockableInputComponent]
})
export class BadLockableInputModule {}
