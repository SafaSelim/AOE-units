import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { unitsAgeFiltered } from '../../pages/unit-list/store/units.actions';
import * as fromUnits from '../../pages/unit-list/store/units.reducer';

import { FilterAgesComponent } from './filter-ages.component';

describe('FilterAgesComponent', () => {
  let component: FilterAgesComponent;
  let fixture: ComponentFixture<FilterAgesComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterAgesComponent],
      imports: [ StoreModule.forRoot({units: fromUnits.reducer})],
      providers: [Store]
    });
    fixture = TestBed.createComponent(FilterAgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch unitsAgeFiltered action when filterByAge is called', () => {
    const selectedAge = 'Castle';
    const dispatchSpy = spyOn(store, 'dispatch');
  
    component.filterByAge(selectedAge);

    expect(component.selectedAge).toEqual(selectedAge);
    expect(dispatchSpy).toHaveBeenCalledWith(unitsAgeFiltered({ selectedAgeFilter: selectedAge }));
  });
});
