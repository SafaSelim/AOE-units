import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitListComponent } from './unit-list.component';
import { UnitListRoutingModule } from './unit-list-routing.module';
import { UnitDetailsComponent } from './unit-details/unit-details.component';



@NgModule({
  declarations: [
    UnitListComponent,
    UnitDetailsComponent,
  ],
  imports: [
    CommonModule,
    UnitListRoutingModule,
  ],
  exports: [
    UnitListComponent,
  ]
})
export class UnitListModule { }
