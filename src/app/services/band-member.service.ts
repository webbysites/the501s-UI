import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BandMemberService {

  constructor(
    private http: HttpClient
  ) { }

    getBandMembers() {
      return this.http.get(environment.bandMemberAPI + 'members') as Observable<any>;
    }

}
