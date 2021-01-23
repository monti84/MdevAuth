import { TestBed } from '@angular/core/testing';

import { MdevAuthInterceptor } from './mdev-auth.interceptor';

describe('MdevAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MdevAuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MdevAuthInterceptor = TestBed.inject(MdevAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
