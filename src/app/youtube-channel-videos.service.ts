import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeChannelVideosService {

  constructor(public http: HttpClient) { }

  getYoutubeChannelVideos(){
    return this.http.get(`${environment.apiUrl}/getYouTubeVideos`);
  }
}
