import { TestBed } from '@angular/core/testing';

import { ApiWService } from './api-w.service';

describe('ApiWService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiWService = TestBed.get(ApiWService);
    expect(service).toBeTruthy();
  });
});
