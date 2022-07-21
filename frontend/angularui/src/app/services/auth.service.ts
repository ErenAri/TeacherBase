import { RegisterUser } from './../components/register/registerUser';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { LoginUser } from '../components/login/login';


@Injectable()
export class AuthService {

  constructor(private http:HttpClient) {}
  path = environment.path

  register(registerUser:RegisterUser){
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type","application/json")
    this.http.post(this.path+"/user/register",
    registerUser,{headers:headers}).subscribe(data=>{})
  }

  login(loginUser:LoginUser){
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type","application/json")
    this.http.post(this.path+"/user/login",
    loginUser,{headers:headers}).subscribe(data=>{
      alert(data)
    })
  }
}
