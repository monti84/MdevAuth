import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MdevAuthGuard implements CanActivate {
    constructor (private Router: Router) { } 
    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('MdevAuthToken')) return true;
    else { 
      console.log('unauthorized');
      this.Router.navigate(['/login']); 
      return false;
    }
  } 
}
