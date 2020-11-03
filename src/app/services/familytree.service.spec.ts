import { TestBed } from '@angular/core/testing';

import { FamilytreeService } from './familytree.service';

describe('FamilytreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FamilytreeService = TestBed.get(FamilytreeService);
    expect(service).toBeTruthy();
  });
});
