import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product14RoutingModule } from './product14-routing.module';
import { Product14Component } from './product14.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [CommonModule, Product14RoutingModule, PageHeaderModule],
  declarations: [Product14Component]
})
export class Product14Module { }
