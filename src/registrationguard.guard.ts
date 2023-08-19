import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanExit
{
  checkBeforeExit():any;
}

@Injectable({
  providedIn: 'root'
})
export class ResisterguardGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: CanExit,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return component.checkBeforeExit();
  }
  
}