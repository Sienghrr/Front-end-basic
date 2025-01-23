import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges{
 ngOnChanges(changes: SimpleChanges): void {
  
    console.log(changes);
    let logInChanges = changes["isLogin"];
    if(logInChanges.currentValue ) {
      this.mss = "You are logged in";

 }else{
    this.mss = "You are not logged in";
 }
}
 @Input() isLogin !: boolean;
//  private _isLogin !: boolean;
 mss!:string;

//  get isLogin(){return this._isLogin;}

//  @Input()
//  set isLogin(value: boolean){
//   if(value){
//     this.mss = "You are logged in";
  
//   }else{
//     this.mss = "You are not logged in";
//   }
//  }


}

