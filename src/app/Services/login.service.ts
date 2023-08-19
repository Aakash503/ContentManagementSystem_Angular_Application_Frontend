import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoginSuccess:boolean=false;
  
  constructor(private httpClient :HttpClient,private routerService: Router) { }

  storeData(data1:User){
    return this.httpClient.post("http://localhost:8082/api/v1/register",data1);
  }
  fetchAllData():Observable<Array<User>>{
    return this.httpClient.get<Array<User>>("http://localhost:8082/api/v1/fetchall")}

    login(data: any):Observable<any>{
      return this.httpClient.post(`http://localhost:8082/api/v1/login`,data);
    }

    toHome() {
      this.routerService.navigate([""]);
    }
  
    toLogin() {
      this.routerService.navigate(["login"]);
    }
  
}
