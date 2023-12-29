import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective {

  constructor(private myElem :ElementRef) {
    console.log(myElem);
    
   }

  //  @HostListener('click') onMouseEnter() {
    
  //   this.myElem.nativeElement.style.backgroundColor = "pink";
  //   this.myElem.nativeElement.style.width = "200px"; // Set the desired width value
  // }
  
  // @HostListener('mouseleave') onMouseLeave() {
   
  //   this.myElem.nativeElement.style.backgroundColor = "yellow";
  //   this.myElem.nativeElement.style.width = "100px"; // Set the default width value
  // }




  @HostListener('mouseover') hover() {
    this.myElem.nativeElement.style.backgroundColor = "pink";
    
    this.myElem.nativeElement.style.transform = "scale(1.03,1.03)";
    
  }

  @HostListener('mouseleave') leave() {
    this.myElem.nativeElement.style.background = "white";
    this.myElem.nativeElement.style.transform = "scale(1,1)";
  }

 
}
