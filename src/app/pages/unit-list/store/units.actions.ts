import { Action, createAction, props } from "@ngrx/store";

import { AgeFilter, SelectedCostFilters } from "src/app/models/filters.model";
import { Unit } from "src/app/models/units.model";

export const setUnits = createAction('[Units] Set Units', props<{units: Unit[]}>());
export const unitsAgeFiltered = createAction('[Units] Units Age Filtered', props<{selectedAgeFilter: AgeFilter}>());
export const unitsCostsFiltered = createAction('[Units] Units Costs Filtered', props<{selectedCostsFilters: SelectedCostFilters}>());
