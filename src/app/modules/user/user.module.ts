/*Containers*/
import * as userContainers from './containers/index';
/* Services */
import * as userServices from './services/index';

import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [...userContainers.containers],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    NgbCarouselModule,
    NgbAlertModule,
  ],
  providers: [...userServices.services],
  exports: [...userContainers.containers],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule {}
