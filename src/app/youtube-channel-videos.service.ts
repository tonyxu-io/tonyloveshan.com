import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeChannelVideosService {

  constructor(public http: HttpClient) { }

  getVideos(playlistId?:string) {
    let url = `${environment.apiUrl}/getYouTubeVideos`;
    if (playlistId) {
      url += `?playlistId=${playlistId}`
    }
    return this.http.get(url);
  }

  getPlayLists() {
    return this.http.get(`${environment.apiUrl}/getYouTubePlayLists`);
  }
}
