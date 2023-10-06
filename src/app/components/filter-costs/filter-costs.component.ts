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
  }

  constructor(
    private store: Store<{units:State}>
  ) {}

  toggleFilters(cost: CostFilterOptions) {
    console.log('this.selected-->',this.selectedCostFilters);
    const updatedFilters = { ...this.selectedCostFilters };
    updatedFilters[cost].selected = !updatedFilters[cost].selected;
    console.log('this.selected-->',this.selectedCostFilters);
    if(this.selectedCostFilters[cost].selected === false) {
      this.filterUnits(cost, -1);
    }
  }

  onRangeChange(event: any, costType: CostFilterOptions) {
    console.log("event-->",event)
    console.log('value-->', event.target.value, costType)
    //TODO create a service to filter the units according to the selected range of the cost

    this.filterUnits(costType, Number.parseInt(event.target.value));
  }

  filterUnits(costType: CostFilterOptions, value: number) {
    let updatedFilters: SelectedCostFilters = {
      Food: { selected: false, value: 0 },
      Wood: { selected: false, value: 0 },
      Gold: { selected: false, value: 0 }
    };

    updatedFilters[costType].value = value;
    updatedFilters[costType].selected = this.selectedCostFilters[costType].selected;
    console.log('this.selected value changed-->', updatedFilters);
    console.log("selectedCostFilters",this.selectedCostFilters, updatedFilters)
    this.store.dispatch(unitsCostsFiltered({ selectedCostsFilters: updatedFilters }));
  }

}
