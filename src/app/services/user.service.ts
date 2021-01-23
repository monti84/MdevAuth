import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor (
    private httpClient: HttpClient
  ) { }

  public GetSampleData(): Observable<any> {
    return this.httpClient.get('http://localhost/servers/angular-modules/MdevAuth/GetSampleData', { responseType: 'json' });
  }
}
