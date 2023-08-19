import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentService } from '../Services/contentservice.service';
import { Content } from '../model/Content';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit
 {

  contentid:any;
  title:String=""
  contentdata:String=""
  emailid:String=""

  content=new Content
  _contentForm:any

  constructor(private contentSavex:ContentService,private router:Router) { }

  onSave(_contentForm:NgForm)
  {
    console.log(this.content);

    this.contentSavex.saveContent(this.content).subscribe(
      {next(x){alert("Saved Successfully");
      },
     
      error(){alert("error")},
      complete(){alert("Complete")}}
    )
  }

  ngOnInit(): void {
  }

}
