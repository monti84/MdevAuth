import { TestBed } from '@angular/core/testing';

import { MdevAuthGuard } from './mdev-auth.guard';

describe('MdevAuthGuard', () => {
  let guard: MdevAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MdevAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
