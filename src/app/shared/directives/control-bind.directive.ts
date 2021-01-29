import { Directive, Input } from '@angular/core';
import { FormControlDirective } from '@angular/forms';

@Directive({
  selector: '[badControlBind]'
})
export class ControlBindDirective {
  @Input() set badControlBind(val: any) {
    if (val) {
      this.fcd.control.setValue(val);
      this.fcd.control.markAsPristine();
    }
  }

  constructor(private fcd: FormControlDirective) {}
}
