import { TestBed } from '@angular/core/testing';

import { InstagramAccountService } from './instagram-account.service';

describe('InstagramAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstagramAccountService = TestBed.get(InstagramAccountService);
    expect(service).toBeTruthy();
  });
});
