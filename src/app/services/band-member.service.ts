import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandMemberService {

  constructor(
    private http: HttpClient
  ) { }

  getBandMembers() {
    return this.http.get<any>(environment.bandMemberAPI + 'members') as Observable<any>;
  }
}
