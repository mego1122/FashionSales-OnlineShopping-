import { category } from './../../Models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  BaseUrl:string="https://localhost:44382/api/categories";

GetAllCategories():Observable<category[]>
   {
     console.log("categories");
     return this.http.get<category[]>(this.BaseUrl)
   }

   GetCategoryById(id:number):Observable<category>
   {
    return this.http.get<category>(this.BaseUrl+id)
   }

   AddCategory(categ:category)
   {
    return this.http.post<category>(this.BaseUrl,categ);
   }

   UpdateCategory(id:number,std:category):Observable<category>
   {
     return this.http.put<category>(this.BaseUrl+id,std);
   }
   
   DeleteCategory(id:number)
   {
    return this.http.delete<category>(this.BaseUrl+id);
   }
}
