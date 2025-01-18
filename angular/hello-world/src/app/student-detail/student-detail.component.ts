import { Component , OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
constructor(private _setService : StudentService){}
students : any;
errorMessage : any;
  ngOnInit(): void {
    //this.students = this._setService.getStudents();
    this._setService.getStudentV2().subscribe(data => {this.students = data},
      error =>{this.errorMessage = error}     

    );
  }

}
