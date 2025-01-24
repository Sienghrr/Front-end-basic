import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private Auth : AuthService ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let addHeader = req.clone({
    setHeaders:{
      // Authorization:"Bearer " + this.Auth.getToken() 
      Authorization: `Bearer ${this.Auth.getToken()}`
    }
   })
   return next.handle(addHeader);  // pass the modified request to the next handler
  }
}
