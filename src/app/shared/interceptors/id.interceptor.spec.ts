import { TestBed } from '@angular/core/testing';

import { IdInterceptor } from './id.interceptor';

describe('IdInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [IdInterceptor]
    })
  );

  it('should be created', () => {
    const interceptor: IdInterceptor = TestBed.inject(IdInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('Should convert to a GUID', () => {
    const interceptor: IdInterceptor = TestBed.inject(IdInterceptor);
    const GUID = interceptor.standardize('89a0cd0525fb4b6ea8f8fc2187f690d0');
    expect(GUID).toEqual('89a0cd05-25fb-4b6e-a8f8-fc2187f690d0');
  });
});
