import { CategoryService } from './../../services/category/category.service';
import { category } from './../../Models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'addcategory',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private cs:CategoryService) { }
 categ:category;
  ngOnInit() {
  }
  addCategory()
  {
   
    this.cs.AddCategory(this.categ).subscribe(a=>console.log(a));
  }
 
}
