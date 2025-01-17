import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  getStudents() {
    let students =[{name: 'John',gender: 'Male',age:18} ,
      {name: 'Sieng',gender: 'Male',age:20},
      {name: 'Sona',gender: 'Female',age:20}
    ]
    return students;
  }
}
