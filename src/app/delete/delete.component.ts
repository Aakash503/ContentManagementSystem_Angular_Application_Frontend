import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from '../model/User';
import { UserRegistrationService } from '../Services/user-registration.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
 export class DeleteComponent implements OnInit {

  user1:User={}
  username:string=""
   constructor(private deluser:UserRegistrationService) { 
   
   }


  ngOnInit(): void {
  }

  // UserForm=new FormGroup({
  //   username:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(16)]),
  // }
// )

    removeFunction()
    { 
       this.deluser.deleteUser(this.username).subscribe(
        {next(x){alert("Delete Successfully")},
        error(){alert("error")},
        complete(){alert("Complete")}}
      )
      
    }

   
}
