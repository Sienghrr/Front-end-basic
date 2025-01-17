import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {
isCambodia = false ;
color = "black";
colors =["black", "red", "blue", "green", "yellow", "pink", "purple", "orange", "brown", "gray"];
showText(){
  this.isCambodia = !this.isCambodia;
}
}
