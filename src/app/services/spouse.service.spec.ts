import { TestBed } from '@angular/core/testing';

import { SpouseService } from './spouse.service';

describe('SpouseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpouseService = TestBed.get(SpouseService);
    expect(service).toBeTruthy();
  });
});
