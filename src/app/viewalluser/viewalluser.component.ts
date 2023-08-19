import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserRegistrationService } from '../Services/user-registration.service';

@Component({
  selector: 'app-viewalluser',
  templateUrl: './viewalluser.component.html',
  styleUrls: ['./viewalluser.component.css']
})
export class ViewalluserComponent implements OnInit {

  
  user: User[]=[];
  constructor(private viewuserx:UserRegistrationService) { }

  ngOnInit(): void 
  {
    this.viewuserx.fetchAllUsers().subscribe({
      next:data=>{
        this.user = data;
      },
      error:e=>{alert("Something Went Wrong")}
    })

    
}
  }

  
