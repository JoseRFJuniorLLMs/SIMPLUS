import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product14pRoutingModule } from './product14p-routing.module';
import { Product14pComponent } from './product14p.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [CommonModule, Product14pRoutingModule, PageHeaderModule],
  declarations: [Product14pComponent]
})
export class Product14pModule { }
