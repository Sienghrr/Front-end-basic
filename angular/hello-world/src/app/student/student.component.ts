import { Component,OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private _studentService : StudentService) { }
  students : any ;
  ngOnInit() : void{
   // this.students = this._studentService.getStudents();
  this._studentService.getStudentV2().subscribe(data => {this.students = data
  }
  );
  }
}
