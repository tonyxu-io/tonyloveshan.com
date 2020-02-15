import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { GaEventService } from '../ga-event.service';
import { Title } from '@angular/platform-browser';
import { YoutubeChannelVideosService } from '../youtube-channel-videos.service';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-vlogs-detail',
  templateUrl: './vlogs-detail.component.html',
  styleUrls: ['./vlogs-detail.component.css']
})
export class VlogsDetailComponent implements OnInit {

  videoId$: string;
  videoTitle$: string;
  videoThumbnail$: string;
  videoDate$: string;
  faYoutube = faYoutube;

  constructor(private route: ActivatedRoute, private titleService: Title, private gaEvent: GaEventService, private youtubeChannelService: YoutubeChannelVideosService) {
    this.route.params.subscribe( params => this.videoId$ = params.slug)
  }

  ngOnInit() {
    this.youtubeChannelService.getYoutubeChannelVideos().subscribe(
      res => {
        var selectedVideo = res['items'].filter(video => {
          return video.snippet.resourceId.videoId === this.videoId$
        })[0]
        this.videoTitle$ = selectedVideo.snippet.title;
        this.videoThumbnail$ = selectedVideo.snippet.thumbnails.high.url;
        this.videoDate$ = selectedVideo.snippet.publishedAt.split("T")[0]
        this.titleService.setTitle(this.videoTitle$ + " - Tony ❤️ Helen")
      }
    )
  }

  emitVideoEvent(eventName) {
    this.gaEvent.emitEvent("Video", eventName, this.videoTitle$)
  }

  emitYouTubeSubscribeClick() {
    this.gaEvent.emitEvent("Video", "YouTubeChannelSubscription")
  }
}
