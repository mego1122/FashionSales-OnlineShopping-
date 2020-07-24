import { provider } from './../Models/provider';
import { ProviderService } from './../services/provider/provider.service';
import { Component, OnInit, Provider } from '@angular/core';
import {  Socialusers } from '../Models/SocialUsers';  
 import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';  
import { SocialLoginService } from '../services/socialLogin/social-login.service';
import { SocialLoginModule, AuthServiceConfig } from 'angular-6-social-login';  
import {ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';  
import { Router, ActivatedRoute, Params } from '@angular/router'; 
import { tick } from '@angular/core/testing';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  response;  
  socialusers=new Socialusers();  
constructor(private PS:ProviderService) { } 

ngOnInit() {  }


onSubmit(user:string,pass:string) {
    console.log("Form Submitted!");
    let p=new provider(user,pass);
    this.PS.LogIn(p).subscribe(a=>console.log('aaaa'));
  
  }
}


