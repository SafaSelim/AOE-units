import { Age } from "./units.model";

export type AgeFilter = Age | 'All';

export type CostFilterOptions = 'Food'| 'Wood' | 'Gold';

export type SelectedCostFilter = {
    selected: boolean;
    value: number;
  };
  
export type SelectedCostFilters = {
    Wood: SelectedCostFilter;
    Gold: SelectedCostFilter;
    Food: SelectedCostFilter;
  };
