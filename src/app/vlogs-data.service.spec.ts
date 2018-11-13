import { TestBed } from '@angular/core/testing';

import { VlogsDataService } from './vlogs-data.service';

describe('VlogsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VlogsDataService = TestBed.get(VlogsDataService);
    expect(service).toBeTruthy();
  });
});
