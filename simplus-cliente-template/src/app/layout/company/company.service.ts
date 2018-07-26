import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Company } from './company.model';

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:8080/companys';

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
