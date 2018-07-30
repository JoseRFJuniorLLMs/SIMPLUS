import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, FormGroup } from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import { debounceTime, merge, share, startWith, switchMap } from 'rxjs/operators';

import { CompanyService } from './company.service';
import { Company } from './company.model';

import { Page } from '../pagination/page';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  filterForm: FormGroup;
  page: Observable<Page<Company>>
  pageUrl = new Subject<string>();

 // companys: Company[];

  constructor(private route: Router, private companyService: CompanyService) {
    this.filterForm = new FormGroup({
      is_available: new FormControl(),
      search: new FormControl()
    });
    this.page = this.filterForm.valueChanges.pipe(
      debounceTime(200),
      startWith(this.filterForm.value),
      merge(this.pageUrl),
      switchMap(urlOrFilter => this.companyService.list(urlOrFilter)),
      share()
    );
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }
}
