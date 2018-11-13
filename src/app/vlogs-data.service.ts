import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VlogsDataService {

  constructor(private http: HttpClient) { }

  getVlogs() {
    return this.http.get('assets/vlogs.json');
  }
}
