import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserRegistrationService } from '../Services/user-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  // username:String="";
  // firstname:String="";
  // lastname:String="";
  // email:String="";
  // mobileno:any;
  // password:String="";

  user:User={};
  registrationForm: any;

  constructor(private userRegx: UserRegistrationService,private fb: FormBuilder,private router:Router
  ) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(4),Validators.pattern("^[A-Za-z][A-Za-z0-9_]{7,29}$")]),
      firstname: new FormControl('', [Validators.required, Validators.maxLength(12), Validators.pattern("^[a-zA-Z]+$")]),
      //  firstname: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      lastname: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.minLength(2),Validators.pattern("^[a-zA-Z]+$")]),
      email: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.email]),
      mobileno: new FormControl('', [Validators.required, Validators.pattern(/^[789]\d{9,9}$/)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(16),Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)])
    })
  }

  // public regError = (controlName: string, errorName: string) =>{
  //   return this.registrationForm.controls[controlName].hasError(errorName);
  //   }

  
  onRegister(){
    console.log(this.user); 

    this.userRegx.saveUser(this.user).subscribe(
      {next:()=>{alert("Registration Successfully")
      ,this.router.navigate(['/login'])
      },
      error(){alert("error")},
      complete(){alert("Complete")}}

    )
  }

  get username(){
    return this.registrationForm.get("username")
  }

  get firstname(){
    return this.registrationForm.get("firstname")
  }
 
  get lastname(){
    return this.registrationForm.get("lastname")
  }

  get email(){
    return this.registrationForm.get("email")
  }

  get mobileno(){
    return this.registrationForm.get("mobileno")
  }

  get password(){
    return this.registrationForm.get("password")
  }
}
