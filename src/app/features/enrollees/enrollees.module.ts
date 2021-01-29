import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrolleesRoutingModule } from './enrollees-routing.module';
import { EnrolleesComponent } from './enrollees.component';


@NgModule({
  declarations: [EnrolleesComponent],
  imports: [
    CommonModule,
    EnrolleesRoutingModule
  ]
})
export class EnrolleesModule { }
