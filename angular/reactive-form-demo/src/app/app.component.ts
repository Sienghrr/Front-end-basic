import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { usernameValidator } from './common/username.validator';
import { passwordValidator } from './common/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'reactive-form-demo';
  constructor(private fb: FormBuilder) {}
  registrationForm !: FormGroup;
  get username(){ return this.registrationForm.get('username');} // for replace this registrationForm.get('username')
  get confirmPassword(){ return this.registrationForm.get('confirmPassword');}
  get email(){ return this.registrationForm.get('email');}
  get altphones(){ return this.registrationForm.get('altphones') as FormArray;}

  addPhone(){
    this.altphones.push(this.fb.control(''));
    console.log(this.altphones);

  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ["",[Validators.required,Validators.minLength(3),usernameValidator(/sienghrr/)]],
      password: [""],
      confirmPassword: [""],
      phone:[],
      altphones: this.fb.array([]),
      address: this.fb.group({
        province: [""],
        district: [""],
        commune: [""]
      } ),
      email:[""],
      subscribe:[""]
    },{validators: passwordValidator});
    this.registrationForm.get("subscribe")?.valueChanges.subscribe(checkedValue => {      
      //console.log(checkedValue);
      if(checkedValue){        
        this.email?.setValidators(Validators.required);
      }else{
        this.email?.clearValidators();
      }
      this.email?.updateValueAndValidity();
    });
  }
;
  

  // registrationForm = this.fb.group({
  //   username: ["",[Validators.required,Validators.minLength(3),usernameValidator(/sienghrr/)]],
  //   password: [""],
  //   confirmPassword: [""],
  //   address: this.fb.group({
  //     province: [""],
  //     district: [""],
  //     commune: [""]
  //   }, ),
  //   email:[""],
  //   subscribe:[""]
  // },{validators: passwordValidator}); // move to onInit method in order to do subscription
  // Reactive form controls
  // registrationForm = new FormGroup({
  //   username: new FormControl(),
  //   password: new FormControl(),
  //   confirmPassword: new FormControl(),
  //   address: new FormGroup({
  //     province: new FormControl(),
  //     district: new FormControl,
  //     commune: new FormControl()
  //   })

  // });
  setTheValue(){
    // when we use the setValue it need to be the same structure as the registrationForm
    //but if we want to skip some fields we can use the patchValue
    this.registrationForm.patchValue({
      username : 'Sok',
      password: '123',
      confirmPassword: '123',
      address: {
        province: 'PP',
        district: 'PP',
        commune: 'PP'
      }
    });
     
  }
}
