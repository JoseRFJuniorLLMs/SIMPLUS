import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product13cRoutingModule } from './product13c-routing.module';
import { Product13cComponent } from './product13c.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [CommonModule, Product13cRoutingModule, PageHeaderModule],
  declarations: [Product13cComponent]
})
export class Product13cModule { }
