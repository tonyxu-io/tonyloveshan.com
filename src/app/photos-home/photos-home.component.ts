import { Component, OnInit } from '@angular/core';

import { GaEventService } from '../ga-event.service';
import { InstagramAccountService } from '../instagram-account.service'
import { Observable } from 'rxjs';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-photos-home',
  templateUrl: './photos-home.component.html',
  styleUrls: ['./photos-home.component.css']
})
export class PhotosHomeComponent implements OnInit {

  instagramAccount$: Observable<Object>;
  faInstagram = faInstagram;

  constructor(private instagramAccountService: InstagramAccountService, private gaEvent: GaEventService) {
  }

  ngOnInit() {
    this.instagramAccount$ = this.instagramAccountService.getInstagramAccount()
  }

  emitInstagramFollowClick() {
    this.gaEvent.emitEvent("Button", "InstagramFollowClick")
  }
}
