import { TestBed } from '@angular/core/testing';

import { GaEventService } from './ga-event.service';

describe('GaEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GaEventService = TestBed.get(GaEventService);
    expect(service).toBeTruthy();
  });
});
