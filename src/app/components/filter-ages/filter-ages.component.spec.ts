import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAgesComponent } from './filter-ages.component';

describe('FilterAgesComponent', () => {
  let component: FilterAgesComponent;
  let fixture: ComponentFixture<FilterAgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterAgesComponent]
    });
    fixture = TestBed.createComponent(FilterAgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
