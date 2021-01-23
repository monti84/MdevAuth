import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    constructor (
      private httpClient: HttpClient
    ) { }
  
  Login (name:string, password: string): Observable<any> {
    let Url = 'http://localhost/servers/angular-modules/MdevAuth/Login';
    let Headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'}),
      observe: 'body' as any,
      responseType:'json' as any
    };
    
    let Parameters = {name: name, password: password};
    let QueryString = Object.keys(Parameters).map(key => key + '=' + Parameters[key]).join('&');
    return this.httpClient.post(Url, QueryString, Headers);
  }
}
