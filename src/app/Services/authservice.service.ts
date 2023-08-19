import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthserviceService{
    constructor(private httpclient:HttpClient){}
    login(data:any):Observable<any>{
     return this.httpclient.post("http://localhost:8082/api/v1/login",data)
    }

  

    isLoggedIn: boolean = false;
  
    loging() {
      this.isLoggedIn = true;
    }
  
    logout() {
      this.isLoggedIn = false;
    }
  
}