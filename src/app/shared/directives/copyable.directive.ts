import { Directive, HostListener, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Directive({
  selector: '[badCopyable]'
})
export class CopyableDirective {
  // Get copy value from parent
  @Input('badCopyable') value: string;

  // Watch for clicks
  @HostListener('click') onClick() {
    this.clippy.copy(this.value);
  }

  constructor(private clippy: Clipboard) {}
}
