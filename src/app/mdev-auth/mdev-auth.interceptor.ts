import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class MdevAuthInterceptor implements HttpInterceptor {

  constructor (
    private Router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('MdevAuthToken'),
      }
    });
   
    return next.handle(request).pipe(
      tap((httpEvent: HttpEvent<any>) =>{
        if (httpEvent instanceof HttpResponse ) {
          let JWTToken = httpEvent.headers.get('JWTToken');
          if (JWTToken !== null) {
            localStorage.setItem('MdevAuthToken', JWTToken);
          }
          else {
            localStorage.removeItem('MdevAuthToken');
            this.Router.navigate(['/login']);
          }
        }
      }))
  }
 }
