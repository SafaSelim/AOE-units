import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitListComponent } from './unit-list.component';

const routes: Routes = [
//   { path: 'unit-details/:id', component: UnitListComponent, data: { title: 'Units' } },
  { path: '', component: UnitListComponent, data: { title: 'Units' } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitListRoutingModule { }
