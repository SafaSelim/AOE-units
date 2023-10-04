import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterAgesComponent } from './filter-ages/filter-ages.component';
import { FilterCostsComponent } from './filter-costs/filter-costs.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FilterAgesComponent,
    FilterCostsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    FilterAgesComponent,
    FilterCostsComponent,
  ]
})
export class ComponentsModule { }
