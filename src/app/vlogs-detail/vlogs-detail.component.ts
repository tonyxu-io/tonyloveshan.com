import { Component, OnInit } from '@angular/core';
import { VlogsDataService } from '../vlogs-data.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vlogs-detail',
  templateUrl: './vlogs-detail.component.html',
  styleUrls: ['./vlogs-detail.component.css']
})
export class VlogsDetailComponent implements OnInit {

  slug$: Object;
  vlog$: Object;

  constructor(private vlogsDataService: VlogsDataService, private route: ActivatedRoute, private sanitizer: DomSanitizer, private titleService: Title) {
    this.route.params.subscribe( params => this.slug$ = params.slug)
  }

  ngOnInit() {
    this.vlogsDataService.getVlogs().subscribe((data: Array<Object>) => {
      var selectedVlog = data.filter(vlog => {
        return vlog["slug"] === this.slug$
      })
      this.vlog$ = selectedVlog[0];
      this.titleService.setTitle(this.vlog$["title"] + " - Tony ❤️ Helen")
    })
  }

  getDate() {
    return new Date(this.vlog$["timestamp"])
  }
}
