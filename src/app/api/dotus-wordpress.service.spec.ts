import { TestBed } from '@angular/core/testing';

import { DotusWordpressService } from './dotus-wordpress.service';

describe('DotusWordpressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DotusWordpressService = TestBed.get(DotusWordpressService);
    expect(service).toBeTruthy();
  });
});
