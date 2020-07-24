import { CategoryService } from './services/category/category.service';

import{FormsModule}from '@angular/forms'
import{CustomFormsModule}from 'ng2-validation'



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './order/order.component';
import { ProviderComponent } from './provider/provider.component';
import { CustomerComponent } from './customer/customer.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider,AuthService } from "angularx-social-login";
 
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ReactiveFormsModule } from '@angular/forms';

 
export function socialConfigs() {  
  const config = new AuthServiceConfig(  
    [  
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
      },
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("Facebook-App-Id")
      }
    ]  
  );  
  return config;  
}  

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProductsComponent,
    CartComponent,
    ProfileComponent,
    OrderComponent,
    ProviderComponent,
    CustomerComponent,
    CategoryComponent,
AddCategoryComponent,
    UpdateCategoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    ReactiveFormsModule,
    FormsModule,
    CustomFormsModule
  ],
  providers: [
    AuthService,  
    {  
      provide: AuthServiceConfig,  
      useFactory: socialConfigs  

      
    }  ,
CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
