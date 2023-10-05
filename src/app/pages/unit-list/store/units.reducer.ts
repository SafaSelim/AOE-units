import { Unit } from "src/app/models/units.model";
import { units } from "src/app/services/aoe-units.mock";

import * as UnitsActions from './units.actions';
import { AgeFilter, CostFilter } from "src/app/models/filters.model";
import { Action, createReducer, on } from "@ngrx/store";


export interface State {
    allUnits: Unit[];
    units: Unit[];
    selectedAgeFilter: AgeFilter;
    selectedCostsFilters: CostFilter[];
}

const initialState: State = {
    allUnits: units,
    units: units,
    selectedAgeFilter: 'All',
    selectedCostsFilters: []
}

const unitsReducer = createReducer(
    initialState, 
    on(UnitsActions.setUnits, (state, {units}) => ({
        ...state,
        allUnits: [...units],
        units: [...units],
        selectedAgeFilter: 'All' as AgeFilter,
        selectedCostsFilters: [],
      })),

    on(UnitsActions.unitsAgeFiltered, (state, { selectedAgeFilter}) => {
        let filteredUnits: Unit[];

        if (selectedAgeFilter !== 'All') {
            filteredUnits = state.allUnits.filter(unit => unit.age === selectedAgeFilter);
        } else {
            filteredUnits = state.allUnits;
        }

        return ({
            ...state,
            units: [...filteredUnits],
            selectedAgeFilter: selectedAgeFilter,
        })
    }),

    on(UnitsActions.unitsCostsFiltered, (state, { selectedCostsFilters}) => {
        let filteredUnits = state.units;

        //TODO costs filtering logic and update the costFilter object to store the value of the selected costs;

        return ({
            ...state,
            units: [...filteredUnits],
            selectedCostsFilters: [...selectedCostsFilters],
        });
    }),

); 

export function reducer(state: State | undefined, action: Action) {
    return unitsReducer(state, action);
  }

  