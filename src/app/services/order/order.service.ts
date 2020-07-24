import { order } from './../../Models/order';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  BaseUrl:string;

GetAllOrderss():Observable<order[]>
   {
    return this.http.get<order[]>(this.BaseUrl)
   }

   GetOrderById(id:number):Observable<order>
   {
    return this.http.get<order>(this.BaseUrl+id)
   }

   AddOrder(std:order):Observable<order>
   {
    return this.http.post<order>(this.BaseUrl,std);
   }

   UpdateOrder(id:number,std:order):Observable<order>
   {
     return this.http.put<order>(this.BaseUrl+id,std);
   }
   
   DeleteOrder(id:number)
   {
    return this.http.delete<order>(this.BaseUrl+id);
   }
}
