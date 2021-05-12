import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstafeedService {

  constructor(
    private http: HttpClient
  ) { }

  instaFeed() {
    return this.http.get('https://graph.instagram.com/me/media?access_token=IGQVJYcTkyaTVzVnpKeUJ3MHpkNENPaEx4SVVCRGZAfblBKTnV6RzlfX2VZAcFlLNXYyYW9qazBVcDJzTkxnWk52Y3gyUW9kMmI0aTQ0d2RDUGtLb0NTSFIwRnpWVmNDaDY2Um9DTk5YUU1CNDg4VFFMZAwZDZD&fields=media_url,media_type,caption,permalink') as Observable<any>;
  }

}
