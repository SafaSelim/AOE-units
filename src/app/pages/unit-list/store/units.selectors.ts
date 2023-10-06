import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromUnits from './units.reducer';
import { CostFilterOptions } from 'src/app/models/filters.model';
import { Unit } from 'src/app/models/units.model';

export const selectUnitsState = createFeatureSelector<fromUnits.State>('units');

export const selectSelectedAgeFilter = createSelector(
  selectUnitsState,
  (state) => state.selectedAgeFilter
);

export const selectSelectedCostFilters = createSelector(
  selectUnitsState,
  (state) => state.selectedCostsFilters
);

export const selectFilteredUnits = createSelector(
  selectUnitsState,
  selectSelectedAgeFilter,
  selectSelectedCostFilters,
  (state, selectedAgeFilter, selectedCostsFilters) => {

    let filteredUnits = state.allUnits;

    // Filter Ages
    if (selectedAgeFilter !== 'All') {
      filteredUnits = filteredUnits.filter((unit) => unit.age === selectedAgeFilter);
    }

   // Filter Costs
    Object.entries(selectedCostsFilters).forEach(([key, filter]) => {
      const costType: CostFilterOptions = key as CostFilterOptions;
        if(filter.selected) {
            filteredUnits = filteredUnits.filter((unit: Unit) => {
                if(unit.cost) {
                    if(costType === 'Wood') {
                            return unit.cost.Wood ? unit.cost.Wood <= filter.value : false;
                        } else if(costType === 'Food') {
                            return unit.cost.Food ? unit.cost.Food <= filter.value : false;
                        } else if(costType === 'Gold') {
                            return unit.cost.Gold ? unit.cost.Gold <= filter.value : false;
                        } else {
                            return false;
                        }
                } else {
                    return false;
                }
            })
        }
    });

    return filteredUnits;
  }
);