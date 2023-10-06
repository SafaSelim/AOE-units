import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AgeFilter } from 'src/app/models/filters.model';
import { unitsAgeFiltered } from 'src/app/pages/unit-list/store/units.actions';
import { State } from 'src/app/pages/unit-list/store/units.reducer';


@Component({
  selector: 'app-filter-ages',
  templateUrl: './filter-ages.component.html',
  styleUrls: ['./filter-ages.component.scss']
})
export class FilterAgesComponent {
  unitAges: AgeFilter[] = ['All', 'Dark', 'Castle', 'Feudal', 'Imperial'];
  
  selectedAge: AgeFilter  = 'All';

  wololoAudio = new Audio();


  constructor(
    private store: Store<{units:State}>
  ) { }

  filterByAge(unitAge: AgeFilter) {
    this.selectedAge = unitAge;
    this.store.dispatch(unitsAgeFiltered({selectedAgeFilter: unitAge}))
  }
  
}
