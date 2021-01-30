import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrolleeComponent } from './enrollee.component';
import { BadCardModule } from '../../../shared/components/card/card.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BadButtonModule } from '../../../shared/components/button/button.module';
import { BadLockableInputModule } from '../../../shared/components/lockable-input/lockable-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BadDirectivesModule } from '../../../shared/directives/directives.module';

@NgModule({
  declarations: [EnrolleeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BadCardModule,
    BadButtonModule,
    BadLockableInputModule,
    AngularSvgIconModule,
    BadDirectivesModule
  ],
  exports: [EnrolleeComponent]
})
export class EnrolleeModule {}
