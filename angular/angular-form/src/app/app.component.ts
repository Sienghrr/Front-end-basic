import { Component } from '@angular/core';
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';
  subjects =[ "java","PHP","C#"];
  stu = new Student("DongSiengly","siengsweetheart151@gmail.com","java","female");
}
