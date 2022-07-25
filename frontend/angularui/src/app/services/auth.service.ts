import { RegisterUser } from './../components/register/registerUser';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { LoginUser } from '../components/login/login';
import { Token } from '@angular/compiler';


@Injectable()
export class AuthService {

  constructor(private http:HttpClient) {}
  path = environment.path;
  TOKEN_KEY= "token"

  register(registerUser:RegisterUser): void{
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
      this.saveToken(data["token"])
    })
  }

  saveToken(token: string){
    localStorage.setItem(this.TOKEN_KEY,token)
  }

  logOut(){
    localStorage.removeItem(this.TOKEN_KEY)
  }

  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY)
  }

  get token(){
    return localStorage.getItem(this.TOKEN_KEY)
  }
}
