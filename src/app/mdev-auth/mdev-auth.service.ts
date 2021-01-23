import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MdevAuthService {
  constructor (
    private httpClient: HttpClient
  ) {}

  Login (url:string, name:string, password: string): Observable<any> {
    let Headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'}),
      observe: 'body' as any,
      responseType: 'json' as any
    };
    
    let Parameters = {name: name, password: password};
    let QueryString = Object.keys(Parameters).map(key => key + '=' + Parameters[key]).join('&');
    let ret = this.httpClient.post(url, QueryString, Headers);
    return ret;
  }
}
