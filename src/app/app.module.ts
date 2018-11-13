import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeatureAreaComponent } from './feature-area/feature-area.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VlogsHomeComponent } from './vlogs-home/vlogs-home.component';
import { FootprintMapComponent } from './footprint-map/footprint-map.component';
import { VlogsDetailComponent } from './vlogs-detail/vlogs-detail.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeatureAreaComponent,
    HomepageComponent,
    VlogsHomeComponent,
    FootprintMapComponent,
    VlogsDetailComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
