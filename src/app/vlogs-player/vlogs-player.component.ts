import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import {
  GaEventService
} from '../ga-event.service';
import { UserCountryService } from '../user-country.service';

@Component({
  selector: 'app-vlogs-player',
  templateUrl: './vlogs-player.component.html',
  styleUrls: ['./vlogs-player.component.css']
})
export class VlogsPlayerComponent implements OnInit {

  @Input() vlog: Object;

  public YT: any;
  public video: any;
  public player: any;

  constructor(private gaEvent: GaEventService, private userCountry: UserCountryService) {}

  ngOnInit() {
    this.userCountry.getUserCountry()
    .subscribe(data => {
      if (data["country"] === "CN") {
        this.showBilibiliPlayer()
      } else {
        this.showYouTubePlayer()
      }
    })
    
  }

  showYouTubePlayer() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    tag.onerror = (e) => {
      console.log(e)
      this.showBilibiliPlayer();
    }
    if (window['YT'] && window['YT']['loaded'] === 1) {
      this.initYouTubeVideo(this.vlog["youtubeId"])
    } else {
      window['onYouTubeIframeAPIReady'] = (e) => {
        this.initYouTubeVideo(this.vlog["youtubeId"])
      };
    }
  }

  initYouTubeVideo(youtubeId: string) {
    this.YT = window['YT'];
    this.player = new window['YT'].Player('player', {
      height: '100%',
      width: '100%',
      videoId: youtubeId,
      events: {
        'onStateChange': this.onPlayerStateChange.bind(this),
        'onError': this.onPlayerError.bind(this),
        'onReady': (e) => {
          document.getElementById("player").style.position = "absolute"
          this.gaEvent.emitEvent("Video", "YouTubeVideoLoaded", this.vlog["title"])
        }
      }
    });
  }

  onPlayerStateChange(event) {
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() == 0) {
          this.emitVideoEvent("YouTubeVideoPlayed")
        };
        break;
      case window['YT'].PlayerState.PAUSED:
        break;
      case window['YT'].PlayerState.ENDED:
        break;
    };
  };
  cleanTime() {
    return Math.round(this.player.getCurrentTime())
  };
  onPlayerError() {
    this.showBilibiliPlayer();
  };
  showBilibiliPlayer() {
    var player = document.getElementById("player-container");
    player.innerHTML = `<iframe src="//player.bilibili.com/player.html?aid=${this.vlog["bilibiliId"]}&page=1" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>`;
    this.emitVideoEvent("BiliBiliVideoLoaded")
  }
  emitVideoEvent(eventName) {
    this.gaEvent.emitEvent("Video", eventName, this.vlog["title"])
  }
}