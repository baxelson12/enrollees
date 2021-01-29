import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'enrollees', pathMatch: 'full' },
  {
    path: 'enrollees',
    loadChildren: () =>
      import('./features/enrollees/enrollees.module').then(
        (m) => m.EnrolleesModule
      )
  },
  { path: '**', redirectTo: 'enrollees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
