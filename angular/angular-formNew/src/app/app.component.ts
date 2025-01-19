import { Component } from '@angular/core';
import { Student } from './models/student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';
  subjects =[ "java","PHP","C#"];
  stu = new Student("","siengsweetheart151@gmail.com","java","female");
  isValidSubject = false;
  constructor(private studentService: StudentService){};
  setSubject(subject:string){
    if(subject === "default"){
      this.isValidSubject = false;

  }else {
    this.isValidSubject = true;
  }
}
isSubmitted = false;
doSubmit(){
  this.isSubmitted = true;
  console.log("Submit works");
  this.studentService.registerStudent(this.stu).subscribe(data=>{
    console.log(data);
  });
}
}