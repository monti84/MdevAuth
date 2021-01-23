import { TestBed } from '@angular/core/testing';

import { MdevAuthService } from './mdev-auth.service';

describe('MdevAuthService', () => {
  let service: MdevAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdevAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
