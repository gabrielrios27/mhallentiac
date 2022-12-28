/*Containers*/
import * as userContainers from './containers/index';
/* Services */
import * as userServices from './services';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [...userContainers.containers, RouterModule],
  imports: [CommonModule, UserRoutingModule, RouterModule],
  providers: [...userServices.services],
  exports: [],
})
export class UserModule {}
