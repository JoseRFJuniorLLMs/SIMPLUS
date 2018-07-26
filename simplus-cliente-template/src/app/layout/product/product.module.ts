import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [CommonModule, ProductRoutingModule, PageHeaderModule],
  declarations: [ProductComponent]
})
export class ProductModule { }
