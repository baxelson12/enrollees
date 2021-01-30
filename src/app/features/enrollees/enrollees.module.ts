import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrolleesRoutingModule } from './enrollees-routing.module';
import { EnrolleesComponent } from './enrollees.component';
import { EnrolleeModule } from '../../core/components/enrollee/enrollee.module';

@NgModule({
  declarations: [EnrolleesComponent],
  imports: [CommonModule, EnrolleesRoutingModule, EnrolleeModule]
})
export class EnrolleesModule {}
