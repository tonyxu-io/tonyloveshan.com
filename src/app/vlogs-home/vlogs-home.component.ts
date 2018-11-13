import { Component, OnInit } from '@angular/core';
import { VlogsDataService } from '../vlogs-data.service';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vlogs-home',
  templateUrl: './vlogs-home.component.html',
  styleUrls: ['./vlogs-home.component.css']
})
export class VlogsHomeComponent implements OnInit {

  vlogs$: Object;

  constructor(private vlogsDataService: VlogsDataService, private titleService: Title) { }

  ngOnInit() {
    this.vlogsDataService.getVlogs().subscribe((data) => {
      console.log(data)
      this.vlogs$ = data;
    })
    this.titleService.setTitle("Vlogs - Tony ❤️ Helen")
  }

  getDate(vlog) {
    return new Date(vlog["timestamp"])
  }
}
