import { Component,Input,Output, OnDestroy } from '@angular/core';
import { NgModule } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";
import { AuthService } from "../login/auth/auth.service";
import { Subscription } from "rxjs/Rx";
import { Router } from '@angular/router';
import { User } from "../login/user.interface";
import { Injectable } from '@angular/core';


import { LoginComponent } from '../login/login.component';
import * as firebase from "firebase";

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: [ 'navbar.component.css']
})


@Injectable()
export class NavbarComponent implements OnDestroy{

@Input() myForm: FormGroup;

emailElement = [{name: 'userEmail'}]

isAuthenticated = false;
test = 'test@test.com'

private subscription: Subscription;
constructor(private authService: AuthService, private router: Router) {
  this.subscription = this.authService.isAuthenticated().subscribe(
        authStatus => this.isAuthenticated = authStatus
      );
}

return(myForm: FormGroup){
  alert(this.myForm.get('email').value)
  return this.myForm.get('email').value
}

isAuth() {

      return this.isAuthenticated;
}

onLogout(){
console.log("test")
this.authService.logout();
}

onEmailAdded(emailData: {email: string}){
this.emailElement.push({
  name: emailData.email
});
//  return JSON.stringify(this.myForm.value)
}

ngOnDestroy() {
  this.subscription.unsubscribe();
   }

}
