import { Directive,Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appMyIfV2]'
})
export class MyIfDirectiveV2  {
    
    constructor(private vc : ViewContainerRef , private template : TemplateRef<any>) {

     }
    @Input()
     set appMyIfV2(value:boolean){
         if(value){
             this.vc.createEmbeddedView(this.template);
         }else{
             this.vc.clear();
         }
     }     
        
     
}