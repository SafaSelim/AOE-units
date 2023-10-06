import { ComponentFixture, TestBed } from '@angular/core/testing';


import { Store, StoreModule } from '@ngrx/store';
import { unitsCostsFiltered } from '../../pages/unit-list/store/units.actions';
import * as fromUnits from '../../pages/unit-list/store/units.reducer';

import { FilterCostsComponent } from './filter-costs.component';

describe('FilterCostsComponent', () => {
  let component: FilterCostsComponent;
  let fixture: ComponentFixture<FilterCostsComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterCostsComponent],
      imports: [ StoreModule.forRoot({units: fromUnits.reducer})],
      providers: [Store]
    });
    fixture = TestBed.createComponent(FilterCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('', () => {

  });

  it('should dispatch unitsCostsFiltered action when toggleFilters is called', () => {
    const cost = 'Food';
    const dispatchSpy = spyOn(store, 'dispatch');
  
    component.toggleFilters(cost);
    
    expect(dispatchSpy).toHaveBeenCalledWith(unitsCostsFiltered({ selectedCostsFilters: component.selectedCostFilters }));
  });
  
  it('should dispatch unitsCostsFiltered action when onRangeChange is called', () => {
    const event = { target: { value: '50' } };
    const costType = 'Wood';
    const dispatchSpy = spyOn(store, 'dispatch');
  
    component.onRangeChange(event, costType);
  
    expect(dispatchSpy).toHaveBeenCalledWith(unitsCostsFiltered({ selectedCostsFilters: component.selectedCostFilters }));
  });
  
  it('should dispatch unitsCostsFiltered action when filterUnits is called', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
  
    component.filterUnits();
  
    expect(dispatchSpy).toHaveBeenCalledWith(unitsCostsFiltered({ selectedCostsFilters: component.selectedCostFilters }));
  });
  
});
