import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
require('firebase/database');
require('firebase/auth');

import { FIREBASE_CONFIG } from '../constant/constants';

@Injectable()
export class FirebaseConfigService{

  private _database: firebase.database.Database;
  private _auth: firebase.auth.Auth;
  constructor(){
    this.configureApp();
    this.configureDatabase();
    this.configureAuth();
  }

  public get database(){
    return this._database;
  }

  configureApp(){
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  public get auth(){
    return this._auth;
  }

  configureAuth(){
    this._auth = firebase.auth();
  }

  configureDatabase(){
    this._database = firebase.database();
  }

}
