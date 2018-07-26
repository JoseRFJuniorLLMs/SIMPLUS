import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product13RoutingModule } from './product13-routing.module';
import { Product13Component } from './product13.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [CommonModule, Product13RoutingModule, PageHeaderModule],
  declarations: [Product13Component]
})
export class Product13Module { }
