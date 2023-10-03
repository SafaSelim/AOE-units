import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitListComponent } from './unit-list.component';
import { UnitListRoutingModule } from './unit-list-routing.module';



@NgModule({
  declarations: [
    UnitListComponent,
  ],
  imports: [
    CommonModule,
    UnitListRoutingModule,
  ],
  exports: [UnitListComponent]
})
export class UnitListModule { }
