import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Company } from './company.model';
import { queryPaginated} from '../pagination/pagination';
import { Page} from '../pagination/page';

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:8080/companys';

  list(urlOrFilter?: string | object): Observable<Page<Company>> {
    return queryPaginated<Company>(this.http, this.API_URL, urlOrFilter);
  }

  getCompanys() {
    return this.http.get<Company[]>(this.API_URL);
  }

  getCompanyById(id: number) {
    return this.http.get<Company>(this.API_URL + '/' + id);
  }

  createCompany(company: Company) {
    return this.http.post(this.API_URL, company);
  }

  updateCompany(company: Company) {
    return this.http.put(this.API_URL + '/' + company.id, company);
  }

  deleteCompany(id: number) {
    return this.http.delete(this.API_URL + '/' + id);
  }
}
