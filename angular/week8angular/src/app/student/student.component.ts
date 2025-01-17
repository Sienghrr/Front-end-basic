import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
students =[{name: 'John',gender: 'Male',age:18} ,
  {name: 'Sieng',gender: 'Male',age:20},
  {name: 'Sona',gender: 'Female',age:20}
]
}
