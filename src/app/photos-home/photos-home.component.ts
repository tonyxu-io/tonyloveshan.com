import { Component, OnInit } from '@angular/core';

import { GaEventService } from '../ga-event.service';
import { InstagramAccountService } from '../instagram-account.service'
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-photos-home',
  templateUrl: './photos-home.component.html',
  styleUrls: ['./photos-home.component.css']
})
export class PhotosHomeComponent implements OnInit {

  instagramAccount$: any;
  faInstagram = faInstagram;

  constructor(private titleService: Title ,private instagramAccountService: InstagramAccountService, private gaEvent: GaEventService) {
  }

  ngOnInit() {
    this.titleService.setTitle("Photos - Tony ❤️ Helen")
    this.instagramAccountService.getInstagramAccount().subscribe(
      res => {
        this.instagramAccount$ = res
      }
    )
  }

  emitInstagramFollowClick() {
    this.gaEvent.emitEvent("Button", "InstagramFollowClick")
  }
}
