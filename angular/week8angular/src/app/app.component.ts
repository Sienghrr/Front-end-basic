import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week8angular';
  name = "Sienghrr";
  gender = "Male";
  theAge = 0;
  showMss(){
    //alert("works!");
    this.name="Sienghrr";
  }
  showInfo(e: any){
    console.log(e);
  }
  show(text: string){
    this.name = text;
  }
  display(control: any){  
    this.name = control.value;
  }
  receiveFromChild(a:number){
    this.theAge = a;
  }
}
