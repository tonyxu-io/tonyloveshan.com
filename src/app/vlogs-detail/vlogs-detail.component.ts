import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import vlogsData from '../data/vlogs';
import { GaEventService } from '../ga-event.service';
import { TranslatePipe } from '../translate.pipe';

@Component({
  selector: 'app-vlogs-detail',
  templateUrl: './vlogs-detail.component.html',
  styleUrls: ['./vlogs-detail.component.css']
})
export class VlogsDetailComponent implements OnInit {

  slug$: string;
  vlog$: Object;
  streamableUrl: SafeResourceUrl;
  faYoutube = faYoutube;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private titleService: Title, private gaEvent: GaEventService, private translatePipe: TranslatePipe) {
    this.route.params.subscribe( params => this.slug$ = params.slug)
  }

  ngOnInit() {
    var selectedVlog = vlogsData.data.filter(vlog => {
      return vlog["slug"] === this.slug$
    })
    this.vlog$ = selectedVlog[0];
    this.streamableUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.vlog$["streamableUrl"]);
    let translatedTitle = this.translatePipe.transform(this.vlog$["slug"]);
    this.titleService.setTitle(translatedTitle + " - Tony ❤️ Helen")
  }

  getDate() {
    return new Date(this.vlog$["timestamp"])
  }

  emitYouTubeButtonClick() {
    this.gaEvent.emitEvent("Video", "YouTubePlay", this.vlog$["title"])
  }

  emitBilibiliButtonClick() {
    this.gaEvent.emitEvent("Video", "BilibiliPlay", this.vlog$["title"])
  }

  emitYouTubeSubscribeClick() {
    this.gaEvent.emitEvent("Video", "YouTubeChannelSubscription")
  }
}
