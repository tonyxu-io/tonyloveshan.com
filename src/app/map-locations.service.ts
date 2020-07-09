import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapLocationsService {

  constructor(public http: HttpClient) { }

  getMapLocations(){
    return this.http.get(`${environment.apiUrl}/getMapLocations`);
  }
}
