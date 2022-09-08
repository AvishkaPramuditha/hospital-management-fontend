import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators,FormControl} from "@angular/forms";
import {UserService} from "../user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userId=0;
  signUpForm=new FormGroup({
    userName:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
  })


  constructor(private userservice:UserService,private router:Router) { }

  alreadySaved=false;

  ngOnInit(): void {
  }

  signup() {
      this.userservice.register(this.userId,
        // @ts-ignore
        this.signUpForm.get('userName')?.value,
        this.signUpForm.get('email')?.value,
        this.signUpForm.get('password')?.value).subscribe(response=>{

          if (response){
            this.alreadySaved=true;
          }else {
            sessionStorage.setItem('userName', 
        // @ts-ignore
        this.signUpForm.get('userName')?.value)
            this.router.navigate(['/dashboard']);
          }
      },error => {
        console.log(error);
      })
  }
}
