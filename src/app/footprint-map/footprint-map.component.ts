/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
// import { } from 'googlemaps';
import { FootprintPointsService } from '../footprint-points.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footprint-map',
  templateUrl: './footprint-map.component.html',
  styleUrls: ['./footprint-map.component.css']
})
export class FootprintMapComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(private footprintPoints:FootprintPointsService) { }

  ngOnInit() {
    this.footprintPoints.getFootprintPoints().subscribe((results:any[]) => {
      var image = {
        url: 'https://tonyloveshan.com/images/heart-marker.png',
        // This marker is 20 pixels wide by 32 pixels high.
        scaledSize: new google.maps.Size(30, 30),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(15, 15)
      };
      for (var i = 0; i < results.length; i++) {
        var coords = results[i].coordinates;
        var latLng = new google.maps.LatLng(coords[1], coords[0]);
        var marker = new google.maps.Marker({
          position: latLng,
          map: this.map,
          title: results[i].title,
          icon: image
        });
      }
    })
    var mapProp = {
      center: new google.maps.LatLng(21.2724404, -157.8226188),
      zoom: 2,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
