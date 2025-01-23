import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  login = true;
  title = 'componentInteraction';
  imagePath = '/assets/winsever1.png';
  count = 0;
  name = "";
  username = "";
  private _myname = "";

  @ViewChild("usernameRef") usernameTextField !: ElementRef;
  ngAfterViewInit(): void {
    //this.usernameTextField.nativeElement.focus(); 
  }

  set myname(value: string){
    this._myname = value;
    if(value === "sieng"){
      alert("You are the owner of your own self");
    }
  }
  get myname(){return this._myname;}
  doCount(){
    this.count++;
  }
  checkName(value: string){
    this.username = value;
    if(this.username==="sieng"){
      alert("You are the owner of your own self");
    }
  }
}
