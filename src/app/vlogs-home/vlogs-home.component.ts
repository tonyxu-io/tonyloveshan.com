import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import vlogsData from '../data/vlogs';
import { GaEventService } from '../ga-event.service';

@Component({
  selector: 'app-vlogs-home',
  templateUrl: './vlogs-home.component.html',
  styleUrls: ['./vlogs-home.component.css']
})
export class VlogsHomeComponent implements OnInit {

  vlogs$: Object;
  faYoutube = faYoutube;

  constructor(private titleService: Title, private gaEvent: GaEventService) { }

  ngOnInit() {
    var data = vlogsData.data;
    data.sort(function(a,b) {
      return b["timestamp"] - a["timestamp"];
    })
    this.vlogs$ = data;
    this.titleService.setTitle("Vlogs - Tony ❤️ Helen")
  }

  getDate(vlog) {
    return new Date(vlog["timestamp"])
  }

  emitYouTubeSubscribeClick() {
    this.gaEvent.emitEvent("Video", "YouTubeChannelSubscription")
  }
}
