import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstagramAccountService {

  constructor(public http: HttpClient) { }

  getInstagramAccount(){
    return this.http.get(`${environment.apiUrl}/getInstagramAccount`);
  }
}
