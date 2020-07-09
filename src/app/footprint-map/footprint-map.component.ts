/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {MapStyles} from './mapStype';
import { MapLocationsService } from '../map-locations.service'

@Component({
  selector: 'app-footprint-map',
  templateUrl: './footprint-map.component.html',
  styleUrls: ['./footprint-map.component.css']
})
export class FootprintMapComponent implements OnInit {

  @ViewChild('gmap', { static: true }) gmapElement: any;
  map: google.maps.Map;

  footPrintLocations$: any;

  constructor(private mapLocationsService:MapLocationsService) { }

  ngOnInit() {
    this.mapLocationsService.getMapLocations().subscribe(
      res => {
        this.footPrintLocations$ = res;
        this.setupGoogleMap();
      }
    )
  }

  setupGoogleMap() {
    var image = {
      url: 'https://tonyloveshan.com/assets/images/heart.png',
      scaledSize: new google.maps.Size(15, 15),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(15, 15)
    };
    var mapProp = {
      center: new google.maps.LatLng(21.2724404, -157.8226188),
      zoom: screen.width > 800 ? 2 : 1,
      disableDefaultUI: true,
      styles: MapStyles.clearStyle
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    var footprints = this.footPrintLocations$
    for (var footprint of footprints) {
      var latLng = new google.maps.LatLng(Number(footprint[2]), Number(footprint[3]));
      var marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        title: footprint[0],
        icon: image
      });
    }
  }

}
