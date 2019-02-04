import { TestBed } from '@angular/core/testing';

import { NumberService } from './number.service';

describe('NumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberService = TestBed.get(NumberService);
    expect(service).toBeTruthy();
  });
});
