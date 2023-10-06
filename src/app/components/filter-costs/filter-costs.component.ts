import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CostFilterOptions, SelectedCostFilters } from 'src/app/models/filters.model';
import { unitsCostsFiltered } from 'src/app/pages/unit-list/store/units.actions';
import { State } from 'src/app/pages/unit-list/store/units.reducer';


@Component({
  selector: 'app-filter-costs',
  templateUrl: './filter-costs.component.html',
  styleUrls: ['./filter-costs.component.scss']
})
export class FilterCostsComponent {
  costFilterOptions: CostFilterOptions[] = ['Food', 'Wood', 'Gold'];
  
  selectedCostFilters: SelectedCostFilters = {
    Food: { selected: false, value: 0 },
    Wood: { selected: false, value: 0 },
    Gold: { selected: false, value: 0 }
  };


  constructor(
    private store: Store<{units:State}>
  ) {}

  toggleFilters(cost: CostFilterOptions) {
    const updatedFilters = { ...this.selectedCostFilters };

    updatedFilters[cost] = { ...updatedFilters[cost], selected: !updatedFilters[cost].selected };

    this.selectedCostFilters =  { ...updatedFilters};

    if(this.selectedCostFilters[cost].selected === false) {
      this.filterUnits();
    }
  }

  onRangeChange(event: any, costType: CostFilterOptions) {
    const updatedFilters = { ...this.selectedCostFilters };

    updatedFilters[costType] = { ...updatedFilters[costType], value: Number.parseInt(event.target.value)};

    this.selectedCostFilters =  { ...updatedFilters};
    this.filterUnits();
  }

  filterUnits() {
    this.store.dispatch(unitsCostsFiltered({ selectedCostsFilters: this.selectedCostFilters }));
  }

}
