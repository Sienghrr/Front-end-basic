import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData ={
    username :'',
    password :''
  }
  constructor(private auth : AuthService , private router : Router) { }
  registerUser(){
    //console.log(this.registerData);
    this.auth.register(this.registerData).subscribe(res =>{
      console.log(res);   
      localStorage.setItem('token', res.token);   
      this.router.navigate(['/paid_article']);  
    }, err =>{
      console.log(err);
    })
  }


}
