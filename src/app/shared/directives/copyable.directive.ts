import { Directive, HostListener, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarConfig } from '../constants/snack';

@Directive({
  selector: '[badCopyable]'
})
export class CopyableDirective {
  // Get copy value from parent
  @Input('badCopyable') value: string;

  // Watch for clicks
  @HostListener('click') onClick(): void {
    this.clippy.copy(this.value);
    this.snack.open('Copied', '', SnackBarConfig);
  }

  constructor(private clippy: Clipboard, private snack: MatSnackBar) {}
}
