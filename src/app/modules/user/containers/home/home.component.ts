import { AdminService, UserService } from './../../services/index';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit, OnDestroy {
  // suscripciones
  onDestroy$: Subject<boolean> = new Subject();
  //From Firestore
  covers: any = [
    // {
    //   boton: false,
    //   frase1: 'NOS DEDICAMOS A DAR FORMA A TUS IDEAS',
    //   frase2: '',
    //   imagen:
    //     'https://firebasestorage.googleapis.com/v0/b/mhallentiac.appspot.com/o/home%2Fpiedrafina11.jpg?alt=media&token=a78573bb-bb56-4700-b25c-e63a9b59bc0f',
    //   rutaBoton: 'home',
    //   subtitulo: 'Allentiac',
    //   textoBoton: 'Ir a Pisos',
    //   titulo: 'Modern Home',
    // },
  ];

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
