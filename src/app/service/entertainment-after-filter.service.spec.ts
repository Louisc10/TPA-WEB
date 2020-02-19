import { TestBed } from '@angular/core/testing';

import { EntertainmentAfterFilterService } from './entertainment-after-filter.service';

describe('EntertainmentAfterFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntertainmentAfterFilterService = TestBed.get(EntertainmentAfterFilterService);
    expect(service).toBeTruthy();
  });
});
