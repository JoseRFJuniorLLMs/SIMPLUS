import { Injectable , Component} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GenericHttpClientService {
    private readonly baseUrl: string = 'http://localhost:8080/';


    constructor(private httpClientModule: HttpClient)  {
    }

    public GenericHttpPostWithOutToken<T, TE>(postViewModel: TE, destinationUrl: string): Observable<T> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClientModule.post<T>(this.baseUrl + destinationUrl, postViewModel, { headers });
    }

}