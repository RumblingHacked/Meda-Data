import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";

import { FIREBASE_CONFIG } from '../../core/constant/constants';
import { FirebaseConfigService } from '../../core/service/firebase-config.service';

import { User } from "../user.interface";

declare var firebase: any

@Injectable()
export class AuthService {

  constructor(private router: Router){}

  newPw = ""

  signinUser(user: User){

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .catch(function(error) {
    // Handle Errors here.
    var errorMessage = error.message;
    console.log(error);
    //gives an alert when Credentials are incorrect
    alert("Login Credentials are incorrect! ");
    // ...
            });
      }


    forgotPassword(user: User){

      firebase.auth().sendPasswordResetEmail(user.email)
      .then(function(){
      }).catch(function(error)
      {
        var errorMessage = error.message;
        console.log(error);
        });

    }

    verifyReset(){

      firebase.auth().verifyResetCode('ResetPassword').catch(function(error)
      {
        var errorMessage = error.message;
        console.log(error);
        });
    }

    confirmReset(){

      firebase.auth().confirmPasswordReset('ResetPassword',this.newPw).catch(function(error)
      {
        var errorMessage = error.message;
        console.log(error);
        });
            
    }


  logout()
    {
    console.log("test")
    firebase.auth().signOut();
    this.router.navigate(['']);
      }


isAuthenticated(): Observable<boolean>{

    const subject = new Subject<boolean>();
    firebase.auth().onAuthStateChanged(function(user){
      if (user) {
        subject.next(true);
      } else {
        subject.next(false);
      }
    });
    return subject.asObservable();
  }
}
