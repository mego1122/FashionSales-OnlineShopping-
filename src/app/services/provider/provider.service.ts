import { provider } from './../../Models/provider';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }

  BaseUrl:string="https://localhost:44382/api/Auth/";

   GetProviderByUserName(UserName:string):boolean
   {
      if( this.http.get<provider>(this.BaseUrl+UserName)!=null)
      {return true;}
      else{return false}
   }

   UpdateProvider(id:number,std:provider):Observable<provider>
   {
     return this.http.put<provider>(this.BaseUrl+id,std);
   }

   
   LogIn(pro:provider)
   {
     return this.http.post<provider>(this.BaseUrl+'login',pro);
   }
   

}
