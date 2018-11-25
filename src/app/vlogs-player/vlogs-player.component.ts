import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  GaEventService
} from '../ga-event.service';

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

  constructor(private gaEvent: GaEventService) {}

  init() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    tag.onerror = (e) => {
      console.log(e)
      this.fallbackToStreamable();
    }
  }

  ngOnInit() {
    this.init();
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
        }
      }
    });
  }

  onPlayerStateChange(event) {
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() == 0) {
          this.gaEvent.emitEvent("Video", "YouTubePlay", this.vlog["title"])
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
    this.fallbackToStreamable();
  };
  fallbackToStreamable() {
    var player = document.getElementById("player-container");
    player.innerHTML = `<iframe src="${this.vlog["streamableUrl"]}" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>`;
  }
}