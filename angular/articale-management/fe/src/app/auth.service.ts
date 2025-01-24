import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl ="http://localhost:3000/api/"
  constructor(private http : HttpClient) { }
  register(user:any) : Observable <any> {    
    return this.http.post(this.baseUrl + "register",user)
  }
  login(user:any) : Observable <any> {    
    return this.http.post(this.baseUrl + "login",user)
  }
  hasToken():boolean{
    return !!this.getToken();
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logOut(){
    localStorage.removeItem('token');
 
}
}

