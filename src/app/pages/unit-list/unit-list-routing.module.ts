import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitListComponent } from './unit-list.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';

const routes: Routes = [
    { path: '', component: UnitListComponent, data: { title: 'Units' }, },
    { path: 'unit-details/:id', component: UnitDetailsComponent, data: { title: 'Unit Details' }, }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitListRoutingModule { }
