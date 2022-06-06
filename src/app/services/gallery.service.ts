import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(
    private http: HttpClient
  ) { }

  getImages() {
    return this.http.get(environment.api + '/gallery?key=the501s-gallery-bucket', {responseType: 'text'}) as Observable<any>;
  }

}
