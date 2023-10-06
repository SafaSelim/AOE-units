import { Unit } from "src/app/models/units.model";
import { units } from "src/app/services/aoe-units.mock";

import * as UnitsActions from './units.actions';
import { AgeFilter, SelectedCostFilters } from "src/app/models/filters.model";
import { Action, createReducer, on } from "@ngrx/store";


export interface State {
    allUnits: Unit[];
    units: Unit[];
    selectedAgeFilter: AgeFilter;
    selectedCostsFilters: SelectedCostFilters;
}

const initialState: State = {
    allUnits: units,
    units: units,
    selectedAgeFilter: 'All',
    selectedCostsFilters:  {
        Food: { selected: false, value: 0 },
        Wood: { selected: false, value: 0 },
        Gold: { selected: false, value: 0 }
      }
}

const unitsReducer = createReducer(
    initialState, 
    on(UnitsActions.setUnits, (state, {units}) => ({
        ...state,
        allUnits: [...units],
        units: [...units],
        selectedAgeFilter: 'All' as AgeFilter,
        selectedCostsFilters: state.selectedCostsFilters,
      })),
    on(UnitsActions.unitsAgeFiltered, (state, { selectedAgeFilter}) => ({
            ...state,
            selectedAgeFilter: selectedAgeFilter,
        })),

    on(UnitsActions.unitsCostsFiltered, (state, {selectedCostsFilters}) =>({
            ...state,
            selectedCostsFilters: { ...selectedCostsFilters },
        })),

); 

export function reducer(state: State | undefined, action: Action) {
    return unitsReducer(state, action);
  }

  