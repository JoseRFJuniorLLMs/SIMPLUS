import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [CommonModule, CompanyRoutingModule, PageHeaderModule],
  declarations: [CompanyComponent]
})
export class CompanyModule { }
