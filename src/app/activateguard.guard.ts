import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './Services/authservice.service';
import { LoginService } from './Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateguardGuard implements CanActivate {

  constructor(private authservice:AuthserviceService,private log1:LoginService ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authservice.isLoggedIn)
      return true;
    else {
      this.log1.toLogin();
      return false;
    }      

  }
  
}
