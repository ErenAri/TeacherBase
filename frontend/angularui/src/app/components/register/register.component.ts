import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegisterUser } from './registerUser';
import {AuthService} from "../../services/auth.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService]
})
export class RegisterComponent implements OnInit {
  

  constructor(private authService:AuthService) { }
  registerUser:any={}
  ngOnInit() {
    
  }

  register(registerUser:RegisterUser){
    this.authService.register(registerUser)
  }

}
