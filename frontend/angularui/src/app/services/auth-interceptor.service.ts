import { AuthService } from 'src/app/services/auth.service';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { NgIfContext } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) {}

    intercept(request,next){
      var authService = this.injector.get(AuthService)
      if(authService.isAuthenticated){
        var authRequest = request.clone({
          headers:request.headers.set("authorization","token"+authService.token)
        })
      }
      
      
      return next.handle()
    }
    
    else{
      return NgIfContext.handle(Request)
    }
   
}
