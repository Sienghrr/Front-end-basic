import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent  implements OnInit {
  lastVisitedId = 0;
  constructor(private router : Router
    , private activeroute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.activeroute.paramMap.subscribe( paramMap => {
      this.lastVisitedId = parseInt(paramMap.get('myId') || "-1");
  });
}
  students =[{id:1,name: 'John',gender: 'Male'},{id:2,name:"sieng",gender: 'Female'}]
  goToStudentDetail(studentid : number){
   // alert(studentid);  
   this.router.navigate(['/detail',studentid]);
  
}
checkHighlight(studentid : number){
  return studentid === this.lastVisitedId;
}


}