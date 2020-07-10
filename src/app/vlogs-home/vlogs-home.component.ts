import { Component, OnInit } from '@angular/core';

import { GaEventService } from '../ga-event.service';
import { Title } from '@angular/platform-browser';
import { YoutubeChannelVideosService } from '../youtube-channel-videos.service'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-vlogs-home',
  templateUrl: './vlogs-home.component.html',
  styleUrls: ['./vlogs-home.component.css']
})
export class VlogsHomeComponent implements OnInit {

  faYoutube = faYoutube;
  youtubeVideos$: any;

  constructor(private titleService: Title, private gaEvent: GaEventService, private youtubeChannelService: YoutubeChannelVideosService) { }

  ngOnInit() {
    this.titleService.setTitle("Vlogs - Tony ❤️ Helen")
    this.youtubeChannelService.getYoutubeChannelVideos().subscribe(
      res => {
        this.youtubeVideos$ = res
      }
    )
  }

  encodeValue(value: string) {
    return value.replace(/[^a-zA-Z0-9]/g, '');
  }

  emitYouTubeSubscribeClick() {
    this.gaEvent.emitEvent("Video", "YouTubeChannelSubscription")
  }
}
