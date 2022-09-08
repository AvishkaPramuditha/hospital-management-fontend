import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl=environment.baseUrl;
  constructor(private _http:HttpClient) { }

  login(userName:string,password:string){
    return this._http.post(this.baseUrl+"user/login",{
      username:userName,
      password:password
    })
  }

  register(userId:number,userName:string,email:string,password:string){
    return this._http.post(this.baseUrl+"user/sign-up",{
      userid:userId,
      username:userName,
      email:email,
      password:password,
    });
  }

}
