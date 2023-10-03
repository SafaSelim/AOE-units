import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCostsComponent } from './filter-costs.component';

describe('FilterCostsComponent', () => {
  let component: FilterCostsComponent;
  let fixture: ComponentFixture<FilterCostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterCostsComponent]
    });
    fixture = TestBed.createComponent(FilterCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
