import { Directive, Input, HostListener, ElementRef, HostBinding } from '@angular/core';
import { format } from 'util';

@Directive({
  selector: '[appInputDirective]'
})
export class InputDirectiveDirective {
  @Input('appInputDirective') format;

  constructor(private el: ElementRef) { }

  //alias name is case sensitive, its name is same like function name.
  @HostListener('blur') onblur() {
    this.formatChange();
    this.borderVariale = '5px solid green';
  }

  @HostBinding('style.border') borderVariale: string;

  @HostListener('keydown') onkeydown() {
    this.formatChange();
  }

  formatChange() {
    let value: string = this.el.nativeElement.value;
    if (this.format.toLowerCase() == "lowercase") {
      this.el.nativeElement.value = value.toLowerCase();
    }
    else if (this.format.toLowerCase() == "uppercase") {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }
}
