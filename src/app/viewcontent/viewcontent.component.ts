import { Component, OnInit } from '@angular/core';
import { ContentService } from '../Services/contentservice.service';
import { Content } from '../model/Content';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewcontent',
  templateUrl: './viewcontent.component.html',
  styleUrls: ['./viewcontent.component.css']
})
export class ViewcontentComponent implements OnInit {

  constructor(private viewcontx:ContentService,private delcont:ContentService) {

   }
  //  contentdata1:Content[]=[];

  user1:User={}
  content1:Content[]=[];
  _contentid?:any
  emailid:any

  ngOnInit(): void
   {
    this.viewcontx.fetchAllContent().subscribe({
    next:data=>{
    this.content1 = data;
   },
   error:e=>{alert("Something Went Wrong")}
})

    this.emailid=new FormControl('',[Validators.required])
  }

  deleteFunction(_contentid:any)
    { 
       this.delcont.deleteContent(_contentid).subscribe(
        {next:()=>{alert("Delete Successfully"),
      this.ngOnInit();},
        
        error(){alert("error")},
        complete(){alert("Complete")}}
      )
      
    }

    

}
