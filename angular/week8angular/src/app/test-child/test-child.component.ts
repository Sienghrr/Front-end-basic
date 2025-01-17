import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent {
  @Input() parentData = "";
  @Input("myGender") gender = "";

  age = 18;
  @Output() childEvent = new EventEmitter();

  sendData(){
    this.childEvent.emit(this.age);
  }

}
