/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {MapStyles} from './mapStype';
import MapOptions = google.maps.MapOptions;
import footprintsData from '../data/footprints'

@Component({
  selector: 'app-footprint-map',
  templateUrl: './footprint-map.component.html',
  styleUrls: ['./footprint-map.component.css']
})
export class FootprintMapComponent implements OnInit {

  @ViewChild('gmap', { static: true }) gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
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
    var footprints = footprintsData.data
    for (var i = 0; i < footprints.length; i++) {
      var coords = footprints[i].coordinates;
      var latLng = new google.maps.LatLng(coords[1], coords[0]);
      var marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        title: footprints[i].title,
        icon: image
      });
    }
  }

}
