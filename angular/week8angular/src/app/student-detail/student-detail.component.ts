import { Component } from '@angular/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {
  students =[{name: 'John',gender: 'Male',age:18} ,
    {name: 'Sieng',gender: 'Male',age:20},
    {name: 'Sona',gender: 'Female',age:20}
  ]
}
