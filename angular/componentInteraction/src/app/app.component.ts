import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  // @ViewChild(ChildComponent) myElement!: ChildComponent;

  // ngAfterViewInit(): void {
  //  this.myElement.name = 'sweetheart';
  // }
  greeting() {
   this.mss.sendMessage('Hello child');
  }
  constructor(private mss:MessageService){}
  askForLocation(){
    this.mss.sendMessage('location?');
  }
  
}
