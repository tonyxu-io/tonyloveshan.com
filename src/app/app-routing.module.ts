import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { PhotosHomeComponent } from './photos-home/photos-home.component';
import { VlogsDetailComponent } from './vlogs-detail/vlogs-detail.component';
import { VlogsHomeComponent } from './vlogs-home/vlogs-home.component';

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
  },
  {
    path: "photos",
    component : PhotosHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
