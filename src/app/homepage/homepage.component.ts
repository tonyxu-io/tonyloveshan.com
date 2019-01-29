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

  getDays() {
    var oneDay:number = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate: Date = new Date(2016,3,18);
    var secondDate: Date = new Date();

    var diffDays:number = Math.round(
      Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
    );

    return diffDays;
  }

}
