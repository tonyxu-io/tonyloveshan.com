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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslatePipe } from './translate.pipe';
import { VlogsPlayerComponent } from './vlogs-player/vlogs-player.component';

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
    TranslatePipe,
    VlogsPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    Title,
    TranslatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
