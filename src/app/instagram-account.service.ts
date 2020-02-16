import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstagramAccountService {

  constructor(public http: HttpClient) { }

  getInstagramAccount(){
    return this.http.get('/api/getInstagramAccount');
  }
}
