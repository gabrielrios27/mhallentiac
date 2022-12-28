/*Containers*/
import * as userContainers from './containers/index';
/*Layout*/
import * as userLayout from './layout/index';
/* Services */
import * as userServices from './services';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [...userContainers.containers],
  imports: [CommonModule, UserRoutingModule, RouterModule],
  providers: [...userServices.services],
  exports: [...userLayout.layout],
})
export class UserModule {}
