import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {faCalendarAlt, faMapPin, faVideo} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  faCalendarAlt = faCalendarAlt;
  faMapPin = faMapPin;
  faVideo = faVideo;
  inLoveDate = new Date(1461034800000);
  constructor(private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle("Tony ❤️ Helen - tonylovehan.com")
  }

}
