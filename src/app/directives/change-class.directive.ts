import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeClass]'
})
export class ChangeClassDirective {

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
    this.renderer.addClass(this.hostElement.nativeElement, 'custom-theme');
    console.log('w');
  }

}
