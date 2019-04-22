import { NgModule } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AuthService } from "./auth.service";
import{ FirebaseConfigService } from '../../core/service/firebase-config.service';

import { LoginComponent } from '../login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports:[
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [
    AuthService,
    FirebaseConfigService
  ]
})
export class AuthModule {

}
