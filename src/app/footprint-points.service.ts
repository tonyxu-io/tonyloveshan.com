import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FootprintPointsService {

  constructor(private http: HttpClient) { }

  getFootprintPoints() {
    return this.http.get("https://tonyloveshan-com.firebaseio.com/markers.json")
  }
}
