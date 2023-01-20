import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private _firestore: AngularFirestore) {}

  getFromFirestore(): Observable<any> {
    return this._firestore
      .collection('home')
      .doc('inicio')
      .collection('portadas')
      .snapshotChanges();
  }
}
