import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from '../model/Content';


@Injectable({
  providedIn: 'root'
})
export class ContentService {
  
  constructor(private http: HttpClient) { }

  saveContent(content:Content){
    return this.http.post("http://localhost:8092/api/v1/savecontent", content)
  }

  fetchAllContent():Observable<Array<Content>>{
    return this.http.get<Array<Content>>("http://localhost:8092/api/v1/fetchall")
   }

   deleteContent(contentid:any){
    return this.http.delete("http://localhost:8092/api/v1/deletecontent"+"/"+ contentid)
   }

   fetchContentByEmailId(emailid:any):Observable<Array<Content>>{
    return this.http.get<Array<Content>>("http://localhost:8092/api/v1/fetchbyemailid"+"/"+emailid)
   }
   
}
