import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product14cRoutingModule } from './product14c-routing.module';
import { Product14cComponent } from './product14c.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [CommonModule, Product14cRoutingModule, PageHeaderModule],
  declarations: [Product14cComponent]
})
export class Product14cModule { }
