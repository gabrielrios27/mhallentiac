/*Components*/
import * as layoutsComponents from './components/index';
/* Containers */
import * as layoutsContainers from './containers/index';

import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...layoutsContainers.layouts, ...layoutsComponents.components],
  imports: [CommonModule, LayoutsRoutingModule, RouterModule],
  exports: [...layoutsContainers.layouts, ...layoutsComponents.components],
})
export class LayoutsModule {}
