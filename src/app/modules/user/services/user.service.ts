import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  // getFromFirestore(userId: any, mediaType: any): Observable<any> {
  //   return this.firestore
  //     .collection('home')
  //     .doc('inicio')
  //     .collection(`${mediaType}`)
  //     .snapshotChanges();
  // }

  // getFromFirestore(): Observable<any> {
  //   return this._firestore
  //     .collection('home')
  //     .doc('inicio')
  //     .collection('portadas')
  //     .snapshotChanges();
  // }
}
