import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  url = "http://localhost:3000/registerStudent";
  registerStudent(student:any){
    return this.http.post(this.url,student);
  }
}
