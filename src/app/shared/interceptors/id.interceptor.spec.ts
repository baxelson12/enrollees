import { TestBed } from '@angular/core/testing';

import { IdInterceptor } from './id.interceptor';

describe('IdInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IdInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IdInterceptor = TestBed.inject(IdInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
