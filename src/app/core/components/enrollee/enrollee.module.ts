import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrolleeComponent } from './enrollee.component';

@NgModule({
  declarations: [EnrolleeComponent],
  imports: [CommonModule],
  exports: [EnrolleeComponent]
})
export class EnrolleeModule {}
