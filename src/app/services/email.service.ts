import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient
  ) { }

  sendContactFormEmail(email: Object): Observable<Object> {
    return this.http.post(environment.api + 'sendContactFormEmail', email, {responseType: 'text'});
  }

  sendVotingFormEmail(email: Object): Observable<Object> {
    return this.http.post(environment.api + 'sendVotingFormEmail', email, {responseType: 'text'});
  }

  sendRequestFormEmail(email: Object): Observable<Object> {
    return this.http.post(environment.api + 'sendRequestFormEmail', email, {responseType: 'text'});
  }

}
