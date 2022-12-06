import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostBinding('class.open') isOpen = false;
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // if (this.isOpen) {
  //   this.renderer.addClass(part, 'open');
  // } else {
  //   this.renderer.removeClass(part, 'open');
  // }

  //}
  //Does the element on which the dropdown directive sits contain the element on which the user clicked?

  // ● If yes (i.e. clicked inside):

  // toggle isOpen, like in the original version of the directive

  // ● If no (i.e. clicked outside):

  // set isOpen to false
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
