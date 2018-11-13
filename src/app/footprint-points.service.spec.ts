import { TestBed } from '@angular/core/testing';

import { FootprintPointsService } from './footprint-points.service';

describe('FootprintPointsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FootprintPointsService = TestBed.get(FootprintPointsService);
    expect(service).toBeTruthy();
  });
});
