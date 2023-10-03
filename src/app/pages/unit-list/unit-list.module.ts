import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitListComponent } from './unit-list.component';



@NgModule({
  declarations: [
    UnitListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [UnitListComponent]
})
export class UnitListModule { }
