import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { UnitListComponent } from './unit-list.component';
import { Unit } from 'src/app/models/units.model';
import { of } from 'rxjs';

import { UNITS_MOCK, SELECTED_UNIT_MOCK } from './unit-list.mock';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { ComponentsModule } from 'src/app/components/components.module';

describe('UnitListComponent', () => {
  let component: UnitListComponent;
  let fixture: ComponentFixture<UnitListComponent>;
  let store: jasmine.SpyObj<Store>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }
    

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitListComponent],
      imports: [
        ComponentsModule,
        RouterTestingModule.withRoutes(
          [
            { path: '', component: UnitListComponent, data: { title: 'Units' } },
            { path: 'unit-details/:id', component: UnitDetailsComponent, data: { title: 'Unit Details' } }
          ]
        ),
      ],
      providers: [
          { provide: Store, useValue: jasmine.createSpyObj('Store', ['select']) },
        ],
    });

    fixture = TestBed.createComponent(UnitListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to filtered units from the store', () => {
    const units: Unit[] = UNITS_MOCK;
    spyOn(store, 'select').and.returnValue(of(units));

    fixture.detectChanges();

    expect(component.aoeUnits).toEqual(units);
  });

  it('should navigate to unit details', () => {
    const unit: Unit = SELECTED_UNIT_MOCK;

    component.openUnitDetails(unit);

    expect(router.navigate).toHaveBeenCalledWith(['unit-details/' + unit.id], { relativeTo: router });
  });

  it('should parse unit cost', () => {
    const cost = { Food: 100, Wood: 50, Gold: 200 };

    const parsedCost = component.parseUnitCost(cost);

    expect(parsedCost).toEqual('"Food":100,"Wood":50,"Gold":200');
  });
});