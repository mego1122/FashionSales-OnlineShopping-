import { CategoryService } from './../services/category/category.service';
import { category } from './../Models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private cs:CategoryService) { }
  categories:category[];
  ngOnInit() {
        this.cs.GetAllCategories().subscribe((a)=>{
          console.log(a);
          this.categories=a;
        })
    
  }



}
