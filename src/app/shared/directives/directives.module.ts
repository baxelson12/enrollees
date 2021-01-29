import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlBindDirective } from './control-bind.directive';

@NgModule({
  declarations: [ControlBindDirective],
  imports: [CommonModule],
  exports: [ControlBindDirective]
})
export class BadDirectivesModule {}
