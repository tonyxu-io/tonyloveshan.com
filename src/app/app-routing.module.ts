import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { VlogsHomeComponent } from './vlogs-home/vlogs-home.component';
import { VlogsDetailComponent } from './vlogs-detail/vlogs-detail.component';

const routes: Routes = [
  {
    path : "",
    component : HomepageComponent
  },
  {
    path : "vlogs",
    component : VlogsHomeComponent
  },
  {
    path : "vlogs/:slug",
    component : VlogsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
