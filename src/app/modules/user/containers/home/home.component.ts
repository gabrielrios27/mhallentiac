import { AdminService, UserService } from './../../services/index';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // suscripciones
  onDestroy$: Subject<boolean> = new Subject();
  //From Firestore
  covers: any = [];

  constructor(private _adminSvc: AdminService) {}

  ngOnInit(): void {
    this.getCovers();
  }

  getCovers() {
    this._adminSvc
      .getFromFirestore()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (resp) => {
          resp.forEach((element: any) => {
            this.covers.push(element.payload.doc.data());
          });
          console.log(this.covers);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  ngOnDestroy() {
    this.onDestroy$.next(true);
  }
}
