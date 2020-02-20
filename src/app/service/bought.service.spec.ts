import { TestBed } from '@angular/core/testing';

import { BoughtService } from './bought.service';

describe('BoughtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoughtService = TestBed.get(BoughtService);
    expect(service).toBeTruthy();
  });
});
