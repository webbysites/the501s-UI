import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RequestContactService {

  constructor(
    private http: HttpClient
  ) { }

  createRequestContact(requestContact: Object): Observable<Object> {
    return this.http.post(environment.api + 'request/create', requestContact, httpOptions);
  }
}
