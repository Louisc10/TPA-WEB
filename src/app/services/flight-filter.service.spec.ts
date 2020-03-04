import { TestBed } from '@angular/core/testing';

import { FlightFilterService } from './flight-filter.service';

describe('FlightFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightFilterService = TestBed.get(FlightFilterService);
    expect(service).toBeTruthy();
  });
});
