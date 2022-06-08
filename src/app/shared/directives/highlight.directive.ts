import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective { 
    
    @HostListener('mouseover', ['$event']) onMouseover(evt: MouseEvent) {
        this.renderer.addClass(this.el.nativeElement, 'border');
        this.renderer.addClass(this.el.nativeElement, 'border-primary');
    }
    
    @HostListener('mouseleave', ['$event']) onMouseleave(evt: MouseEvent) {
        this.renderer.removeClass(this.el.nativeElement, 'border');
        this.renderer.removeClass(this.el.nativeElement, 'border-primary');
    }
    
    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {}

}
