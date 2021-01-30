import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BadToolbarModule } from '../../../shared/components/toolbar/toolbar.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BadInputModule } from '../../../shared/components/input/input.module';
import { BadButtonModule } from '../../../shared/components/button/button.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BadToolbarModule,
    BadInputModule,
    BadButtonModule,
    AngularSvgIconModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule {}
