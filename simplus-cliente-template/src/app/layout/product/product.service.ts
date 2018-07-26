import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from './product.model';
import { environment as env } from '../../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private readonly PATH_ALL: string  = 'products'; // Todos Todas
  private readonly PATH_ALL_E1: string  = 'companys/1/products'; // Todos Empresa { 1 }
  private readonly PATH_ALL_E2: string  = 'companys/2/products'; // Todos Empresa { 2 }
  private readonly PATH_ALL_CX_EM1: string  = 'companys/1/gtln14'; // Caixas Empresa { 1 }
  private readonly PATH_ALL_CX_EM2: string  = 'companys/2/gtln14'; // Caixas Empresa { 2 }
  private readonly PATH_ALL_PRO_EM1: string  = 'companys/1/gtln13'; // Produtos Empresa { 1 }
  private readonly PATH_ALL_PRO_EM2: string  = 'companys/2/gtln13'; // Produtos Empresa { 2 }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
       console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return ('SERVIDOR FORA DO AR');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Servidor Erro !');
   }

  getProducts() {
    return this.http.get<Product[]>(env.baseApiUrl + this.PATH_ALL, httpOptions);
  }

  getProductsx(): Observable<Product[]> {
    return this.http.get<Product[]>(env.baseApiUrl + this.PATH_ALL, httpOptions)
                    .catch(this.errorHandler);

  }

  getProducts13() {
    return this.http.get<Product[]>(env.baseApiUrl  + this.PATH_ALL_E1);
  }

  getProducts14() {
    return this.http.get<Product[]>(env.baseApiUrl + this.PATH_ALL_E2);
  }

  getProducts14CXE1() {
    return this.http.get<Product[]>(env.baseApiUrl + this.PATH_ALL_CX_EM1);
  }

  getProducts14CXE2() {
    return this.http.get<Product[]>(env.baseApiUrl + this.PATH_ALL_CX_EM2);
  }

  getProducts14PROE1() {
    return this.http.get<Product[]>(env.baseApiUrl + this.PATH_ALL_PRO_EM1);
  }

  getProducts14PROE2() {
    return this.http.get<Product[]>(env.baseApiUrl + this.PATH_ALL_PRO_EM2);
  }

  downloadFile(): Observable<any> {
    return this.http.get('http://localhost:8080/download');
    }

  getProductById(id: number) {
    return this.http.get<Product>(this.PATH_ALL + '/' + id);
  }

  createProduct(product: Product) {
    return this.http.post(this.PATH_ALL, product);
  }

  updateProduct(product: Product) {
    return this.http.put(this.PATH_ALL + '/' + product.id, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.PATH_ALL + '/' + id);
  }
}
