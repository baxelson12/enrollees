import { Directive, Input } from '@angular/core';
import { FormControlDirective } from '@angular/forms';

@Directive({
  selector: '[badControlBind]'
})
export class ControlBindDirective {
  // Get the value to copy from parent
  @Input() set badControlBind(val: any) {
    if (val) {
      // Set the control value
      this.fcd.control.setValue(val);
      // We don't want a dirty state
      this.fcd.control.markAsPristine();
    }
  }

  constructor(private fcd: FormControlDirective) {}
}
