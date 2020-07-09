import { TestBed } from '@angular/core/testing';

import { MapLocationsService } from './map-locations.service';

describe('MapLocationsService', () => {
  let service: MapLocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapLocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
