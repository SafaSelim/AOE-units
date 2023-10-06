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

    if (selectedAgeFilter !== 'All') {
      filteredUnits = filteredUnits.filter((unit) => unit.age === selectedAgeFilter);
    }

    const costFilterConditions: any = [];

    Object.entries(selectedCostsFilters).forEach(([key, value]) => {
      const costType: CostFilterOptions = key as CostFilterOptions;

      if (value.selected && value.value > 0) {
        costFilterConditions.push((unit: Unit) => {
          if (unit.cost) {
            switch (costType) {
              case 'Wood':
                return unit.cost.Wood ? unit.cost.Wood <= value.value : false;
              case 'Food':
                return unit.cost.Food ? unit.cost.Food <= value.value : false;
              case 'Gold':
                return unit.cost.Gold ? unit.cost.Gold <= value.value : false;
              default:
                return false;
            }
          } else {
            return false;
          }
        });
      }
    });

    if (costFilterConditions.length > 0) {
      filteredUnits = filteredUnits.filter((unit) =>
        costFilterConditions.some((condition: any) => condition(unit))
      );
    }

    return filteredUnits;
  }
);