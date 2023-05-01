import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyleText]'
})
export class StyleTextDirective {

  classes= new Set();

  constructor(el:ElementRef) {
    el.nativeElement.style.color="red";
    el.nativeElement.style.backgroundColor="black";
   }
}
