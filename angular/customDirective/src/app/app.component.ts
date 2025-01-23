import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customDirective';
  // doMouseEnter(element: HTMLElement) {
  //   element.style.color = 'blue';
  // }
  // doMouseOut(element: HTMLElement) {
  //   element.style.color = 'red';
  // }
  show = true;
  isVisible = 7;
  isShow = true;
}
