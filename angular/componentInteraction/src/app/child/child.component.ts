import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  question!: any;
  constructor(private mssService: MessageService) {
    
  }
  ngOnInit(): void {
    this.mssService.message$.subscribe(message => {
      if(message ==="Hello child"){
        this.question = message;
        this.question = "Hello parent";
      }
      if(message ==="location?"){
        this.question = message;
        this.question = "I am at home";
      }
        
    });
  }

//   name ='sieng';
//  @Output() childEvent = new EventEmitter();
//   callParent() {
//     this.childEvent.emit(this.name);
//   }

  

}
