import { TestBed } from '@angular/core/testing';

import { MoneyExchangeService } from './money-exchange.service';

describe('MoneyExchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoneyExchangeService = TestBed.get(MoneyExchangeService);
    expect(service).toBeTruthy();
  });
});
