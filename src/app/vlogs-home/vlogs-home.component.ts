import { Component, OnInit } from '@angular/core';

import { GaEventService } from '../ga-event.service';
import { Title } from '@angular/platform-browser';
import { YoutubeChannelVideosService } from '../youtube-channel-videos.service'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-vlogs-home',
  templateUrl: './vlogs-home.component.html',
  styleUrls: ['./vlogs-home.component.css']
})
export class VlogsHomeComponent implements OnInit {

  faYoutube = faYoutube;
  youtubeVideos$: any;
  youtubePlayLists$: any;
  playlistId$: string;

  constructor(private titleService: Title, private gaEvent: GaEventService, private youtubeChannelService: YoutubeChannelVideosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle("Vlogs - Tony ❤️ Helen")
    this.youtubeChannelService.getPlayLists().subscribe(
      res => {
        this.youtubePlayLists$ = res
      }
    );
    this.route.queryParams
      .subscribe(params => {
        this.updateVideosList(params.playlistId);
      });
  }

  encodeValue(value: string) {
    return value.replace(/[^a-zA-Z0-9]/g, '');
  }

  emitYouTubeSubscribeClick() {
    this.gaEvent.emitEvent("Video", "YouTubeChannelSubscription")
  }

  filterByPlayList(playlistId: string) {
    this.router.navigate([],
      {
        relativeTo: this.route,
        queryParams: { playlistId: playlistId },
        queryParamsHandling: 'merge'
      });
  }

  updateVideosList(playlistId?:string) {
    this.playlistId$ = playlistId;
    this.youtubeChannelService.getVideos(playlistId).subscribe(
      res => {
        this.youtubeVideos$ = res
      }
    );
  }
}
