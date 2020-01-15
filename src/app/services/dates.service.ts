import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  constructor(
    private http: HttpClient
  ) { }

    getDates() {
      return this.http.get<any>(environment.datesAPI) as Observable<any>;
    }

}
