import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeChannelVideosService {

  constructor(public http: HttpClient) { }

  getYoutubeChannelVideos(){
    return this.http.get('/api/getYouTubeVideos');
  }
}
