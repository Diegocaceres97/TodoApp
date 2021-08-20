import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements AfterViewInit, OnChanges {

  @Input('appToolTip') tooltipContent: string;

  tippyInstance: any;

  constructor(
    private el: ElementRef
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['tooltipContent']){
        this.updateToolTipContent()
    }
  }
  ngAfterViewInit(): void {
    this.tippyInstance = tippy(this.el.nativeElement, {
      content: this.tooltipContent
    })
  }
  updateToolTipContent(){
    if(this.tippyInstance){
      this.tippyInstance.setContent(this.tooltipContent)
    }
  }
}
