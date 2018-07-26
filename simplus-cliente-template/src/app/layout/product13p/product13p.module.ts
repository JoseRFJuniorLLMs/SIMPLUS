import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product13pRoutingModule } from './product13p-routing.module';
import { Product13pComponent } from './product13p.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [CommonModule, Product13pRoutingModule, PageHeaderModule],
  declarations: [Product13pComponent]
})
export class Product13pModule { }
