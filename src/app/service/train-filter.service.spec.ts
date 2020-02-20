import { TestBed } from '@angular/core/testing';

import { TrainFilterService } from './train-filter.service';

describe('TrainFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainFilterService = TestBed.get(TrainFilterService);
    expect(service).toBeTruthy();
  });
});
