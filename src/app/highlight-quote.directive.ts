import { Directive, ElementRef, Input, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective implements AfterViewInit {
  @Input('appHighlightQuote') quote: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // after view is initialized the DOM can be accessed
  ngAfterViewInit() {
    this.highlightQuote(this.quote);
    // set highlight style
    this.renderer.setStyle(this.el.nativeElement.querySelector("span"), 'background', 'rgb(250, 234, 112)');
  }

  private highlightQuote(color: string) {
    this.el.nativeElement.innerHTML =
      this.el.nativeElement.innerHTML.replace(this.quote, "<span>" + this.quote + "</span>");
  }
}
