import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import {
  GaEventService
} from '../ga-event.service';
import { Url } from 'url';

@Component({
  selector: 'app-vlogs-player',
  templateUrl: './vlogs-player.component.html',
  styleUrls: ['./vlogs-player.component.css']
})
export class VlogsPlayerComponent implements OnInit {

  @Input() videoId: string;
  @Input() videoTitle: string;

  youtubeUrl: Url;

  constructor(private gaEvent: GaEventService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.gaEvent.emitEvent("Video", "YouTubeVideoLoaded", this.videoTitle)
    this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}?autoplay=1`)
  }

  emitVideoEvent(eventName, videoTitle) {
    this.gaEvent.emitEvent("Video", eventName, videoTitle)
  }

}