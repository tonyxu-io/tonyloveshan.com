import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { GaEventService } from '../ga-event.service';
import { Title } from '@angular/platform-browser';
import { TranslatePipe } from '../translate.pipe';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import vlogsData from '../data/vlogs';

@Component({
  selector: 'app-vlogs-detail',
  templateUrl: './vlogs-detail.component.html',
  styleUrls: ['./vlogs-detail.component.css']
})
export class VlogsDetailComponent implements OnInit {

  slug$: string;
  vlog$: Object;
  faYoutube = faYoutube;

  constructor(private route: ActivatedRoute, private titleService: Title, private gaEvent: GaEventService, private translatePipe: TranslatePipe) {
    this.route.params.subscribe( params => this.slug$ = params.slug)
  }

  ngOnInit() {
    var selectedVlog = vlogsData.data.filter(vlog => {
      return vlog["slug"] === this.slug$
    })
    this.vlog$ = selectedVlog[0];
    let translatedTitle = this.translatePipe.transform(this.vlog$["slug"]);
    this.titleService.setTitle(translatedTitle + " - Tony ❤️ Helen")
  }

  getDate() {
    return new Date(this.vlog$["timestamp"])
  }

  emitVideoEvent(eventName) {
    this.gaEvent.emitEvent("Video", eventName, this.vlog$["title"])
  }

  emitYouTubeSubscribeClick() {
    this.gaEvent.emitEvent("Video", "YouTubeChannelSubscription")
  }
}
