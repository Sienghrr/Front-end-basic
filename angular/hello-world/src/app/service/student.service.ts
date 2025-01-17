import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = "/assets/data/students.json";

  constructor(private http:HttpClient) { }
  getStudents() {
    let students =[{name: 'John',gender: 'Male',age:18} ,
      {name: 'Sieng',gender: 'Male',age:20},
      {name: 'Sona',gender: 'Female',age:20},
      {name: 'Daniel',gender: 'Male',age:22},
      {name: 'Sarah',gender: 'Female',age:21}
    ]
    return students;
  }
  getStudentV2():Observable<any[]> {

    return this.http.get<any[]>(this.url);
  }
}
