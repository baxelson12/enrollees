import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlBindDirective } from './control-bind.directive';
import { CopyableDirective } from './copyable.directive';
import { ClipboardModule } from '@angular/cdk/clipboard';

const DIRECTIVES = [ControlBindDirective, CopyableDirective];

@NgModule({
  declarations: DIRECTIVES,
  imports: [CommonModule, ClipboardModule],
  exports: DIRECTIVES
})
export class BadDirectivesModule {}
