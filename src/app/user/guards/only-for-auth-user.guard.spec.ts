import { TestBed } from '@angular/core/testing';

import { OnlyForAuthUserGuard } from './only-for-auth-user.guard';

describe('OnlyForAuthUserGuard', () => {
  let guard: OnlyForAuthUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyForAuthUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
