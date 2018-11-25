import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserCountryService {

  constructor(private http: HttpClient) { }

  getUserCountry() {
    return this.http.get("https://ipapi.co/json")
  }
}
