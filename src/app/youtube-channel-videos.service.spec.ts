import { TestBed } from '@angular/core/testing';

import { YoutubeChannelVideosService } from './youtube-channel-videos.service';

describe('YoutubeChannelVideosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeChannelVideosService = TestBed.get(YoutubeChannelVideosService);
    expect(service).toBeTruthy();
  });
});
