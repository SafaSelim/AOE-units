import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitListComponent } from './unit-list.component';
import { UnitListRoutingModule } from './unit-list-routing.module';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    UnitListComponent,
    UnitDetailsComponent,
  ],
  imports: [
    CommonModule,
    UnitListRoutingModule,
    ComponentsModule,
  ],
  exports: [
    UnitListComponent,
  ]
})
export class UnitListModule { }
