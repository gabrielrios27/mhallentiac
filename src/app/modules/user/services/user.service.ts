import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  storageRef = firebase.app().storage().ref();
  constructor() {}
}
