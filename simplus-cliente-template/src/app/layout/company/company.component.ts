import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CompanyService } from './company.service';
import { Company } from './company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companys: Company[];

  constructor(private route: Router, private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanys().subscribe(data => {
      this.companys = data;
    });
  }

}
