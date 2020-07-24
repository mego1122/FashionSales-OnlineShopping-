import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {
  url;
  constructor(private http: HttpClient) { }
  Savesresponse(responce)
  {
    this.url =  'https://localhost:44382/api/FaceGoogleLoginApi/Savesresponse';
    return this.http.post(this.url,responce);
  }
}