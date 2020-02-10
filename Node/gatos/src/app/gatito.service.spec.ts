import { TestBed } from '@angular/core/testing';

import { GatitoService } from './gatito.service';

describe('GatitoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GatitoService = TestBed.get(GatitoService);
    expect(service).toBeTruthy();
  });
});
