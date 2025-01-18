import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  studentId !: number;
  constructor(private activateRoute : ActivatedRoute,
    private router : Router) { }
  ngOnInit(): void {
    // let id =this.activateRoute.snapshot.paramMap.get('id');
    // this.studentId = parseInt(  id || "-1");
    this.activateRoute.paramMap.subscribe( (paramMap:ParamMap)=> {
      this.studentId = parseInt(paramMap.get('id') || "-1");
  });
}
  goNext() {
    let nextid = this.studentId +1;
    this.router.navigate(['/detail',nextid]);
  }
  goPrevious() {
    let previousid = this.studentId -1;
    this.router.navigate(['/detail',previousid]);
  }
  goBack(){
    this.router.navigate(['/list',{myId:this.studentId}]);
  }


}
