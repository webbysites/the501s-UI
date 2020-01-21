import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class VoteContactService {

  constructor(
    private http: HttpClient
  ) { }

  createVoteContact(voteContact: Object): Observable<Object> {
    return this.http.post<Object>(environment.voteContactAPI + 'create', voteContact, httpOptions);
  }
}
