/* Containers */
import * as layoutsContainers from './containers/index';

import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...layoutsContainers.layouts],
  imports: [CommonModule, LayoutsRoutingModule, RouterModule],
  exports: [...layoutsContainers.layouts],
})
export class LayoutsModule {}
