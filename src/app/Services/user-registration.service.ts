import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  User } from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  
  constructor(private http: HttpClient) { }

  saveUser(user:User){
    return this.http.post("http://localhost:8082/api/v1/register", user)
  }

  fetchAllUsers():Observable<Array<User>>{
    return this.http.get<Array<User>>("http://localhost:8082/api/v1/fetchall")
   }

   deleteUser(username:string){
    return this.http.delete("http://localhost:8082/api/v1/deleteuser"+"/"+ username)
   }

}
