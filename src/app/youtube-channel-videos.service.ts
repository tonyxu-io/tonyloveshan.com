import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeChannelVideosService {

  constructor(public http: HttpClient) { }

  getYoutubeChannelVideos(){
    return this.http.get('https://tonyloveshan-api.azurewebsites.net/api/getMyYouTubeChannel?code=ZwvOoDNH4DvuSde6HXQ7rmJW3Pl8g7qwON7IeNfLULY1YWgKLCsvgA==');
  }
}
