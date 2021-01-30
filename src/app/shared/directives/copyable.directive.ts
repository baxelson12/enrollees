import { Directive, HostListener, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Directive({
  selector: '[badCopyable]'
})
export class CopyableDirective {
  @Input('badCopyable') value: string;

  @HostListener('click') onClick() {
    this.clippy.copy(this.value);
  }

  constructor(private clippy: Clipboard) {}
}
