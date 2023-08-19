
  import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../Services/authservice.service';
import { Login } from '../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 


  log:Login={};

  constructor(private auth:AuthserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
})
  loginFun(){
    this.auth.login(this.userForm.value).subscribe(
      (response)=>{
        console.log(response);
        alert("login successful")
        this.auth.isLoggedIn=true
        this.router.navigate(['/content'])
      },
      (error=>{alert("Invalid password")})
    )

}

navFunction(){
  this.router.navigate(['/register'])
}

}
