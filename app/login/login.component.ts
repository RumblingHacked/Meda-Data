import { Component, OnInit,Input,Output,EventEmitter, OnDestroy,Injectable } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";
import { AuthService } from "./auth/auth.service";
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Rx";
import { User } from "../login/user.interface";
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: [ 'login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit,OnDestroy{

  @Input() myForm: FormGroup;
  //emitting the email string object to the navbar component
  @Output() navEmail = new EventEmitter<{username: string}>();

  isAuthenticated = false;
  private subscription: Subscription;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){
    this.subscription = this.authService.isAuthenticated().subscribe(
          authStatus => this.isAuthenticated = authStatus
        );
  }

onSignin(emails: HTMLInputElement) {
//  alert(emails.value)
//  alert(this.myForm.get('email').value)
//  alert(JSON.stringify(this.myForm.value))
  this.authService.signinUser(this.myForm.value)

  if (this.isAuthenticated){
    alert("Login Successful!");
    this.router.navigate(['customer']);
  }else{
    alert("Credentials Incorrect!");
  //  this.reset();
  }
}
onAddEmail(emails: HTMLInputElement){
  console.log(emails.value)
  this.navEmail.emit({
    username: emails.value
  });
}

isAuth(){
  return this.isAuthenticated
}

ngOnInit() {
  this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
  });
  }

forgotPassword(user: User){
  alert("Password Reset Successful!");
  this.authService.forgotPassword(this.myForm.value);

}

  reset(){
    this.myForm.reset();
  }
  ngOnDestroy(){

  this.subscription.unsubscribe();
  }

}
