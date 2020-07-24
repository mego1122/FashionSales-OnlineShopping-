import { product } from './../../Models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private http: HttpClient) { }

  BaseUrl:string;

GetAllProductss():Observable<product[]>
   {
    return this.http.get<product[]>(this.BaseUrl)
   }

   GetProductById(id:number):Observable<product>
   {
    return this.http.get<product>(this.BaseUrl+id)
   }

   AddProduct(std:product):Observable<product>
   {
    return this.http.post<product>(this.BaseUrl,std);
   }

   UpdateProduct(id:number,std:product):Observable<product>
   {
     return this.http.put<product>(this.BaseUrl+id,std);
   }
   
   DeleteProduct(id:number)
   {
    return this.http.delete<product>(this.BaseUrl+id);
   }
}