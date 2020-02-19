import { TestBed } from '@angular/core/testing';

import { EntertainmentFilterServiceService } from './entertainment-filter-service.service';

describe('EntertainmentFilterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntertainmentFilterServiceService = TestBed.get(EntertainmentFilterServiceService);
    expect(service).toBeTruthy();
  });
});
