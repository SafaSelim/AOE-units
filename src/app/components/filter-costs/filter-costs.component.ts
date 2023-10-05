import { Component } from '@angular/core';
import { CostFilter } from 'src/app/models/filters.model';


@Component({
  selector: 'app-filter-costs',
  templateUrl: './filter-costs.component.html',
  styleUrls: ['./filter-costs.component.scss']
})
export class FilterCostsComponent {
  unitCosts: CostFilter[] = ['Food', 'Wood', 'Gold'];
  selectedCosts: CostFilter[] = [];

  constructor() {}

  toggleFilters(cost: CostFilter) {
    let index = this.selectedCosts.indexOf(cost);
    
    if(index === -1) {
      this.selectedCosts.push(cost);
    } else {
      this.selectedCosts.splice(index, 1);
    }

    //TODO apply filter on selection change, remove the cost type from the filters
  }

  onRangeChange(event: any, costType: CostFilter) {
    console.log("event-->",event)
    console.log('value-->', event.target.value, costType)
    //TODO create a service to filter the units according to the selected range of the cost
  }

}
