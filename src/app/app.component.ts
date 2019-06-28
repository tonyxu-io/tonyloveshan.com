import {
  NavigationEnd,
  Router
} from '@angular/router';

import {
  ActivatedRoute
} from '@angular/router';
import {
  Component
} from '@angular/core';
import {
  TranslateService
} from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private translate: TranslateService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['lang']) {
        this.translate.use(params['lang']);
      }
    })
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        ( < any > window).ga('set', 'page', event.urlAfterRedirects);
        ( < any > window).ga('send', 'pageview');
      }
    })
  }
}