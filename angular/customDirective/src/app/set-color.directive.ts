import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSetColor]'
})
export class SetColorDirective {
  @Input() hcolor !: string;
  @Input() defaultColor!: string;
  

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') 
  doMouseEnter() {
    this.element.nativeElement.style.color = this.hcolor; 
  }

  @HostListener('mouseleave')
  doMouseLeave() {
    this.element.nativeElement.style.color = this.defaultColor; 
  }
}
