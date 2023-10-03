import { TestBed } from '@angular/core/testing';

import { AoeUnitsService } from './aoe-units.service';

describe('AoeUnitsService', () => {
  let service: AoeUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AoeUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
