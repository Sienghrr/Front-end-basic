import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginData ={
  username: '',
  password: ''
}
constructor(private auth: AuthService,private router : Router){}
login(){
this.auth.login(this.loginData).subscribe(res =>{
  console.log(res);
  localStorage.setItem('token', res.token);
  this.router.navigate(['/paid_article']); 
}, err =>{
  console.log(err);
})
}
}
