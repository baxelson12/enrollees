import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParamGuard } from '../../shared/guards/param.guard';
import { EnrolleesComponent } from './enrollees.component';

const routes: Routes = [
  { path: '', component: EnrolleesComponent },
  { path: ':id', component: EnrolleesComponent, canActivate: [ParamGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrolleesRoutingModule {}
