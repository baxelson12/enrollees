import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrolleeComponent } from './enrollee.component';
import { BadCardModule } from '../../../shared/components/card/card.module';

@NgModule({
  declarations: [EnrolleeComponent],
  imports: [CommonModule, BadCardModule],
  exports: [EnrolleeComponent]
})
export class EnrolleeModule {}
