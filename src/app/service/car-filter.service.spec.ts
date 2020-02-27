import { TestBed } from '@angular/core/testing';

import { CarFilterService } from './car-filter.service';

describe('CarFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarFilterService = TestBed.get(CarFilterService);
    expect(service).toBeTruthy();
  });
});
