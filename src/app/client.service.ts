import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const header = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const API_URL_CLIENT = 'http://localhost:8080/v1/client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    
  constructor(private http: HttpClient) { }

  save(client: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post(API_URL_CLIENT, client,header);
    console.log(result);
    return result;
  }
}
