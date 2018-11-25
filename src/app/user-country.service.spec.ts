import { TestBed } from '@angular/core/testing';

import { UserCountryService } from './user-country.service';

describe('UserCountryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCountryService = TestBed.get(UserCountryService);
    expect(service).toBeTruthy();
  });
});
