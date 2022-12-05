import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]',
})
export class BetterhighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgroundColor(this.defaultColor);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor(this.defaultColor);
  }
  private backgroundColor(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }
}
