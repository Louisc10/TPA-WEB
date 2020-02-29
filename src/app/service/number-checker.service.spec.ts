import { TestBed } from '@angular/core/testing';

import { NumberCheckerService } from './number-checker.service';

describe('NumberCheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberCheckerService = TestBed.get(NumberCheckerService);
    expect(service).toBeTruthy();
  });
});
