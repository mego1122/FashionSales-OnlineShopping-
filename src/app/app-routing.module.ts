import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { CustomerComponent } from './customer/customer.component';
import { ProviderComponent } from './provider/provider.component';
import { RegisterComponent } from './register/register.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "addcategory", component: AddCategoryComponent },
  { path: "provider",      component: ProviderComponent },
  { path: "register", component: RegisterComponent },
  { path: "customer", component: CustomerComponent },
  { path: "category",      component: CategoryComponent },
  { path: "order", component: OrderComponent },
  { path: "product",      component: ProductsComponent },
  { path: "profile", component: ProfileComponent },
  { path: "cart",      component: CartComponent }
  
  // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
