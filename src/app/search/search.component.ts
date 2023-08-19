import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Content } from '../model/Content';
import { ContentService } from '../Services/contentservice.service';
import { User } from '../model/User';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private delcont:ContentService) { }

  content2:Content[]=[];
  user1:User={}
  emailid?:String
   x:any
  ngOnInit(): void {
  }

  searchForm=new FormGroup({
     emailid:new FormControl('')
  })

  

  fetchbyemailid(x:any)
    {   
        // let x:String='emailid'
        this.delcont.fetchContentByEmailId(x).subscribe({
          next:data=>{

            this.content2=data;
          
          }
          
        })
    }

}
