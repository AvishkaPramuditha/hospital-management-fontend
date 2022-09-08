import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    userName:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),}
  )

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  invalidUser:boolean=false;

  login() {

   this.userService.login(
      // @ts-ignore
      this.loginForm.get('userName')?.value,
      this.loginForm.get('password')?.value).subscribe(respones=>{
     console.log(respones)
      if (respones){
        sessionStorage.setItem('userName', 
        // @ts-ignore
        this.loginForm.get('userName')?.value)
        this.router.navigate(['/dashboard']);
        this.invalidUser=false;
      }else {
        this.invalidUser=true;
      }
    },error => {
        this.invalidUser=true;
        console.log(error);

    })
  }

}
