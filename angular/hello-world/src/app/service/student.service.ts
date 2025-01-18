import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { retry,catchError } from 'rxjs/operators';

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

    // return this.http.get<any[]>(this.url);
    return this.http.get<any[]>(this.url).pipe(catchError(this.handleError));
  }
  handleError(error:HttpErrorResponse) {
    let errorMessage = error.message || "Error from server";
    return throwError(errorMessage);
  }

}
